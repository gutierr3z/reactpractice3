import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class APP extends Component {

    constructor( props ) {

        super( props );

        this.state = {};
    };

    render() {

        return <h3>Plants</h3>;
    };
};

ReactDOM.render( <APP />, document.querySelector( '#main' ) );