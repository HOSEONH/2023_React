import React, { useEffect, useState } from 'react'

export default function EffectHook() {
    // 함수형 컴포넌트 안에서 hook 사용 가능
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    // useEffect를 사용하여 라이프사이클 메소드의 효과를 낼 수 있다
    // useEffect( ()=>{} ) 함수를 사용하여 내용작성
    // DidMount, DidUpdate 를 함께 쓴 효과
    useEffect( ()=>{
        document.title = `${count}번 클릭`; // 👽
    } );

    // useEffect를 사용해서 DidMount 일 때 사용
    // useEffect( ()=>{}, [] )
    // 두번째 인자값 [] 빈배열일 때, 컴포넌트 생성시에 실행
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date);
            console.log("실행");
        }, 1000 );
    }, [])

    // useEffect의 두번째 인자값에 state의 값이 들어갈 때
    // 특정 state값이 바뀌면, useEffect 실행
    // useEffect(()=>{}, [state/props])
    // [] 배열안에 여러개의 값을 넣어서 사용가능
    // 업데이트 시기 : setState(useState의 함수) 실행
    useEffect( ()=>{
        // 업데이트에 참고하고 있는 state의 값을 수정하지 않음
        // *setCount사용하면 안됨
        // setCount(100);
        console.log("count : ", count);
    }, [count, date] )

// ?????
    // useEffect 이용하여 생성할 때
    // alert을 사용하여 "컴포넌트 생성"경고창 띄우기
    useEffect( ()=>{
        alert("컴포넌트 생성");
    },[])

    // useEffect 이용하여 count값이 바뀔 때
    // date의 초를 console.log를 통해 출력
    useEffect(()=>{
            console.log("count : ", date);
    }, [count, date] )

    ////////

    return (
        <div>
            {/* 👽 */}
            <p>{count}번 클릭</p> 
            <button onClick={ ()=>{setCount(count+1)} }>
                +1
            </button>
            <h3>{date.getMinutes()}:{date.getSeconds()}</h3>
        </div>
    )
}
