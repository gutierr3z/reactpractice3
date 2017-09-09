import React from 'react';

import SubSubPage from './sub1a';

const SubPage = ( props ) => {

    return (
        <div>
            <h2>LEVEL TWO : { props.theList[1] } </h2>
            <input type="text" id="ipt_one" />
            <input id="btn_one" type="button" value="Press" />
            <SubSubPage XXX = { props.theList } />
        </div>
    );
};

export default SubPage;