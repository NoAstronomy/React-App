import React from "react";
import ProfileModule from './Profile.module.css';
import Posts from './Posts/Posts'

const MainProfile = (props) => {
    debugger;
    return (
        <div className={ProfileModule.mainProfile}>
            <Img />
            <Profile />
            <Posts
                dispatch={props.dispatch}
                inputFieldMessage={props.profile.inputFieldMessage}
                posts={props.profile.posts} />
        </div>
    )
}

const Img = () => <div className={ProfileModule.img}>
    <img src='https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/12/kak-sdelat-dizajn-sajta.jpg' />
</div>

const Avatar = () =>
    <div className={ProfileModule.avatar}>
        <img src='https://w7.pngwing.com/pngs/267/7/png-transparent-brown-haired-man-wearing-suit-jacket-illustratioin-computer-icons-avatar-icon-svg-person-blue-miscellaneous-website-user.png' />
    </div>

const Info = () => <div className={ProfileModule.info}>
    <Name />
    <DateOfBirth />
    <City />
    <Education />
    <WebSite />
</div>

const Name = () => <div className={ProfileModule.name}>My Name</div>
const DateOfBirth = () => <div className={ProfileModule.dateOfBirth}>Date of Birth: 2 january</div>
const City = () => <div className={ProfileModule.city}>City: Minsk</div>
const Education = () => <div className={ProfileModule.education}>Education: BSU`11</div>
const WebSite = () => <div className={ProfileModule.webSite}>Web Site: http://mySite.com/</div>

const Profile = () => <div className={ProfileModule.profile}>
    <Avatar />
    <Info />
</div>



export default MainProfile;