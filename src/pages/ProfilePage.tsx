import React from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import {useAppDispatch, useAppSelector} from '../hooks';
import {User} from '../interfacesAndTypes';
import { Button } from '../components/Button';
import { Fields } from '../components/Fields';
import {StoreState} from "../reducers";
import {updateUser} from "../actions";


export const ProfilePage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const account = useAppSelector((state: StoreState) => state.account);

    const onSubmit = (formValues: User): void => {
        dispatch(updateUser(formValues));
    };

    const renderForm = (): JSX.Element => {
        return (
            <Form<User>
                onSubmit={(formValues) => {onSubmit(formValues);}}
                initialValues={account}
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
                        <div className='button-container'>
                            <Button
                                onClick={handleSubmit}
                                content={t('common.buttons.save')}
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
                <div className='login-header'>{t('profile')}</div>
                <div className='mt-l'>{renderForm()}</div>
            </div>
        );
    };

    return (
        <div className='profile-container'>
            {renderContent()}
        </div>
    );
};
