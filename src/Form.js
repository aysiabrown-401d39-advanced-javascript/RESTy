import React from 'react';
import './Form.scss'
import Results from './Results';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            value: 'GET',
            display: false,
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.setState({display: false})
    }

    handleURL = (event) => {
        this.setState({url: event.target.value});
    }

    handleSubmit =  async (event) => {
        this.setState({display: true})
        const url = this.state.url;
        let headers = [];
        const api = await fetch(url, { method: this.state.value, mode: 'cors' })
            .then(response => {
                if(response.status !== 200) return;
                for (let pair of response.headers.entries()) {
                    let obj = {};
                    obj[pair[0]] = pair[1];
                    headers.push(obj);
                  }     
                return response.json();
            });
        this.props.giveResults(api.length, api, headers);
    }



    render() {
        return(
            <>
            <form data-testid="form">
                <label>API URL:</label>
                <input onChange={this.handleURL} type="text"></input>
                <select onChange={this.handleChange}>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
                <input onClick={this.handleSubmit} type="button" value="submit"></input>
            </form>
            {
                this.state.display
                ? (
                    <Results 
                    url = {this.state.url}
                    value = {this.state.value}
                    count = {this.props.count}
                    headers = {this.props.headers}
                    results = {this.props.results}
                    />
                ) : null 
            }

            </>
        )
    }
}

export default Form;