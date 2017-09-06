import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class APP extends Component {

    constructor( props ) {

        super( props );
        
        this.state = {
            item: ''
        };
    };

    render() {
        return <div>yay!</div>
    };
};

ReactDOM.render( <APP />, document.querySelector( '#main' ) );