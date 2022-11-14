import React from "react";
import PostsModule from './Posts.module.css';
import Post from './Post/Post'

const InputField = () => <div className={PostsModule.inputField}>
    <input type='text' placeholder='your news...'></input>
</div>

const Button = () => <div className={PostsModule.button}>
    <button >Send</button>
</div>

const Messages = () => <div className={PostsModule.messages}>
    <Post text ="text1"/>
    <Post text ="text2"/>
    <Post text ="text3"/>
</div>

const Title = () => <div className={PostsModule.title}>My Posts</div>

const Posts = () => <div className={PostsModule.posts}>
    <Title />
    <InputField />
    <Button />
    <Messages />
</div>

export default Posts;