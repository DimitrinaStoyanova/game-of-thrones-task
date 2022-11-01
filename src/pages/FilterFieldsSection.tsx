import React, {useState} from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';
import { Fields } from '../components/Fields';
import { useAppDispatch } from '../hooks';
import {SeasonsDataFilterFields} from "../interfacesAndTypes";
import {searchEpisodeByName} from "../actions";

interface SeasonsDataFilterFieldsProps {
  filterFields: SeasonsDataFilterFields;
}

export const FilterFieldsSection = (
    props: SeasonsDataFilterFieldsProps
): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('translation', { keyPrefix: 'common' });

  const onSubmit = (filterValues: SeasonsDataFilterFields) => {
      dispatch(searchEpisodeByName(filterValues));
  };

  return (
      <div className='filter-fields'>
        <Form<SeasonsDataFilterFields>
            onSubmit={(formValues) => {
              onSubmit(formValues);
            }}
            initialValues={props.filterFields}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} id='episodes-filter' className='full-width'>
                  <div className='filter-container flex-wrap gap-s'>
                      {Fields.commonFields.name({className: 'small-input dark-input'})}
                    <div className='filter-button flex-wrap gap-s'>
                        <Button
                            onClick={handleSubmit}
                            content={t('buttons.filter')}
                            color={'gold'}
                        />
                    </div>
                    </div>
                </form>
            )}
        />
      </div>
  );
};
