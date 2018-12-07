import React, {Component} from 'react';
import './Product.css'
import axios from 'axios';
class Product extends Component{
    constructor(){
        super();
        this.state = {
            price: 0
        }
    }
    componentDidMount(){
        let newNum = Math.round(this.props.price / 1000000);
        this.setState({price:newNum})
    }
    async handleAdd(){
        let cartItem =  {
            id:this.props.id,
            quantity:1

        }
        let res = await axios.post('/api/cartpost', cartItem)

    }
    render(){
        return(
            <div className='productBox'>
                <img src={this.props.url} alt={this.props.name}/>
                <div>
                    {this.props.name}
                    
                </div>
                <div>${this.state.price}</div>
                <button onClick={() => this.handleAdd}>Add to Cart</button>
            </div>
        )
    }
}
export default Product;