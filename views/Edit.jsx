const React = require('react')

function Header () {
  return(
      <section className='header'>
          <section className='logoContainer'>
              <img className='logo' src='../../images/shopLogo.jpg'></img>
          </section>
          <section className='navbar'>
              <a className='navItem' href="/">Home</a>
              <a className='navItem' href="/products">Inventory</a>
              <a className='navItem' href="/products/new">Add New Item</a>
          </section>
      </section>
  )
}


class Edit extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="../../css/edit.css" />
        {Header()}
        <div className='formContainer'>
          <h1>Edit Product</h1>
          <form action={`/products/${this.props.item.id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={this.props.item.name} /><br />
            Image: <input type="text" name="img" defaultValue={this.props.item.img} /><br />
            Description: <input type="text" name="description" defaultValue={this.props.item.description} /><br />
            Price: <input type='number' name='price' defaultValue={this.props.item.price} />
            Stock: <input type='number' name='stockCount' defaultValue={this.props.item.stockCount} />

            <input type="submit" value="Submit Changes" />
          </form>
        </div>

      </div>
    )
  }
}
  module.exports= Edit