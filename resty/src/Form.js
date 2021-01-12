import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            value: 'GET',
            display: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleURL = this.handleURL.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({display: false})
    }

    handleURL(event) {
        this.setState({url: event.target.value});
    }

    handleSubmit(event) {
        this.setState({display: true})
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <form>
                    <label>API URL:</label>
                    <input onChange={this.handleURL} type="text"></input>
                    <select onChange={this.handleChange}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                    <input onClick={() => this.setState({display: true})} type="button" value="submit"></input>
                </form>
                {
                    this.state.display
                        ? (<div id="print">
                            <p>{this.state.value} {this.state.url}</p>
                        </div>)
                        : null
                }
            </div>
        )
    }
}

export default Form;