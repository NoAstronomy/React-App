const updateNewMessageTextActionName = 'UPDATE-NEW-MESSAGE-TEXT';
const addMessageActionName = 'ADD-MESSAGE';

export const addMessageActionCreator = () => {
    return (
        { type: addMessageActionName }
    );
}

export const updateNewMessageTextActionCreator = (text) => {
    return (
        { type: updateNewMessageTextActionName, text: text }
    );
}

const _addMessage = (state) => {
    debugger;
    let newMessage = {
        name: state.inputFieldMessage,
    };

    state.messages.push(newMessage);
}

const _updateNewMessageText = (state, text) => {
    state.inputFieldMessage = text;
}

let initialState =
{
    messages: [
        { id: 1, name: 'message1' },
        { id: 2, name: 'message2' },
        { id: 3, name: 'message3' },
    ],
    dialogs: [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
        { id: 3, name: 'User3' },
    ],
    inputFieldMessage: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateNewMessageTextActionName: {
            _updateNewMessageText(state, action.text);
            break;
        }
        case addMessageActionName: {
            _addMessage(state, action.text);
            break;
        }
    };

    return state;
}

export default dialogsReducer;