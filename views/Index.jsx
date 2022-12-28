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


class Index extends React.Component {
    render(){
        
        return(

            <div className='page'>
                <link rel="stylesheet" type="text/css" href="../css/index.css" />
                {Header()}
            
                    <ul>
                        {this.props.item.map((item, i) => {
                            return (

                                <div className='itemBox'>
                                    <h2>{item.name}</h2>
                                    <a href={`/products/${item.id}`}>
                                        <img class='productImg' src={`${item.img}`} alt="" />
                                    </a>

                                    <h2>${item.price}</h2>
                                </div>
                            )
                        })}
                    </ul>


            </div>
        )
    }
}

module.exports = Index