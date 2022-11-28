import React from 'react';
import "../styles/videoReading_style.css"

const Comment = () => {
    return (
        <div>
            <div className='comment-part'>
                <div className='comments'>
                    {"128k Comments"}
                </div>
                    <div className='filter'>
                        <i className="fa-solid fa-filter"></i> {" "}
                        {"Filter comments"}
                    </div>
                </div>
                <div className='comment-edit'>
                    <div>
                        <img 
                           src="https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512"
                           alt="Léon Mfeng"
                           className="profile-picture" 
                        />
                    </div>
                    <div>
                        <form action=""  className='comment-input'>
                           <input type="text" placeholder='comment please' name="" id="" className='input'/>
                           <button type="">Send</button>
                        </form>
                    </div>     
                </div>
                <div className='comment-part-2'>
                    <div className='comment-user'>
                        <img 
                           src="https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512"
                           alt="Léon Mfeng"
                           className="profile-picture" 
                        />
                    </div>
                    <div className='user-names'>
                        <div className='comment-time'>
                           <p>{"Léon Masakuna"}</p>
                           <p>{"12 minutes ago"}</p>
                        </div>
                        <div>
                            <p>
                                Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire !
                            </p>
                            <div className='comment-mentions'>
                                <div>
                                    <i className="fa-solid fa-thumbs-up"></i>
                                    <span>{" "}2k</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-thumbs-down"></i>
                                </div>
                                <div>
                                    <a href="">Reply</a>
                                </div>
                                <div className='comment-input'>
                                    <input type="text" placeholder='comment please' name="" id="" className='input'/>
                                    <button>Send</button>
                                </div>
                            </div>
                            <div className='comment-replies'>
                                <div>
                                    <i className="fa-solid fa-square-caret-up"></i>
                                </div>
                                <div>
                                    10 replies
                                </div>
                            </div>
                            <div>
                                <div className='comment-part-2'>
                                    <div className='comment-user'>
                                        <img 
                                        src="https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512"
                                        alt="Léon Mfeng"
                                        className="profile-picture" 
                                        />
                                    </div>
                                    <div className='user-names'>
                                        <div className='comment-time'>
                                            <p>{"Léon Masakuna"}</p>
                                            <p>{"12 minutes ago"}</p>
                                        </div>
                                        <div>
                                            <p>
                                                Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire !
                                            </p>
                                            <div className='comment-mentions'>
                                                <div>
                                                    <i className="fa-solid fa-thumbs-up"></i>
                                                    <span>{" "}2k</span>
                                                </div>
                                                <div>
                                                    <i className="fa-solid fa-thumbs-down"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='comment-part-2 commentaire'>
                    <div className='comment-user'>
                        <img 
                           src="https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512"
                           alt="Léon Mfeng"
                           className="profile-picture" 
                        />
                    </div>
                    <div className='user-names'>
                        <div className='comment-time'>
                           <p>{"Léon Masakuna"}</p>
                           <p>{"12 minutes ago"}</p>
                        </div>
                        <div>
                           <p>
                              Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire ! Ceci est un message de commentaire !
                           </p>
                           <div className='comment-mentions'>
                                <div>
                                    <i className="fa-solid fa-thumbs-up"></i>
                                    <span>{" "}2k</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-thumbs-down"></i>
                                </div>
                                <div>
                                    <a href="">Reply</a>
                                </div>
                                <div className='comment-input'>
                                    <input type="text" placeholder='comment please' name="" id="" className='input'/>
                                    <button>Send</button>
                                </div>
                           </div>
                           <div className='comment-replies'>
                                <div>
                                    <i className="fa-solid fa-square-caret-down"></i>
                                </div>
                                <div>
                                    10 replies
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Comment;