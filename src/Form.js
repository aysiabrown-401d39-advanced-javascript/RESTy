import React from 'react';
import './Form.scss'
import Results from './Results';
import History from './History';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            value: this.props.value,
            display: false,
            queries: [],
            errors: '',
            body: {name:'', calories: 0, type: null},
            loading: false,
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.setState({display: false})
    }

    handleURL = (event) => {
        this.setState({url: event.target.value});
        this.setDisplay(false);
    }

    handleSubmit =  async (event) => {
        this.setState({display: true, loading: true})
        const url = this.state.url;
        let headers = [];
        let options = { method: this.state.value, mode: 'cors'}
        if(options.method == 'POST' || options.method == 'PUT') {
            options.body = JSON.stringify(this.state.body);
        }
        console.log('options check', options);
        const api = await fetch(url, options)
            .then(response => {
                if(response.status !== 200) {
                    return response.text().then(text => {throw new Error(text)});
                } else {
                    this.state.errors = '';
                    for (let pair of response.headers.entries()) {
                        let obj = {};
                        obj[pair[0]] = pair[1];
                        headers.push(obj);
                    }
                    this.setState({loading: false})  
                    return response.json();
                }

            }).catch(e => {
                this.state.errors = `${e}`;
                this.setState({loading: false})
                console.log(e);
            });
        if(api) {
            this.state.queries.push({url: this.state.url, method: this.state.value, results: api});
            localStorage.setItem('queries', JSON.stringify(this.state.queries));
            this.props.giveResults(this.countAPI(api), api, headers);
        }
    }

    countAPI = (api) => {
        let count = 0;
        for(var key in api) {
            count++;
        }
        return count;
    }


    handleBody = (event) => {
        this.state.body[event.target.name] = event.target.value;
    }

    giveQuery = (value, url) => {
        this.setState({value, url})
    }

    setDisplay = (display) => {
        this.setState({display})
    }

    render() {
        return(
            <>
            <form data-testid="form">
                <label>API URL:</label>
                <input value={this.state.url} onChange={this.handleURL} type="text"></input>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
                {
                    this.state.value == 'POST' || this.state.value == 'PUT'
                    ? (
                    <>
                        <label>NAME:</label>
                        <input name="name" type="text" onChange={this.handleBody}></input>
                        <label>CALORIES:</label>
                        <input name="calories" type="text" onChange={this.handleBody}></input>
                        <label>TYPE:</label>
                        <select name="type" onChange={this.handleBody}>
                            <option value ="FRUIT">FRUIT</option>
                            <option value ="VEGETABLE">VEGETABLE</option>
                            <option value="PROTEIN">PROTEIN</option>
                        </select>
                        
                    </>
                    )
                    : null
                }
                 <input type="button" onClick={this.handleSubmit} value="submit"></input>
                
            </form>
            {
                this.state.display && this.state.url && !this.state.loading
                ? (
                    <Results 
                    url = {this.state.url}
                    value = {this.state.value}
                    count = {this.props.count}
                    headers = {this.props.headers}
                    results = {this.props.results}
                    errors = {this.state.errors}
                    loading = {this.state.loading}
                    />
                ) : this.state.loading 
                ? <p>Loading...</p>
                : null
            }
            <History
            handleSameQuery = {this.giveQuery}
            setDisplay = {this.setDisplay}
            full = {false} />

            </>
        )
    }
}

export default Form;