import React from 'react';
import {useTranslation} from "react-i18next";
import { ReturnToHome } from './ReturnToHome';

const InternalServerError = (): JSX.Element => {
  const { t } = useTranslation('translation', { keyPrefix: 'common' });

  return  <div className='common-page'>
            <h2>{t('errors.internalServerErr')}</h2>
            <p className='pt-4 mb-m' >{t('errors.serverErrText')}</p>
            <ReturnToHome />
        </div>
};

export default InternalServerError;

