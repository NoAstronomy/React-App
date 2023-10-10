// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";

// let store = {
//     _state: {
//         profile: {
//             posts: [
//                 { id: 1, name: 'post1', likes: 10 },
//                 { id: 2, name: 'post2', likes: 11 },
//                 { id: 3, name: 'post3', likes: 12 },
//             ],
//             inputFieldMessage: ''
//         },
//         dialogsGroup:
//         {
//             messages: [
//                 { id: 1, name: 'message1' },
//                 { id: 2, name: 'message2' },
//                 { id: 3, name: 'message3' },
//             ],
//             dialogs: [
//                 { id: 1, name: 'User1' },
//                 { id: 2, name: 'User2' },
//                 { id: 3, name: 'User3' },
//             ],
//             inputFieldMessage: ''
//         },
//     },

//     getState() {
//         return this._state;
//     },

//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     _callSubscriber() {
//         console.log('');
//     },

//     dispatch(action) {
//         debugger;

//         this._state.profile = profileReducer(this._state.profile, action);
//         this._state.dialogsGroup = dialogsReducer(this._state.dialogsGroup, action);

//         this._callSubscriber();
//     }
// }

// export default store;