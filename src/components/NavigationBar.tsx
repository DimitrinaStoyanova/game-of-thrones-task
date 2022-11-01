import React, {} from 'react';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from '../hooks';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileVideo, faStar} from '@fortawesome/free-solid-svg-icons';
import Logo from '../resources/images/logo.png';
import {PAGES_PATHS} from '../utils/constants';
import {logout} from "../actions";

export const NavigationBar = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const logoutUser = () => {
        dispatch(logout());
    }

    return (
        <div className='navigation'>
            <ul>
                <li>
                    <NavLink className='link-nav' to={PAGES_PATHS.SEASONS}>
            <span className='nav-icon'>
              <FontAwesomeIcon icon={faFileVideo}/>
            </span>
                        <span>{t('navigationBar.seasons')}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='link-nav' to={PAGES_PATHS.FAVORITE_EPISODES}>
            <span className='nav-icon'>
              <FontAwesomeIcon icon={faStar}/>
            </span>
                        <span>{t('navigationBar.favorites')}</span>
                    </NavLink>
                </li>
            </ul>
            <div className='logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <ul>
                <li className='align-center gap-xs'>
                    <div className='align-center user-container'>
                        <img
                            src="https://i0.wp.com/short-biography.com/wp-content/uploads/emilia-clarke/Emilia-Clarke.jpg?w=1147&ssl=1"
                            className='profile-img' alt=""/>
                    </div>
                    <NavLink className='link-nav' to={PAGES_PATHS.PROFILE}>
                        <span>{t('profile')}</span>
                    </NavLink>
                </li>
                <li>
                    <p className='link-nav mb-0' onClick={() => logoutUser()}>
                        <span>{t('logout')}</span>
                    </p>
                </li>
            </ul>
        </div>
    );
};
