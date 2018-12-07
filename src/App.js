import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import axios from 'axios';
import Product from './Components/Product/Product'
class App extends Component {
  constructor(){
    super();
    this.state = {
    productList:[]
    }
  }
  
  async componentDidMount(){
    let res = await axios.get('/api/products')
    this.setState({
      productList:res.data
    })
  }
  render() {
let list = this.state.productList.map(product => {return <Product name={product.product_name} price={product.product_price} url={product.product_url} id={product.product_id} /> })
    return (
      
      <div className="App">
      <Header />
<div className='listRender'>
{list}
</div>
      </div>
    );
  }
}

export default App;
