import React from 'react'

// URL 파라미터 값 가져오는 함수
// useParmes : 파라미터의 줄임말
import { useParams } from 'react-router-dom'

export default function Story2() {
    // URL 파라미터로 전달된 값을 useParms()를 이용하여 가져올 수 있다
    // *주소에 위치에 맞게 전달
    // app.js path='/story/:value'
    // >> 주소로 값을 전달할 때 /story/apple
    const params = useParams();
    const { name } = useParams(); // 객체
    return (
        <div>
            <h1>{params.name}Story2</h1>
            <p>{name}Story2 페이지입니다.</p>
        </div>
    )
}
