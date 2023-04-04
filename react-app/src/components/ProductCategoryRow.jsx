import React, { Component } from 'react'

export class ProductCategoryRow extends Component {
    // 30
    constructor(props){
        super(props);
    }

    render() {
        // 31
        const {category} = this.props;
        return (
            // 8
            <tr>
                <th colSpan={2}>{category}</th>
            </tr>
        )
    }
}

export default ProductCategoryRow