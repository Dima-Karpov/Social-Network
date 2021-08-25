import React from 'react';
import profileReducer, { addPostAC, deletPost} from "../profile-reducer";




let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '12'},
        {id: 2, message: 'It\'s my first post', likesCount: '11'},
        {id: 3, message: 'Babla', likesCount: '11'},
        {id: 4, message: 'Dada', likesCount: '11'},
    ],
};


test('length of post should be increment', () => {
    // test data
    const action = addPostAC("it-kamasutra.com");
    
    // action
    const newState =  profileReducer(state, action);

    // expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // test data
    const action = addPostAC("it-kamasutra.com");
    
    // action
    const newState =  profileReducer(state, action);

    // expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});
test('after deleting length of messages should be decremetn', () => {
    // test data
    const action = deletPost(1);
    
    // action
    const newState =  profileReducer(state, action);

    // expectation
    expect(newState.posts.length).toBe(3);
});
test('after deleting length shouldn\'t be decrement if id is incorrect', () => {
    // test data
    const action = deletPost(1000);
    
    // action
    const newState =  profileReducer(state, action);

    // expectation
    expect(newState.posts.length).toBe(4);
});
