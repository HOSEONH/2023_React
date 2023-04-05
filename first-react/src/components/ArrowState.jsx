// 16.8버전 이후로 함수형에서 state 사용 가능
import { useState } from "react";

// css파일 들고오기
import './arrowState.css'

// 화면의 업데이트에 상관없이 사용하는 변수
// 현재 컴포넌트에서 전역변수로 쓸 변수
let globalId = 4;

// 함수형 컴포넌트의 특징
// 1) this를 사용하지 않는다
// 2) 안에 값을 넣어줄 때 변수로 할당하므로 const나 let 사용
const ArrowState = (props) => {
    // useState는 항상 함수(컴포넌트)안에 작성
    const [message, setMessage] = useState(
        {
            time : "10:53",
            text : "메시지 입니다 🥨"
        });
    // useState는 여러번 사용할 수 있다
    const [number, setNumber] = useState(0);
    const [array, setArray] = useState([1, 2, 3, 4]);

    // map을 이용하여 id값과 name을 화면에 출력
    const [students, setStudents] = useState(
        [
            {id : 1, name : "자두", checked : true},
            {id : 2, name : "민지", checked : false},
            {id : 3, name : "돌돌이", checked : false} // 데이터 기준으로 생각 갯수만큼 체크 ! 만들기
        ]
    );
    // 학생 이름을 받아올 공간
    const [inputName, setInputName] = useState("");

    // 클래스형에서 render()안에 값이 계속 초기화
    // 함수형 클래스에서는 함수 안에 있는 내용이 계속 초기화
    let id = 4;


    // 메소드 작성
    const inputChange = (e)=>{setInputName(e.target.value)}
    // const inputChange = function(e){setInputName(e.target.value)}

    const addStudent = () => { // 🍈여기에 만들고 넣어준다
        // 값을 받아와서 새로운 배열로 만들기
        // 새로운 배열 students 할당
        const newStudents = students.concat ( // 새로운 배열이 들어갈 공간 만들기 // 새로운 배열 만들기 .concat
            {
                id : globalId,
                name : inputName
            }
        ); 
        globalId++;
        setStudents(newStudents); // 이 부분 어떻게 진행되는거지
        setInputName(""); // 글자가 지워지도록 // 여기 넣어준 값을 들고 👽
    }

    // id값을 전달하여 메소드 안에서 사용
    const deleteStudent = (id) =>{ // (id) 괄호안에 id넣어서 사용하는 거랑 그냥 id라고 하는거랑 뭐가 어떻게 다른지..?
        // 클릭했을 때 배열 삭제
        // 클릭한 id값을 제외하고 새로운 배열 작성
        // filter
        const newStudents = students.filter(
            (s)=>s.id !== id
        )
        setStudents(newStudents);
    }

    return (
        <div>
            {/* text만 들고 올 수 있도록 ? 왜 그렇게 한다고 그랬지 ? ! */}
            <p>{number}, {message.text}</p>
            <button
                // useState로 작성한 함수를 통해서 값을 넣어줄 떄
                // 그 값의 자료형이 같지 않아도 넣어준다
                // 작성할 때 그 값의 자료형을 확인하고 동일한 형태로 할당 
                // 객체의 일부분만 수정해서 넣을 때 사용하는 연산자 : ...
                // ...(스프레드 연산자 사용)
                // : 객체나 배열안에 있는 값(요소)을 꺼내서 사용
                // 객체에서 동일한 속성이름을 사용하면 마지막에 적은 값 사용
                onClick={()=>{setMessage({...message, text:"🥨 수정된 내용"})}} // setMessage는 함수라서 ? 바꿀 내용넣어 수정할 수 있다 
            >
                글자값 수정 🥨
            </button>
            {
                array.map((num, i)=><li key={i}> {num} </li>)
            }
            <h3>학생추가</h3>
            <input
                type="text"
                onChange={inputChange}
                value={inputName} // 👽여기에 넣어준다
            />
            <button
                onClick={addStudent} // 잘라낸 내용을 가지고 🍈
            >
                추가
            </button>
            <ul>
            {
                students.map((student)=>
                <li
                    key={student.id}
                    className={ student.checked ? "on" : "" } // css 스타일 적용
                >
                    <input type="checkbox"
                        // checked={true} // 고정된 값이 아닌 바꿀 수 있는 값으로 넣어줘야 한다.
                        checked={student.checked} // 고정되어 클릭이 불가 
                        readOnly // 읽기만 하겠다 // 이게 뭐야 왜 사용하는거지
                        onClick={()=>{ // onClick 이벤트를 추가해서 바꾸어 준다 클릭할 수 있도록!
                            // 체크박스를 클릭하면, 클릭한 객체의 checked 값이 바뀜
                            // 배열을 추가하거나 삭제하는 것이 아닌 객체의 내용을 바꾼다?
                            // map을 이용하여 작성
                            // map() : 배열안의 요소의 값을 return을 통해 새로운 배열 만듦
                            // 클릭한 객체를 찾았다면 > 그 객체의 checked 값을 수정해서 return
                            const newStudents = students.map((s)=>{ // 배열 전달 😸
                                // s통해 각각의 객체 값 확인 // 각각의 객체 값이 어떻게 확인되는거지?!
                                // 1) 클릭한 체크박스의 id값과 모든 s의 id와 비교
                                // 2) id 값이 같지 않다면 원래 객체 를 돌려주기
                                // 3) id 값이 같다면 checked 값을 !을 이용하여 수정한 객체 // 무슨 말일까나
                                if(student.id !== s.id) {
                                    return s;
                                } else {
                                    // 원래 객체에서 checked 값만 수정하기 위해서
                                    // s안에 있는 속성을 ...(스프레드 연산자)를 이용해서 추가
                                    // 수정할 속성인 checked를 작성해서 수정
                                    return {...s, checked : !s.checked } // 그럼 이게 checked는 s.checked가 아니다? 맞나..
                                }
                            })
                            setStudents(newStudents) // 들고옴 😸 // 왜 들고와야해..?
                        }}
                    />
                    {student.id}. {student.name}
                    <button
                        // 클릭했을 때 배열 삭제 > 클래스형 컴포넌트 내용 참고
                        onClick={()=>{deleteStudent(student.id)}} // 모르겠다 왜 students.id 들고와서 왜 ()쓰고 왜 화살표 함수 쓰는겅지 
                    >
                        X
                    </button>
                </li>)
            }
            </ul>

        </div>
    )
}

export default ArrowState;
