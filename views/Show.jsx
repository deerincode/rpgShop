const React = require('react')


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

                <input type="submit" value="BUY" />
            </form>

            stockCount = `Stock: ${this.props.item.stockCount}`
        } else {
            stockCount = 'Out of stock'
        }



        return(
            <div>
                <h1>Item Page</h1>
                <h3>{this.props.item.name}</h3>
                <img src={`${this.props.item.img}`}></img>
                <h5>{this.props.item.description}</h5>
                <h6>Price: {this.props.item.price}</h6>
                <h5>{stockCount}</h5>
                {button}

                <br />
                <a href='/products'>Back</a><br />
                <a href={`/products/${this.props.item._id}/edit`}>Edit</a>
                <form action={`/products/${this.props.item._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
            </div>
        )

    }
}

module.exports = Show