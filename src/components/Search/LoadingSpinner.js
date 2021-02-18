import React, { Component } from 'react';
import '../../App.css';

export default class LoadingSpinner extends Component {
    render() {
        return (
            <div>
                <img className='loading-gif' width='200' height='200' alt='spinning pokeball' src='https://media1.tenor.com/images/5ccb51d5c62b2faf5c8c873ff4590211/tenor.gif?itemid=15432842' />
            </div>
        )
    }
}
