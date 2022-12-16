const React = require("react")

class New extends React.Component {
    render () {
        return (
            <div>
                <h1>Create a new item to keep in stock</h1>
                <form action='/products' method='POST'>
                    Name: <input type='text' name='name' />
                    <br />
                    Image: <input type='text' name='img' />
                    <br />
                    Description: <input type='text' name='description'/>
                    <br />
                    Price: <input type='number' name='price'/>
                    <br />
                    Stock: <input type='number' name='stockCount'/>
                    <br />
                    <input type='submit' name='' value='Create Item'/>
                </form>
            </div>
        )
    }
}

module.exports = New