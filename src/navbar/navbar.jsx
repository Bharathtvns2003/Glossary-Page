import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NAVBAR_VARIANT } from '../navigation.constants';
import { DEZERV_LOGO_WHITE_URL } from '../pages.constants';

import whiteClose from '../header/close-white.svg';
import whiteMenu from '../header/menu-white.svg';

import { extractAndSetUtmParamsToLS } from '../utm.utils';

import * as styles from './navbar.module.scss';

const Navbar = ({ location, fixedNav, variant, menuItems }) => {
  const [menuImage, setmenuImage] = useState(whiteMenu);
  // set utm params in the local storage if present
  extractAndSetUtmParamsToLS(location.search);

  const handleClick = () => {
    if (menuImage === whiteMenu) {
      setmenuImage(whiteClose);
    } else if (menuImage === whiteClose) {
      setmenuImage(whiteMenu);
    }
  };

  return (
    <div className={`${styles.darkNav} ${fixedNav ? styles.fixedNav : ''}`}>
      <div className={styles.borderedNav}>
        <div className={`${styles.nav} ${styles.navWrapper}`}>
          <input type="checkbox" id={styles.navCheck} />
          <div>
            <a className={styles.logoBrand} href="/">
              <img
                loading="lazy"
                src={DEZERV_LOGO_WHITE_URL}
                alt="Dezerv"
                width={132}
                height={22}
              />
            </a>
          </div>
          <div
            className={styles.navBtn}
            onClick={handleClick}
            role="presentation"
          >
            <label htmlFor={styles.navCheck}>
              <span className="">
                <img loading="lazy" id="check" src={menuImage} alt="" />
              </span>
              <span className={styles.myclass}>
                <img loading="lazy" src={whiteClose} alt="close" />
              </span>
            </label>
          </div>

          <div className={`${styles.navLinks} ${styles.navCollapse}`}>
            {variant === NAVBAR_VARIANT.OTHER && (
              <ul className={styles.navNav}>
                {menuItems.map(ele => {
                  if (typeof ele.action === 'function') {
                    return (
                      <li key={ele.action} className={styles.navItem}>
                        <button onClick={ele.action}>
                          {ele.text} <span />
                        </button>
                      </li>
                    );
                  }
                  return (
                    <li key={ele.action} className={styles.navItem}>
                      <a
                        className={styles.navLink}
                        href={ele.action}
                        target="_self"
                        rel="noreferrer"
                      >
                        {ele.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
            {variant === NAVBAR_VARIANT.MENU && (
              <ul className={styles.navNav}>
                <li className={styles.navItem}>
                  <a
                    className={`${styles.navLink} ${
                      location.pathname === '/' ? styles.active : ''
                    }`}
                    href="/"
                  >
                    HOME
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a
                    className={`${styles.navLink} ${
                      location.pathname.indexOf('/blog') !== -1
                        ? styles.active
                        : ''
                    }`}
                    href="/blog/"
                    target="_self"
                    rel="noreferrer"
                  >
                    BLOG &amp; MORE
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a
                    className={`${styles.navLink} ${
                      location.pathname.indexOf('/team') !== -1
                        ? styles.active
                        : ''
                    }`}
                    href="/team/"
                    target="_self"
                    rel="noreferrer"
                  >
                    TEAM
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a
                    className={styles.navLink}
                    href="/investment/"
                    target="_self"
                    rel="noreferrer"
                  >
                    MEMBER LOGIN
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  fixedNav: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.shape({
      indexOf: PropTypes.func.isRequired,
    }),
    search: PropTypes.string.isRequired,
  }).isRequired,
  menuItems: PropTypes.array,
  variant: PropTypes.string,
};

Navbar.defaultProps = {
  fixedNav: false,
  variant: NAVBAR_VARIANT.MENU,
  menuItems: [],
};

export default Navbar;
