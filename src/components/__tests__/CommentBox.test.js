import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    // create a full render of the component
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {    
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', ()=> {
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {target:{value:'new comments'}});        
        // calls update to ensure component is updated, equivalent to setState re-renders performed completely
        wrapped.update();
    });

    it('has a text area which text can be entered', () => {
        expect (wrapped.find('textarea').prop('value')).toEqual('new comments');
    });

    it('has a text area which text will be cleared after form submit', () => {       
        expect (wrapped.find('textarea').prop('value')).toEqual('new comments');
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

});