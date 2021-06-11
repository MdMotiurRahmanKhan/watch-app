import React from 'react';
import classes from '../Css/TopBar.module.css';
const TopBar = () => {
    return (
        <div>
            <header>
             <nav className={classes.Topbar}>
          <img src="https://www.erpretail.com/documents/general/amazon-dyncamics-nav-1712.jpg" alt="Amazon Logo"/>
        </nav>
        </header>
        </div>
    );
};

export default TopBar;