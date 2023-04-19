import React from 'react'

// Link를 통해서 react-router-dom에서 지정한 주소로 이동
import { Link } from 'react-router-dom'
import FormComp from '../components/FormComp';

export default function Home() {
    const fruit = "banana";
    const fruits = ["apple", "orange", "peach"];
    return (
        <div>
            <h1>Home</h1>
            <p>현재 화면은 홈입니다.</p>
            {/* a태그 대신 컴포넌트의 주소로 이동 */}
            <Link to="/about">About</Link>
            <br/>
            {/* to의 속성값으로 자바스크립트의 문자열 가능 */}
            <Link to={`/story/${fruit}`}>Story</Link>
            {/* 왜 에러떠? */}

            <Link to={`/articles`}>Articles</Link>
            <hr />
            {/* 쿼리스트링값을 About에 전달하는 컴포넌트 */}
            <FormComp />

            <hr />
            {/* map을 이용해서 배열의 값을 Link의 to 주소값으로 사용 */
                fruits.map((f, i)=>(
                    <Link to={`/story/${f}`} Key={i}> | {f}Story | </Link>
                ))
            }
            <hr />
            {/* fruits를 이용하여 map을 사용하여
                /story2/apple, /story2/orange, story2/peach 로 이동하는
                Link작성
            */}
            {
                fruits.map((f, i)=>(
                    <Link to={`story2/${f}`} Key={i}> | {f}Story2 | </Link>
                ))
            }
        </div>
    )
}
