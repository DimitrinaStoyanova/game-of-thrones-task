import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useAppSelector } from '../hooks';
import { SpinnerDotted } from 'spinners-react';

export const SpinnerModal: React.FC = (props) => {
  useEffect(() => Modal.setAppElement('#root'), []);
  const loader = useAppSelector((state) => state.loader.GLOBAL_LOADER);

  return (
    <Modal
      isOpen={!!loader}
      className='custom-modal spinner-modal'
      overlayClassName='custom-overlay'
      portalClassName={'loader'}
    >
      <SpinnerDotted color={'#fff'} />
    </Modal>
  );
};
