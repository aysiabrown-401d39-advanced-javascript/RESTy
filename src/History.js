import React from 'react';

class History extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queries: []
        }
    }

    handleClickQuery = (event) => {
        let query = event.target.textContent;
        query = query.split(' ');
        this.props.handleSameQuery(query[0], query[1])
    }

    render() {
        return (
            <div>
                <h3>History</h3>
            {
                localStorage.getItem('queries') !== null
                ?
                JSON.parse(localStorage.getItem('queries')).map(query => (
                    <span onClick={this.handleClickQuery}>
                        <p><b>{query.method} </b>{query.url}</p>
                    </span>
                ))
                : null 
            }
            </div>

        )
    }
}

export default History;