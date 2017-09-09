import React, { Component } from 'react';

import SubSubPage from './sub1a';

class SubPage extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            theList: props.theList
        };
    };

    render() {
        return (
            <div>
                <h2>LEVEL TWO : { this.state.theList[1] } </h2>
                <input type="text" id="ipt_one" />
                <input id="btn_one" type="button" value="Press" onClick = { e => this.clickIt( e ) } />
                <SubSubPage XXX = { this.state.theList } />
            </div>
        );
    };

    clickIt( e ) {
        var val = document.querySelector( '#ipt_one' ).value;
        console.log( 'clicked', val );
    };
};

export default SubPage;