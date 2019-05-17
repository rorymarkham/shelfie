import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            productName: '',
            price: null,
            imgurl: ''
        }
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this)
        this.handleUpdatePrice = this.handleUpdatePrice.bind(this)
        this.returnFields = this.returnFields.bind(this)
        this.clearAll = this.clearAll.bind(this)
    }

    
    handleUpdateProduct(event) {
        this.setState({
            productName: event.target.value
        })
    }
    
    handleUpdatePrice(event) {
        this.setState({
            price: event.target.value
        })
    }
    
    clearAll(){
        this.setState({
            productName:'',
            price: '',
            imgurl: ''
        })
    }

    returnFields() {
        console.log(`Interested in ${this.state.productName}, 
        the price is ${this.state.price}`)
    }


    

    render(){
        return(
            <div>
                <div>
                    <input 
                        value={this.state.productName}
                        placeholder='Product Name' 
                        onChange={this.handleUpdateProduct}/>

                    <input 
                        value={this.state.password}
                        placeholder='Product Price' 
                        onChange={this.handleUpdatePrice}/>

                    <input
                        value={this.state.imgurl}
                        placeholder='Add Image URL'/>

                    <button className='cancel_btn' onClick={this.clearAll}>Cancel</button>
                    <button className='add_btn' onClick={this.returnFields}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}
export default Form

