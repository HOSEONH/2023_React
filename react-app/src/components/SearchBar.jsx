import React, { Component } from 'react'

// 글자를 입력받아서 필터링하는 컴포넌트
export class SearchBar extends Component {
    // 34
    constructor(props){
        super(props);
    } 

    render() {
        // 35
        const {isOnlyStock, toggleStock} = this.props;

        return (
            <div>
                {/* 4 */}
                <input type="text" placeholder='Search...' />
                <br />
                {/* 36 checked={isOnlyStock} 추가함*/}
                {/* checkbox/radio의 check값을 가져올 때 readOnly을 이용해서
                    바뀌는 값을 출력하는 용도로 사용할 수 있다 */}
                <input type="checkbox"
                checked={isOnlyStock}
                    // 40 readOnly onClick={togglesStock} 추가
                    readOnly
                    onClick={toggleStock}
                />
                <label htmlFor=""
                    // 37
                    onClick={toggleStock}
                >
                    Only show products on stock
                </label>
            </div>
        )
    }
}

export default SearchBar