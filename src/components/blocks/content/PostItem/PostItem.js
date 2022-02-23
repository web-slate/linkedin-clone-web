
import React, { useEffect, useState } from 'react'
import PostForm from '../PostForm'
import imageSrc from '../../../../static/images/jp.png';
import useGetPostList from '../../../services/hooks/useGetPostList';
import { FetchView } from "react-camouflage";

function PostItem() {
  const { isLoading, serverError, postItems } = useGetPostList();
  const [postListStatusMapping, setPostListStatusMapping] = useState({
    success: false,
    error: false,
    loading: true
  });


  useEffect(() => {
    setPostListStatusMapping({
      success: postItems,
      error: serverError,
      loading: isLoading
    });
  }, [postListStatusMapping]);




  return <>
    <div id="main-wrapper">
      <main id="main-section">
        <PostForm></PostForm>

        <FetchView statusMapping={postListStatusMapping}>

          <FetchView.Fetching>
            <div>Loading...</div>
          </FetchView.Fetching>

          <FetchView.Fetched>
            <span>{JSON.stringify(postItems)}</span>
          </FetchView.Fetched>

          <FetchView.Error>
            <div>sorry error message</div>
          </FetchView.Error>

        </FetchView>

        <div id="feed-sort">
          <hr />
          <button>
            <span>Sort by:</span>
            <strong>Top</strong>
            <span className="fas fa-sort-down"></span>
          </button>
        </div>
        <article>
          <div id="post-author">
            <a href="#">
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/16048888?s=96&v=4"
                  alt=""
                />
                <div>
                  <div>
                    <strong id="post-author-name"
                    >Govindaraj K    </strong>
                    <span>
                      <span>&nbsp;·&nbsp;</span>
                      1st</span
                    >
                  </div>
                  <span
                  >Web Developer at Jp Morgan</span
                  >
                  <span>12h</span>
                </div>
              </div>
            </a>
            <div>
              <span className="fas fa-circle"></span>
              <span className="fas fa-circle"></span>
              <span className="fas fa-circle"></span>
            </div>
          </div>
          <div id="post-data">
            <p>
              Yesterday I had a conversation with
              <span> Yuvraj </span>, Front-End
              Developer, and found out that he cloned LinkedIn
              layout using HTML/CSS. I think you should check
              this out ;)
            </p>
            <p id="post-translation">
              <button>See translation</button>
            </p>

          </div>
          <div id="post-interactions">
            <div id="interactions-amount">
              <span
                id="like-icon"
                className="fas fa-thumbs-up fa-flip-horizontal"
              ></span>
              <span
                id="heart-icon"
                className="fas fa-heart"
              ></span>
              <span id="amount-info"
              >23 <span>&nbsp;·&nbsp;</span> 4
                Comments</span
              >
            </div>
            <div id="interactions-btns">
              <button>
                <span
                  className="far fa-thumbs-up fa-flip-horizontal"
                ></span>
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
        </article>

        <article>
          <div id="post-author">
            <a href="#">
              <div>
                <img
                  src={imageSrc}

                  alt=""
                />
                <div>
                  <div>
                    <strong id="post-author-name"
                    >JP    </strong>
                    <span>
                      <span>&nbsp;·&nbsp;</span>
                      1st</span
                    >
                  </div>
                  <span
                  >Web Developer at Facebook</span
                  >
                  <span>12h</span>
                </div>
              </div>
            </a>
            <div>
              <span className="fas fa-circle"></span>
              <span className="fas fa-circle"></span>
              <span className="fas fa-circle"></span>
            </div>
          </div>
          <div id="post-data">
            <p>
              According to the report, the continued political instability caused the forecast for the investment segment in 2022 to be sluggish. Sluggish recovery is also expected for the retail and office sectors, leaving only the residential market for bright recovery thanks to the property-related incentives under Budget 2022.
            </p>
            <p id="post-translation">
              <button>See translation</button>
            </p>

          </div>
          <div id="post-interactions">
            <div id="interactions-amount">
              <span
                id="like-icon"
                className="fas fa-thumbs-up fa-flip-horizontal"
              ></span>
              <span
                id="heart-icon"
                className="fas fa-heart"
              ></span>
              <span id="amount-info"
              >10025 <span>&nbsp;·&nbsp;</span> 4521
                Comments</span
              >
            </div>
            <div id="interactions-btns">
              <button>
                <span
                  className="far fa-thumbs-up fa-flip-horizontal"
                ></span>
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
        </article>

      </main>
    </div>
  </>
}

export default PostItem
