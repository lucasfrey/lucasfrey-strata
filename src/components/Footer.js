import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/FreyLucas" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/lucasfrey/" className="icon fa-github"><span className="label">Github</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
