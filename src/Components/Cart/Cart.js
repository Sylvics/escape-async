import React, {Component} from 'react';
import axios from 'axios';
import CartItem from './../CartItem/CartItem'
import './Cart.css'
class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartList: []
        }
    }
async deleteAll(){
await axios.delete('/api/cart')
console.log('cart deleted')
let res = await axios.get('/api/cart')
console.log(res.data);
this.setState({cartList:res.data})
}
    async componentDidMount(){

        let res = await axios.get('/api/cart')
        console.log(res.data)
        this.setState({cartList:res.data})
    }

    render(){
        let list = this.state.cartList.map(product => {return <CartItem name={product.product_name} price={product.product_price}
              url={product.product_url}
               id={product.item_id} 
            quantity={product.quantity}
            />
        })
        return(<div className='Cartlist'>
            {list}
        <button onClick={() => this.deleteAll()}>Delete All</button>
        </div>)
    }
}
export default Cart;