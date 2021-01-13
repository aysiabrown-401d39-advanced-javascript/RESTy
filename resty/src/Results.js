import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component {
    render() {
        return (
        <>
            <div id="print">
                <p><b>{this.props.value}</b> {this.props.url}</p>
                <h3>Headers:</h3>
                <ReactJson src={this.props.headers} />
                <h3>Body:</h3>
                <ReactJson src={this.props.results} />
                <p></p>
                <b>COUNT:</b> {this.props.count}
            </div>
        </>
        )
    }
}

export default Results;