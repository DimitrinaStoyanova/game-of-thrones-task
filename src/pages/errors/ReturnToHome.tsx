import React from 'react';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import { PAGES_PATHS } from '../../utils/constants';

export const ReturnToHome = (): JSX.Element => {
    const { t } = useTranslation();

    return <NavLink className='nav-link p-0' to={PAGES_PATHS.SEASONS}>
            <div className='link-btn-container'>
                <p className='return-link-btn align-center'>{t('returnToHomePage')}</p>
            </div>
         </NavLink>
};
