import React, { Component } from 'react';
class Generation extends Component {
    constructor() {
        this.state = { gererationId: 999, expiration: '2020-05-01'};
        
    }
    componentDidMount() {
        this.fetchGeneration();
    }

    fetchGeneration = () => {
        fetch('http://localhost:3000/generation')
        .then(response => response.json())
        .then(json => { console.log('json', json) })
        .catch(error => console.error('error', error));
    };
    
    render() {
        const {gereration} = this.state;
        return (
            <div>
                <h3> Generation {gereration.gererationId}. Expires on:  </h3>
                <h4>{new Date(gereration.expiration).toString()} </h4>
             </div>
        )
    }
}
export default Generation;
