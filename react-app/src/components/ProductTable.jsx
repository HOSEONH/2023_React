import React, { Component } from 'react'

// 6
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

// 필터링된 값을 테이블로 출력
export class ProductTable extends Component {
    // 16
    constructor(props){
        super(props)
    }

    render() {
        // 17
        const {products} = this.props;

        // 25
        // products 배열에 있는 객체 중에서 Storting Goods 값을 가진 객체 배열
        const sportingProducts = products.filter(
            (product)=>product.category === "Sporting Goods"
        );
        
        // 27
        // Electronics 값을 가진 객체 배열
        const electProduts = products.filter(
            (product)=>product.category === "Electronics"
        );

        return (
            <div>
                {/* 5 */}
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                        {/* 7 */}
                        <ProductCategoryRow category="Sporting Goods"/>

                        {/* 9 형태를 잡고 잘 나왔다면 */}
                        {/* 21  name={products[0].name} price={products[0].price} 를 추가함*/}
                        {/* <ProductRow name={products[0].name} price={products[0].price}/>  */}

                        {/* 29 */}


                        {/* 23 */}
                        {/*
                            electProducts.map(
                                (products, index)=>
                                <ProductRow
                                key
                                    name={products.name}
                                    price={products.price}
                                />)
                            */}

                        <ProductCategoryRow category="Electronics"/>
                        {/* 24 */}
                        {
                            // products의 category 중 'Sporting Goods'를
                            // 가진 배열을 만드는 방법
                            // filter을 이용해서 내용을 작성하고
                            // <ProductRow />통해서 내용 출력하기 
                            // 26
                            sportingProducts.map((product, index)=>
                            <ProductRow
                                key={index}
                                name={product.name}
                                price={product.price}
                            />
                            )
                        }

                        {/* 28 */}
                        {
                            electProduts.map((product, index)=>
                            <ProductRow
                                key={index}
                                name={product.name}
                                price={product.price}
                            />
                            )
                        }

                        {/* 22 다 지움 */}
                        {/* 11
                        <ProductRow />
                        <ProductRow />

                        {/* 12 */}
                        {/* <ProductCategoryRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow /> */}
                    </tbody>
                </table>
            </div>
    )
    }
}

export default ProductTable