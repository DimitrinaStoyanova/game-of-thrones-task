import React from 'react';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import { ButtonSubmitType } from '../interfacesAndTypes/types';

export interface BreadcrumbItemProps {
  path: string;
  name: string;
}

interface ButtonItemProps {
  content: string;
  color: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: ButtonSubmitType;
  form?: string;
  disabled?: boolean;
  hidden?: boolean;
}

interface Props {
  title: string;
  breadcrumbItems: BreadcrumbItemProps[];
  buttons?: ButtonItemProps[];
}

export const Header = (props: Props): JSX.Element => {
  function renderTitle() {
    return <p className='header-title mb-0'>{props.title}</p>;
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
                  type={button.type}
                  form={button.form}
                  disabled={button.disabled}
                  hidden={button.hidden}
                />
              </div>
            );
          })}{' '}
        </div>
      );
    }
  }

  function renderBreadCrumbs() {
    if (props.breadcrumbItems.length > 0) {
      const link = (item: BreadcrumbItemProps) =>
        item.path ? (
          <NavLink className='nav-link-bc' to={item.path}>
            <span>{item.name}</span>
          </NavLink>
        ) : (
          <span className='disabled-link'>{item.name}</span>
        );
      return (
        <div className='breadcrumbs'>
          <ol className='breadcrumb main-nav-bc'>
            {props.breadcrumbItems.map((item, index) => {
              return (
                <li className='breadcrumb-item' key={index}>
                  {link(item)}
                </li>
              );
            })}
          </ol>
        </div>
      );
    }
  }

  return (
    <div className='header-container'>
      <div className='first-row'>
        {renderTitle()}
        {renderButtons()}
      </div>
      {renderBreadCrumbs()}
    </div>
  );
};
