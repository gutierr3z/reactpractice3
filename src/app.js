import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SubPage from './Components/sub1';

class APP extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            list: [ 'un', 'deux', 'trois' ]
        };
    };

    render() {
        return (
            <div>
                <h1>LEVEL ONE : { this.state.list[0] }</h1>
                <SubPage theList = { this.state.list } />
            </div>
        );
    };
};

ReactDOM.render( <APP />, document.querySelector( '#main' ) );
