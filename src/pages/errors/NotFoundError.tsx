import React from 'react';
import {useTranslation} from "react-i18next";
import { ReturnToHome } from './ReturnToHome';

const NotFoundError = (): JSX.Element => {
  const { t } = useTranslation('translation', { keyPrefix: 'common' });

  return  <div className='common-page'>
            <h2>{t('errors.notFound')}</h2>
            <p className='pt-4 mb-m' >{t('errors.notFoundText')}</p>
            <ReturnToHome />
        </div>
};

export default NotFoundError;

