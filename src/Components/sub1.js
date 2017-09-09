import React, { Component } from 'react';
//--------------------------------------------------
import SubSubPage from './sub1a';
//==================================================
class SubPage extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            theList: props.proList,
            theTxt: ''
        };

        this.theFunc = this.theFunc.bind( this );
    };

    theFunc() {

        this.setState({
            theTxt: 'hello there'
        });

        console.log( 'theTxt: ', this.state.theTxt );
    };

    render() {
        return (
            <div>
                <h2>LEVEL TWO : { this.state.theList[1] } </h2>
                <input type="text" id="ipt_one" />
                <input id="btn_one" type="button" value="Press" onClick = { () => { this.clickIt(); this.theFunc(); } } />
                <SubSubPage proXXX = { this.state.theList } />
            </div>
        );
    };

    clickIt() {
        var val = document.querySelector( '#ipt_one' ).value || 'empty';
        document.querySelector( '#thetext' ).innerHTML = val;
    };
};
//==================================================
export default SubPage;