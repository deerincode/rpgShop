const React = require('react')



class Index extends React.Component {
    render(){

        return(

            <div className='page'>
                <link rel="stylesheet" type="text/css" href="../css/index.css" />
                <h1>Welcome to the JRPG Costco!!</h1>
                {/* <div className='container'> */}
                    <ul>
                        {this.props.item.map((item, i) => {
                            return (
                                // <li>
                                //     <a href={`/products/${item.id}`}>{item.name}
                                //     </a>
                                // </li>

                                <div className='itemBox'>
                                    <a href={`/products/${item.id}`}><h4>{item.name}</h4></a>
                                    <img src={`${item.img}`} alt="" />
                                    <h2>${item.price}</h2>
                                </div>
                            )
                        })}
                    </ul>
                {/* </div> */}



            </div>
        )
    }
}

module.exports = Index