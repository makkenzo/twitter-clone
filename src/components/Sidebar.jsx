import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';

import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';

import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Avatar, Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (e) => {
        if (anchorRef.current && anchorRef.current.contains(e.target)) {
            return;
        }

        setOpen(false);
    };

    const handleListKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            setOpen(false);
        } else if (e.key === 'Escape') {
            setOpen(false);
        }
    };

    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={TagIcon} text="Explore" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={PersonOutlinedIcon} text="Profile" />

            <Button variant="outlined" className="sidebar-tweet" fullWidth>
                Tweet
            </Button>

            <div
                ref={anchorRef}
                id="account-button"
                onClick={handleToggle}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                className="account-box"
            >
                <Avatar src="https://pbs.twimg.com/profile_images/1538927792804478980/6sQkMzDL_400x400.jpg" />
                <div className="account-details">
                    <h5>magniloquent</h5>
                    <p>@makk3nz00</p>
                </div>
            </div>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="top-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'top-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="account-menu"
                                    aria-labelledby="account-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem
                                        className="logout-btn"
                                        onClick={(e) => {
                                            handleClose(e);
                                        }}
                                    >
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default Sidebar;
