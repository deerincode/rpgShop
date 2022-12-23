const React = require('react')

function Header () {
    return(
        <section className='header'>
            <section className='logoContainer'>
                <img className='logo' src='../images/shopLogo.jpg'></img>
            </section>
            <section className='navbar'>
                <a className='navItem' href="/">Home</a>
                <a className='navItem' href="/products">Inventory</a>
                <a className='navItem' href="/products/new">Add New Item</a>
            </section>
        </section>
    )
}

class Show extends React.Component{
    render(){

        let button
        let stockCount

        if(this.props.item.stockCount > 0){
            button = <form action={`/products/${this.props.item.id}?_method=PUT`} method="POST">
                <input type="hidden" name="name" defaultValue={this.props.item.name} /><br />
                <input type="hidden" name="img" defaultValue={this.props.item.img} /><br />
                <input type="hidden" name="description" defaultValue={this.props.item.description} /><br />
                <input type='hidden' name='price' defaultValue={this.props.item.price} />
                <input type='hidden' name='stockCount' defaultValue={this.props.item.stockCount - 1} />

                <input className='buyBttn' type="submit" value="BUY" />
            </form>

            stockCount = `Stock: ${this.props.item.stockCount}`
        } else {
            stockCount = 'Out of stock'
        }



        return(
            <div>
                <link rel="stylesheet" type="text/css" href="../css/show.css" />
                {Header()}
                <div className='body'>
                    <div className='itemBox'>
                        <section className='grid1'>
                            <h3>{this.props.item.name}</h3>
                            <img class='productImg' src={`${this.props.item.img}`}></img>
                        </section>
                        <section className='grid2'>
                            <h5>{this.props.item.description}</h5>
                            <h6>Price: ${this.props.item.price}</h6>
                            <h5>{stockCount}</h5>
                        </section>
                        <section className='grid3'>
                            
                            {button}
                            <form action={`/products/${this.props.item._id}?_method=DELETE`} method="POST">
                                <input className='delBttn' type="submit" value="DELETE" />
                            </form>
                            <a href={`/products/${this.props.item._id}/edit`}>Edit</a>
                            
                        </section>
                    </div>
                </div>
                
                
                
            </div>
        )

    }
}

module.exports = Show