import React from "react";
import PostsModule from './Posts.module.css';
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";

const InputField = (props) => {
    return (
        <div className={PostsModule.inputField}>
            <input
                onChange={props.changeTextMessage}
                type='text' placeholder='your news...'
                ref={props.newPostElement}>
            </input>
        </div>
    )
}

const Button = (props) => <div className={PostsModule.button}>
    <button onClick={props.addPost}>Send</button>
</div>

const Messages = (props) => {
    let messages = props.posts.map(x => <Post text={x.name} likes={x.likes} />);
    return (
        <div className={PostsModule.messages}>
            {messages}
        </div>
    )
}

const Title = () => <div className={PostsModule.title}>My Posts</div>

const Posts = (props) => {
    debugger;
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let changeTextMessage = () => {
        props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
    };
    
    return (
        <div className={PostsModule.posts}>
            <Title />
            <InputField changeTextMessage={changeTextMessage} newPostElement={newPostElement} />
            <Button addPost={addPost} />
            <Messages posts={props.posts} />
        </div>
    )
}

export default Posts;