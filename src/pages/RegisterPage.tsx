import React from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks';
import { login } from '../actions';
import { LoginFields } from '../interfacesAndTypes';
import LogoWithName from '../resources/images/logo-with-name.png';
import { Button } from '../components/Button';
import { Fields } from '../components/Fields';

export const RegisterPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const onSubmit = (formValues: LoginFields): void => {
        dispatch(login(formValues)).then();
    };

    const renderLogo = (): JSX.Element => {
        return (
            <div className='image-container'>
                <img src={LogoWithName} className='mb-m' alt='logo-with-name' width={260}/>
            </div>
        );
    };

    const renderForm = (): JSX.Element => {
        return (
            <Form<LoginFields>
                onSubmit={(formValues) => {onSubmit(formValues);}}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        {Fields.commonFields.firstName({
                            className: 'login-inputs ml-m mr-m mb-m',
                        })}
                        {Fields.commonFields.lastName({
                            className: 'login-inputs ml-m mr-m mb-m',
                        })}
                        {Fields.commonFields.email({
                            className: 'login-inputs ml-m mr-m mb-m',
                        })}
                        {Fields.commonFields.password({
                            className: 'login-inputs ml-m mr-m mb-s',
                        })}
                        {Fields.commonFields.repeatPassword({
                            className: 'login-inputs ml-m mr-m mb-xs',
                            label: t('common.fields.repeatPassword')
                        })}
                        {Fields.commonFields.acceptTermAndConditions({
                            className: 'align-center input-checkbox mb-m'
                        })}
                        <div className='button-container'>
                            <Button
                                onClick={handleSubmit}
                                content={t('register')}
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
                <div className='login-header'>{t('register')}</div>
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
