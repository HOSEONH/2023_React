import React, { Component } from 'react'

export class ProductRow extends Component {
    // 18
    constructor(props) {
        super(props)
    }
    render() {
        // 19
        const {name, price} = this.props
        return (
            // 10
            <tr>
                {/* 20 넣어준 Football 을 {name}으로 바꿈 */}
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        )
    }
}

export default ProductRow