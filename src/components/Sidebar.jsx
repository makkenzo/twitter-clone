import React from 'react';
import './Sidebar.css';

import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';

import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from '@mui/material';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={TagIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
            <SidebarOption Icon={PersonOutlinedIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

            <Button variant="outlined" className="sidebar-tweet" fullWidth>
                Tweet
            </Button>
        </div>
    );
};

export default Sidebar;
