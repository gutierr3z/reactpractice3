import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class APP extends Component {
    constructor( props ) {
        super( props );
        this.state = {

        };
    };

    render() {
        return <h1>yay!</h1>
    };
};

ReactDOM.render( <APP />, document.querySelector( '#main' ) );


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// class APP extends Component {

//     constructor( props ) {

//         super( props );
        
//         this.state = {
//             item: ''
//         };
//     };

//     render() {
//         return <div>yay!</div>
//     };
// };

// ReactDOM.render( <APP />, document.querySelector( '#main' ) );