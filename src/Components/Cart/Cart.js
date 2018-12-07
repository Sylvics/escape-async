import React, {Component} from 'react';
import Axios from 'axios';

class Cart extends Component {

    async ComponentDidMount(){
        let res = await Axios.get('/api/cart')
        console.log(res.data)
    }
    render(){
        return(<div>

        </div>)
    }
}
export default Cart;