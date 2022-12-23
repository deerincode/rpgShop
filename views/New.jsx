const React = require("react")

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

class New extends React.Component {
    render () {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="../css/new.css" />
                {Header()}
                <div className="formContainer">
                    <h1>New Product Form</h1>
                    <form action='/products' method='POST'>
                        Name: <input type='text' name='name' />
                        <br />
                        Image: <input type='text' name='img' />
                        <br />
                        Description: <input type='text' name='description' />
                        <br />
                        Price: <input type='number' name='price' />
                        <br />
                        Stock: <input type='number' name='stockCount' />
                        <br />
                        <input type='submit' name='' value='Create Item' />
                    </form>
                </div>


            </div>
        )
    }
}

module.exports = New