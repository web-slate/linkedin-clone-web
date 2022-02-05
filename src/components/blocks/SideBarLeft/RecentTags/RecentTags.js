
import React from 'react'


function RecentTags() {
  return <>
    <div id="profile-groups">
      <section>
        <header>
          <span>Recent</span>
          <span
            className="fas fa-angle-up"

          ></span>
        </header>
        <ul className="group-list">
          <li>
            <span className="fas fa-users"></span>
            <span>React Developers</span>
          </li>
          <li>
            <span className="fas fa-hashtag"></span>
            <span>javascript</span>
          </li>
          <li>
            <span className="fas fa-hashtag"></span>
            <span>webdevelopment</span>
          </li>
          <li>
            <span className="fas fa-users"></span>
            <span>Javascript Brasil</span>
          </li>
          <li>
            <span className="fas fa-users"></span>
            <span>Dog Lovers</span>
          </li>
        </ul>
      </section>
      <section>
        <header>
          <span className="group-title">Groups</span>
          <span
            className="fas fa-angle-up"

          ></span>
        </header>
        <ul>
          <li>
            <span className="fas fa-users"></span>
            <span id="aaaa">React Developers</span>
          </li>
          <li>
            <span className="fas fa-users"></span>
            <span>Javascript Brasil</span>
          </li>
          <li>
            <span className="fas fa-users"></span>
            <span>Dog Lovers</span>
          </li>
        </ul>
        <div className="group-list">
          <a href="#">See all</a>
        </div>
      </section>
      <section>
        <header>
          <span className="group-title">
            Followed Hashtags</span
          >
          <span
            className="fas fa-angle-up"

          ></span>
        </header>
        <ul>
          <li>
            <span className="fas fa-hashtag"></span>
            <span>javascript</span>
          </li>
          <li>
            <span className="fas fa-hashtag"></span>
            <span>webdevelopment</span>
          </li>
        </ul>
        <a href="#">See all</a>
      </section>
      <a href="#">Discover more</a>
    </div>
  </>
}

export default RecentTags
