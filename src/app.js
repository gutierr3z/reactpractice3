import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SubPage from './Components/sub1';
import SubPage2 from './Components/sub2';

class APP extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            list: [ 'un', 'deux', 'trois' ],
            theTxt: 'ssss'
        };
    };

    theFunc( x ) {
        // var echoIt = document.querySelector( '#thetext' );
        // echoIt.value = 'hello';
        // this.setState( { theTxt: x } );
        console.log( 'clicked', x );
    };

    render() {
        
        // this.setState( { theTxt: 'hello' } );
        // console.log( this.state.theTxt );
        return (
            <div>
                <h1>LEVEL ONE : { this.state.list[0] }</h1>
                <div id="test">X</div>
                <SubPage theList = { this.state.list } theFunc = { this.theFunc } />
                <SubPage2 theTxt = { this.state.theTxt } />
            </div>
        );
    };
};

ReactDOM.render( <APP />, document.querySelector( '#main' ) );