const React = require('react')


class Edit extends React.Component{
    render() {
      return (
        <div>      
       
            <form action={`/products/${this.props.item.id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={this.props.item.name}/><br/>
            Image: <input type="text" name="img"  defaultValue={this.props.item.img}/><br/>
            Description: <input type="text" name="description"  defaultValue={this.props.item.description}/><br/>
            Price: <input type='number' name='price' defaultValue={this.props.item.price}/>
            Stock: <input type='number' name='stockCount' defaultValue={this.props.item.stockCount}/>

            <input type="submit" value="Submit Changes"/>
        </form>
        </div>
      )
    }
  }
  module.exports= Edit