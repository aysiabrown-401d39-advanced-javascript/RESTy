import React from 'react';
import ReactJson from 'react-json-view';
import { Link } from 'react-router-dom';

class History extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queries: [],
            details: '',
        }
    }

    handleClickQuery = (event) => {
        console.log('WE MADE IT!!!');
        let query = event.target.textContent;
        query = query.split(' ');
        this.props.handleSameQuery(query[0], query[1])
        this.props.setDisplay(false);
        if(this.props.full) {
            this.setState({details: query[1]})
        } 
    }
    
    

    render() {
        return (
            <div>
                <h3>History</h3>
            {
                localStorage.getItem('queries') !== null
                ?
                JSON.parse(localStorage.getItem('queries')).map(query => (
                    <>
                        <span onClick={this.handleClickQuery}>
                            <p><b>{query.method} </b>{query.url}</p>
                        </span>
                        {
                            this.state.details == query.url
                            ?
                            <>
                                <ReactJson src={query.results} />
                                <Link to='/'><button>Rerun Query</button></Link>
                            </>
                            : null
                        }
                    </>
                ))
                : null 
            }
            </div>

        )
    }
}

export default History;