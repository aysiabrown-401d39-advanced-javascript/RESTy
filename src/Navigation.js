import React from 'react';
import {Link} from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return(
            <>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/history'>History</Link></li>
                    <li><Link to='/help'>Help</Link></li>
                </ul>
            </>
        )
    }
}

export default Navigation;