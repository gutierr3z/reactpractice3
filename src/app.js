import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SubPage from './Components/sub1';

class APP extends Component {

    constructor( props ) {

        super( props );

        this.state = {
            list: [ 'one', 'two', 'three' ]
        };
    };

    render() {

        return (
            <div className="level1">
                <h1>PLANTS</h1>
                <SubPage list = { this.state.list } />
            </div>
        );
    };
};

ReactDOM.render( <APP />, document.querySelector( '#main' ) );