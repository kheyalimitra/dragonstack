import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGeneration } from '../actions/generations';
import fetchStates from '../reducers/fetchStates';

const MIN_DELAY = 3000;
class Generation extends Component {
    timer = null;
    componentDidMount() {
        this.fetchNextGeneration();
    }
    componentWillUnmount() {
        // necessary clean up 
        clearTimeout(this.timer);
    }
    fetchNextGeneration = () => {
        this.props.fetchGeneration();
        let delay  = new Date(this.props.generation.expiration).getTime() - new Date().getTime();
        this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
        if (delay < MIN_DELAY ) {
            delay = MIN_DELAY;
        };
    }
    render() {
        const { generation } = this.props;
        if(generation.status ===  fetchStates.fetching) {
            return <div> ... </div>;
        }
        if(generation.status ===  fetchStates.error) {
            return <div> { generation.message } </div>;
        }
        return (
            <div>
                <h3> Generation {generation.gererationId}. Expires on:  </h3>
                <h4> {new Date(generation.expiration).toString()} </h4>
             </div>
        )
    }
}
const mapStateToProps = state => {
    const generation  = state.generation;
    return { generation };
};

const componentConnector = connect(
    mapStateToProps,
    {fetchGeneration}
    );

export default componentConnector(Generation);
