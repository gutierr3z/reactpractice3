import React from 'react';

const SubPage = ( props ) => {

    return (
        <h2>LEVEL TWO : { props.theList[1] } </h2>
    );
};

export default SubPage;



// import React from 'react';
// import SubSubPage from './sub1a';

// const SubPage = ( props ) => {

//     return (
//         <div className="level2">
//             <h2>SUBPAGE { props.list[1] }</h2>
//             <SubSubPage selectedItem = { props.list[0] } />
//         </div>
//     );
// };


// export default SubPage;