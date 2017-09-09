import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//- - - - - - - - - - - - - - - - - - - - - - - - - 
import SubPage from './Components/sub1';
import SubPage2 from './Components/sub2';
//==================================================
class APP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ['un', 'deux', 'trois'],
            theTxt: 'ssss'
        };
    };

    render() {
        return (
            <div>
                <h1>LEVEL ONE : {this.state.list[0]}</h1>
                <SubPage proList={this.state.list} />
                <SubPage2 />
            </div>
        );
    };
};
//==================================================
ReactDOM.render(<APP />, document.querySelector('#main'));