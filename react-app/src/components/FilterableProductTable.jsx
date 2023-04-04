// 13
import productData from '../data/product.json'

import React, { Component } from 'react'
// 2
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

// 1. 하향식으로 작성 (부모부터 작성)
// 2. 정적데이터를 이용해서 작성
// 3. state와 props 구분해서 작성
export class FilterableProductTable extends Component {
    // 30
    constructor(props){
        super(props)
        this.state={
            seachText : "",
            isOnlyStock : false
        }
    }

    // 32
    // toggle 메소드를 실행할 때마다
    // this.state.isOnlyStock T/F 로 바꿈
    toggleStock = () => {
        this.setState({isOnlyStock: !this.state.isOnlyStock})
        console.log("메소드 실행")
    }

    render() {
        // 14
        console.log(productData)
        // 38
        // isOnlyStock이 ture일 때
        // productDate가 stock이 true인 것만 배열로 만들기
        const checkedProducts
            = productData.filter((product)=>product.stocked)

        return (
            <div>
                {/* 3 */}
                {/* 검색어, 체크박스에 관한 값 */}
                {/* 31 isOnlyStock={this.state.isOnlyStock} 추가*/}
                <SearchBar 
                    isOnlyStock={this.state.isOnlyStock}
                    // 33
                    // props 값으로 메소드를 작성해서 전달 가능
                    toggleStock={this.toggleStock}
                />
                {/* 가져온 데이터 값을 보여줄 공간 */}
                {/* 15 products={productData} 추가 */}
                {/* 39 */}
                <ProductTable products={this.state.isOnlyStock ? checkedProducts : productData}/>
            </div>
        )
    }
}

export default FilterableProductTable