import React from 'react';
import ProfileInfo from './RecommendedFeeds';

const SideBarRight = () => {
    return (
        <>
            <aside id="right-aside">
                <div id="rec-section">
                    <div>
                        <header>
                            <span>Add to your feed</span>
                            <span className="fas fa-info-circle">
                                <div id="float-info">
                                    <span>
                                        Follow things that interest you to
                                        personalize your feed.
                                    </span>
                                    <a href="#">Learn more.</a>
                                </div>
                                <span>►</span>
                                <div id="square"></div>
                            </span>
                        </header>
                       
                        <div>
                            <div>
                                <img src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem-500x313.jpg" alt="" />
                                <div>
                                    <strong>MongoDB</strong>
                                    <small>Company - Computer Software</small>
                                </div>
                                <button>
                                    <span className="fas fa-plus"></span>
                                    <span>Follow</span>
                                </button>
                            </div>
                            <div>
                                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                                <div>
                                    <strong>#reactjs</strong>
                                </div>
                                <button>
                                    <span className="fas fa-plus"></span>
                                    <span>Follow</span>
                                </button>
                            </div>
                            <div>
                                <img src="https://avatars.githubusercontent.com/u/3478542?v=4" alt="" />
                                <div>
                                    <strong>John Smith</strong>
                                    <small
                                    >Entrepreneur and Marketing
                                        Specialist</small
                                    >
                                </div>
                                <button>
                                    <span className="fas fa-plus"></span>
                                    <span>Follow</span>
                                </button>
                            </div>
                        </div>
                        <a href="#">View all recommendations</a>
                    </div>
                </div>
                <ProfileInfo></ProfileInfo>

            </aside>
        </>
    );
}

export default SideBarRight;