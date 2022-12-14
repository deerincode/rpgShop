const React = require('react')


class Show extends React.Component{
    render(){

        return(
            <div>
                <h1>Item Page</h1>
                <h3>{this.props.item.name}</h3>
                <img src={`${this.props.item.img}`}></img>
                <h5>{this.props.item.description}</h5>
                <h6>Price:</h6>
                <h5>Stock:</h5>

            </div>
        )

    }
}