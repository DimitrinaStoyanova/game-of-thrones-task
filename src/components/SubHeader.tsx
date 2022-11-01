import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonSubmitType } from '../interfacesAndTypes/types';
import { Button } from './Button';

interface Props {
  title: string;
  size: 'small' | 'medium' | 'large';
  buttons?: ButtonItemProps[];
  textInfo?: string;
  linkInfo?: string;
  toggleCollapse?: React.Dispatch<React.SetStateAction<boolean>>;
  isCollapsed?: boolean;
  spanText?: string;
}

interface ButtonItemProps {
  content: string;
  color: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: ButtonSubmitType;
  form?: string;
}

export const SubHeader = (props: Props): JSX.Element => {
  function renderTitle() {
    return (
      <p
        className={`mb-0${props.toggleCollapse ? ' collapsed' : ''} ${
          props.isCollapsed ? ' down' : ''
        }`}
        onClick={
          props.toggleCollapse
            ? () => props.toggleCollapse!(!props.isCollapsed)
            : () => {}
        }
      >
        {props.title}
        {props.spanText !== '' ? <span className='header-span'>{props.spanText}</span> : null}
      </p>
    );
  }

  function renderButtons() {
    if (props.buttons && props.buttons.length > 0) {
      return (
        <div className='buttons-container'>
          {' '}
          {props.buttons.map((button, index) => {
            return (
              <div className='header-button' key={index}>
                <Button
                  color={'gold'}
                  content={button.content}
                  onClick={button.onClick}
                  disabled={button.disabled}
                  type={button.type}
                  form={button.form}
                />
              </div>
            );
          })}{' '}
        </div>
      );
    }
  }

  const lineClass = 'sub-header-underline ' + props.size;

  return (
    <div className='sub-header-container'>
      <div className='sub-header-col'>
        {renderTitle()}
        {renderButtons()}
      </div>

      <hr className={lineClass} />
      {props.textInfo && (
        <p className='subheader-text-info'>
          {props.textInfo}
          {props.linkInfo && <NavLink to={props.linkInfo}>here</NavLink>}
        </p>
      )}
    </div>
  );
};
