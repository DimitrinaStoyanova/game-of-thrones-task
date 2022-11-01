import React, { Fragment } from 'react';
import { Field, FieldMetaState, FieldRenderProps } from 'react-final-form';
import 'react-datepicker/dist/react-datepicker.css';
import i18n from '../i18n';
import { FIELD_NAMES } from '../utils/constants';

export interface SelectOptions {
  name: string;
  value: string | SelectOptions[];
}

interface CustomProps {
  className?: string;
  options?: Array<SelectOptions>;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  label?: string;
  id?: string | number;
  value?: boolean | string;
  onChange?: any;
  readOnly?: boolean;
}

interface TextInput extends FieldRenderProps<string> {
  label: string;
  type: string;
  customProps: CustomProps;
  maxLength: number;
}

interface SelectInput extends FieldRenderProps<string> {
  label: string;
  type: string;
  customProps: CustomProps;
}

interface Checkbox extends FieldRenderProps<string> {
    label: string;
    value: string;
    customProps: CustomProps;
}
const checkbox = ({ input, label, meta, customProps }: Checkbox) => {
    label = customProps.label ? customProps.label : label;
    let className = customProps.className
        ? customProps.className + ' checkbox'
        : 'checkbox';

    if (meta.error && meta.touched) {
        className += ' error';
    }

    return (
        <Fragment>
            <div className={className}>
                <input
                    autoComplete='none'
                    checked={typeof input.value == 'boolean' ? input.value : false}
                    {...input}
                    type='checkbox'
                    disabled={customProps.disabled}
                    onChange={(e) => {
                        input.onChange(e);
                        if (customProps.onChange) {
                            customProps.onChange(e);
                        }
                    }}
                />
                <label>{label}</label>
                <div className='checkbox-error mt-5 '>{error(meta)}</div>
            </div>
        </Fragment>
    );
};

const error = (meta: FieldMetaState<string>) =>
  meta.error && meta.touched ? (
    <div className='error-message'>{meta.error}</div>
  ) : null;

const textInput = ({input, label, meta, customProps, maxLength,}: TextInput): any => {
    let className = customProps.className
        ? 'text-input ' + customProps.className
        : 'text-input';

    if (meta.error && meta.touched) {
        className += ' error';
    }

    if (customProps.required) {
        label = label + '*';
    }

    return (
        <div className={className}>
            <label>
                {label}
            </label>
            <input
                autoComplete='none'
                {...input}
                disabled={customProps.disabled}
                maxLength={maxLength}
                onChange={(e) => {
                    input.onChange(e);
                    if (customProps.onChange) {
                        customProps.onChange(e);
                    }
                }}
            />
            {error(meta)}
        </div>
    );
};

const selectInput = ({ input, label, meta, customProps }: SelectInput) => {
  let className = customProps.className
    ? 'select-input ' + customProps.className
    : 'select-input';

  if (meta.error && meta.touched) {
    className += ' error';
  }

  if (customProps.required) {
    label = label + '*';
  }

  const optionName = (option: SelectOptions) => {
    if (option.name) {
      return option.name;
    } else if (typeof option.value === 'number') {
      return option.value;
    } else {
      return '';
    }
  };

  const options = customProps.options
    ? customProps.options.map((option, index) => {
        if (Array.isArray(option.value)) {
          return (
            <optgroup label={option.name}>
              {option.value.map((subOption, index) => {
                return (
                  <option
                    key={index + subOption.name}
                    value={
                      !Array.isArray(subOption.value) ? subOption.value : ''
                    }
                  >
                    {optionName(subOption)}
                  </option>
                );
              })}
            </optgroup>
          );
        } else {
          return (
            <option
              key={index + option.name}
              value={!Array.isArray(option.value) ? option.value : ''}
            >
              {optionName(option)}
            </option>
          );
        }
      })
    : [];

  return (
    <div className={className}>
      <label>{label}</label>
      <select
        {...input}
        onChange={(e) => {
          input.onChange(e);
          if (customProps.onChange) {
            customProps.onChange(e);
          }
        }}
        disabled={customProps.disabled}
      >
        {options}
      </select>
      {error(meta)}
    </div>
  );
};

const identity = (value: any) => (value === '' ? null : value);

export const Fields = {
  commonFields: {
    password: (customProps: CustomProps = {}) => (
      <Field
        name={FIELD_NAMES.PASSWORD}
        customProps={customProps}
        label={ customProps.label ?  customProps.label : i18n.t('translation:common.fields.password')}
        type='password'
        component={textInput}
      />
    ),
    repeatPassword: (customProps: CustomProps = {}) => (
      <Field
        name={FIELD_NAMES.REPEAT_PASSWORD}
        customProps={customProps}
        label={ customProps.label ?  customProps.label : i18n.t('translation:common.fields,repeatPassword')}
        type='password'
        component={textInput}
      />
    ),
    email: (customProps: CustomProps = {}) => (
      <Field
        name={FIELD_NAMES.EMAIL}
        customProps={customProps}
        label={ customProps.label ?  customProps.label : i18n.t('translation:common.fields.email')}
        type='email'
        component={textInput}
        parse={identity}
      />
    ),
    name: (customProps: CustomProps = {}) => (
      <Field
        name={FIELD_NAMES.NAME}
        customProps={customProps}
        label={i18n.t('translation:common.fields.name')}
        type='text'
        component={textInput}
        parse={identity}
      />
    ),
    firstName: (customProps: CustomProps = {}) => (
      <Field
        name={FIELD_NAMES.FIRST_NAME}
        customProps={customProps}
        label={i18n.t('translation:common.fields.firstName')}
        type='text'
        component={textInput}
        parse={identity}
      />
    ),
    lastName: (customProps: CustomProps = {}) => (
      <Field
        name={FIELD_NAMES.LAST_NAME}
        customProps={customProps}
        label={i18n.t('translation:common.fields.lastName')}
        type='text'
        component={textInput}
        parse={identity}
      />
    ),
      acceptTermAndConditions: (customProps: CustomProps = {}) => (
          <Field
              name={FIELD_NAMES.TAC}
              customProps={customProps}
              label={i18n.t('translation:common.fields.acceptTermAndConditions')}
              type='checkbox'
              component={checkbox}
          />
      ),
  },
  filterFields: {},
};
