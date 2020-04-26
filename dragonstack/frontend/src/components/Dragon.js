import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DraganAvatar';
import { connect } from 'react-redux';
import { fetchDragon } from '../actions/dragon';
class Dragon extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.fetchDragon}>New Dragon</Button>
                <DragonAvatar dragon={this.props.dragon} />
            </div>
            
        )
    }
}
const mapStateToProps = state => {
    const dragon  = state.dragon;
    return { dragon };
};

const componentConnector = connect(
    mapStateToProps,
    {fetchDragon}
    );

export default componentConnector(Dragon);
// export default Dragon;