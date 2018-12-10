import React, {Component} from 'react';
import './CartItem.css'
import Axios from 'axios';

class CartItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            price: 0,
            quantity:0
        }
    }
    async componentDidMount(){
        let newNum = Math.round(this.props.price / 1000000);
        this.setState({price:newNum,
        quantity:this.props.quantity,
        name:this.props.name,
    url:this.props.url})

    }
    async handleAdd(){
        let res = await Axios.put(`/api/cart/add/${this.props.id}`)
      
        let result = await Axios.get(`/api/cartupdated/${this.props.id}`)
        console.log(result.data.quantity)
        this.setState({quantity:res.data.quantity})
        
    }
    async deleteIt(){
        let res = await Axios.delete(`/api/cart/${this.props.id}`)
        console.log(res.status);
    }
    render(){
        return(
            <div className='itemBox'>
                <img src={this.state.url} alt={this.state.name}/>
                <div>
                    {this.state.name}
                    
                </div>
                <div>${this.state.price}</div>
                <div>{this.state.quantity?this.state.quantity:''}</div>
                <button onClick={() => this.deleteIt()}>delete</button>
                <button onClick={() => this.handleAdd()}>+</button>
                
            </div>
        )
    }
}
export default CartItem;