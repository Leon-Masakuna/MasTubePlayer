import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/profileUpdate_style.css"

const ProfileUpdate = () => {
    return (
        <div className='profile_container'>
            <div className='photo_upload'>
                <div className='image'>
                    <img 
                        src="https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512"
                        alt="Léon Mfeng"
                        className="profile" 
                    />
                </div>
                <div>
                    <i className="fa-solid fa-camera photo_upload"></i>
                </div>
            </div>
            <div className='identities'>
                <div className='identities_upload'>
                    <div>
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div>
                        <input type="text" name="" id="" className="input_fields" placeholder='Léon Masakuna'/>
                    </div>
                </div>
                <div className='identities_upload'>
                    <div>
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                        <input type="text" name="" id="" className="input_fields" 
                        placeholder='+243 815 670 620'/>
                    </div>
                </div>
                <div className='identities_upload'>
                    <div>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                        <input type="text" name="" id="" className="input_fields" placeholder='masakunamfengleon@gmail.com'/>
                    </div>
                </div>
                <div className='identities_upload'>
                    <div>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div>
                        <input type="text" name="" id="" className="input_fields" placeholder='https://www.linkedin.com/in/l%C3%A9on-masakuna-mfeng-130303201/'/>
                    </div>
                </div>
                <div className='identities_upload'>
                    <div>
                        <i className="fa-brands fa-square-github"></i>
                    </div>
                    <div>
                        <input type="text" name="" id="" className="input_fields" placeholder='https://github.com/Leon-Masakuna'/>
                    </div>
                </div>
                <div className='profile_buttons'>
                    <Link className='button_link' to={'/userprofile'}>
                        <button>Cancel</button>
                    </Link>
                    <Link className='button_link'>
                        <button>Validate</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdate;