import React from 'react';
// import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


let wrapped; 

beforeEach (() => {
    // create a shallow copy of the App component, without rendering its children
    wrapped = shallow(<App />);
});

it(
    'shows a comment box',
    () => {
        // const div = document.createElement('div');
        // ReactDOM.render(<App/>, div);
        // // looks inside the div rendered and check if comment box can be found
        // expect (div.innerHTML).toContain('Comment Box');
        // ReactDOM.unmountComponentAtNode(div);
        
        expect (wrapped.find(CommentBox).length).toEqual(1);

    }
);

it(
    'shows a comment list',
    () => {
        expect (wrapped.find(CommentList).length).toEqual(1);
    }
);