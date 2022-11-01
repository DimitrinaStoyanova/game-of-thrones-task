import React from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../hooks';
import { login } from '../actions';
import { LoginFields } from '../interfacesAndTypes';
import LogoWithName from '../resources/images/logo-with-name.png';
import { Button } from '../components/Button';
import { Fields } from '../components/Fields';
import {NavLink} from "react-router-dom";
import {PAGES_PATHS} from "../utils/constants";
import {formUtils} from "../utils/formUtils";

export const LoginPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const onSubmit = (formValues: LoginFields): void => {
        dispatch(login(formValues)).then();
    };

    const renderLogo = (): JSX.Element => {
        return (
            <div className='image-container'>
                <img src={LogoWithName} className='mb-l' alt='logo-with-name' width={300}/>
            </div>
        );
    };

    const renderForm = (): JSX.Element => {
        return (
            <Form<LoginFields>
                onSubmit={(formValues) => {
                    onSubmit(formValues);
                }}
                validate={formUtils.validateLogin}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        {Fields.commonFields.email({
                            className: 'login-inputs ml-m mr-m mb-m',
                        })}
                        {Fields.commonFields.password({
                            className: 'login-inputs ml-m mr-m mb-s',
                        })}
                        <div className='align-center mb-m'>
                            <span>
                                {t('loginPage.registerMsg')}
                                <NavLink className='link-nav' to={PAGES_PATHS.REGISTER} onClick={()=>{}}>
                                    {t('register')}
                                </NavLink>
                            </span>
                        </div>
                        <div className='button-container'>
                            <Button
                                onClick={handleSubmit}
                                content={t('login')}
                                color={'gold'}
                            />
                        </div>
                    </form>
                )}
            />
        );
    };

    const renderContent = (): JSX.Element => {
        return (
            <div className='login-content'>
                <div className='login-header'>{t('login')}</div>
                <div className='mt-l'>{renderForm()}</div>
            </div>
        );
    };

    return (
        <div className='login-container'>
            {renderLogo()}
            {renderContent()}
        </div>
    );
};
