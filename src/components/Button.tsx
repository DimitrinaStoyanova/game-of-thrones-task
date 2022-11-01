import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ButtonSubmitType, ButtonColorType } from '../interfacesAndTypes/types';

interface Props {
  content: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color: ButtonColorType;
  icon?: IconDefinition;
  count?: number;
  type?: ButtonSubmitType;
  form?: string;
  disabled?: boolean;
  hidden?: boolean;
}

export const Button = (props: Props): JSX.Element => {
  const className = `common-button ${props.color}`;

  const buttonAttributes = {
    className: className,
    ...(props.onClick && { onClick: props.onClick }),
    ...(props.type && { type: props.type }),
    ...(props.form && { form: props.form }),
    ...(props.disabled && { disabled: props.disabled }),
    ...(props.hidden && { hidden: props.hidden }),
  };

  return (
    <button {...buttonAttributes}>
      <span className={props.icon ? 'button-icon' : ''}>
        {props.icon && <FontAwesomeIcon icon={props.icon} />}
      </span>
      <span className='button-content'>{props.content}</span>
      <span className={props.count !== undefined ? 'button-counter' : ''}>
        {props.count !== undefined && props.count}
      </span>
    </button>
  );
};
