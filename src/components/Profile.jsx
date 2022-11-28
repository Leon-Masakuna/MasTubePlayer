import React from 'react';
import Logout from './Logout';
import "../styles/profile_style.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Profile = () => {
    const [userNames, setUserNames] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [userLinkedin, setUserLinkedin] = useState("");
    const [userGithub, setUserGithub] = useState("")

    return (
        <>
            <div className='container'>
                <div className='back-arrow'>
                    <Link to={'/dashbord'} className="link">
                        <i className="fa-solid fa-arrow-left"></i>{" "}{" Go back"}
                    </Link>
                </div>
                <div className='logout-component'>
                    <Logout />
                </div>
                <div className='edit-button'>
                    <Link to={'/userprofiledit'} className="link">
                        <i className="fa-solid fa-pen-to-square"></i> {" "}{" Edit"}
                    </Link>
                </div>
            </div>
            <div className='profile-container'>
                <div className='profile-pictures'>
                    <img
                        src="https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512"
                        alt="Léon Mfeng"
                        className="profile-photo"
                    />
                </div>
                <div className='profile-identity'>
                    <div className='name'>
                        <h2 className='user-name'>Léon MASAKUNA</h2>
                    </div>
                    <div className='row'>
                        <h2>
                            <i className="fa-solid fa-phone"></i>{" "} 
                            <span>+243815670620</span>
                        </h2>
                    </div>
                    <div className='row'>
                        <h2>
                            <i className="fa-sharp fa-solid fa-envelope"></i>{" "} 
                            <span>masakunamfengleon@gmail.com</span>
                        </h2>
                    </div>
                    <div className='row'>
                        <h2>
                            <i className="fa-brands fa-linkedin"></i>{" "}
                            <span>Léon Masakuna Mfeng</span>
                        </h2>
                    </div>
                    <div className='row'>
                        <h2>
                            <i class="fa-brands fa-square-github"></i> {" "}
                            <span>Leon-Masakuna</span>
                        </h2>
                    </div>
                </div>
            </div>        
        </>
    );
};

export default Profile;