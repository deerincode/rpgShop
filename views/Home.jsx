const React = require('react')

class Home extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="../css/home.css" />
        <section className='body'>
            <section className='logoContainer'>
                <img className='logo' src='../images/shopLogo.jpg'></img>
            </section>
            <section className='navbar'>
                <a className='navItem' itemID='inventory' href="/products">ENTER</a>
            </section>
        </section>

      </div>
    );
  }
}

module.exports = Home