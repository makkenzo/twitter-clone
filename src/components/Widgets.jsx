import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterShareButton } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="widgets-widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'1508529942140792832'} />
                <TwitterTimelineEmbed sourceType="profile" screenName="opezdoIka" options={{ height: 400 }} />
                <TwitterShareButton
                    url={'https://t.me/makkenz0'}
                    options={{ text: '#reactjs is awesome', via: 'makk3nz00' }}
                />
            </div>
        </div>
    );
};

export default Widgets;
