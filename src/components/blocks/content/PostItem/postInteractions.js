import React, { useRef } from 'react';

function PostInteractions() {

    return (
        <>
            <div id="post-interactions">
                <div id="interactions-amount">
                    <span id="like-icon" className="fas fa-thumbs-up fa-flip-horizontal"></span>
                    <span id="heart-icon" className="fas fa-heart"></span>
                    <span id="amount-info">23 <span>&nbsp;·&nbsp;</span> 4  Comments</span>
                </div>

                <div id="interactions-btns">
                    <button>
                        <span className="far fa-thumbs-up fa-flip-horizontal"></span>
                        <span>Like</span>
                    </button>
                    <button>
                        <span
                            className="far fa-comment-dots fa-flip-horizontal"
                        ></span>
                        <span>Comment</span>
                    </button>
                    <button>
                        <span className="far fa-share-square"></span>
                        <span>Share</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default PostInteractions;