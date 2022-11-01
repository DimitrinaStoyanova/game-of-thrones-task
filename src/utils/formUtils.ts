import i18n from '../i18n';
import { LoginFields} from '../interfacesAndTypes';
import {EMPTY_STRING, FIELD_NAMES,} from './constants';
import _ from 'lodash';

export const commonValidation = (
    formValues: { [key: string]: any },
    errors: { [key: string]: any },
    fieldName: string
) => {
    let error = '';
    const fieldValue = _.get(formValues, fieldName);

    function required(this: {
        required: () => any;
        validEmail: () => any;
        validate: () => any;
    }) {
        if (
            fieldValue == EMPTY_STRING ||
            !fieldValue ||
            (fieldValue && typeof fieldValue === 'string' && fieldValue.trim() === '')
        ) {
            error = i18n.t('translation:common.errors.requiredField');
        }
        return this;
    }

    function validEmail(this: { validate: () => any }) {
        const emailReg =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (
            fieldValue &&
            typeof fieldValue === 'string' &&
            !emailReg.test(String(fieldValue.toLowerCase()))
        ) {
            error = i18n.t('translation:common.errors.invalidEmail');
        }

        return this;
    }

    function validate() {
        if (error) {
            return _.set(errors, fieldName, error);
        } else {
            return _.get(errors, fieldName);
        }
    }

    return {
        required,
        validEmail,
        validate,
    };
};

export const formUtils = {
    validateLogin: (formValues: LoginFields) => {
        let errors = {};

        commonValidation(formValues, errors, FIELD_NAMES.EMAIL)
            .required()
            .validEmail()
            .validate();

        commonValidation(formValues, errors, FIELD_NAMES.PASSWORD)
            .required()
            .validate();

        return errors;
    },
};
