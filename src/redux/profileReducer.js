const addPostActionName = 'ADD-POST';
const updateNewPostTextActionName = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => {
    return (
        { type: addPostActionName }
    );
}

export const updateNewPostTextActionCreator = (text) => {
    return (
        { type: updateNewPostTextActionName, text: text }
    );
}

const _addPost = (state) => {
    let newPost = {
        id: 5,
        name: state.inputFieldMessage,
        likes: 0
    };

    state.posts.push(newPost);
}

const _updateNewPostText = (state, text) => {
    state.inputFieldMessage = text;
}

let initialState = {
    posts: [
        { id: 1, name: 'post1', likes: 10 },
        { id: 2, name: 'post2', likes: 11 },
        { id: 3, name: 'post3', likes: 12 },
    ],
    inputFieldMessage: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateNewPostTextActionName: {
            _updateNewPostText(state, action.text);
            return state;
            // break;
        }
        case addPostActionName: {
            _addPost(state);
            return state;
            // break;
        }
        default: {
            return state;
        }
    };

    // return state;
}

export default profileReducer;