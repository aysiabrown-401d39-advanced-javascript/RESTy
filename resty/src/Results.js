import React from 'react';

class Results extends React.Component {
    render() {
        return (
        <>
            <div id="print">
            <p>{this.props.value} {this.props.url}</p>
            <p>{this.props.count}</p>
            <p>{this.props.headers}</p>
            <p>{this.props.results}</p>
            </div>
        </>
        )
    }
}

export default Results;