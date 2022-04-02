import React from 'react';
import { createPortal } from 'react-dom';
import '../assets/styles/components/Modal.scss';
import { ReactComponent as SVGClose } from '../assets/static/icons/close.svg';

// pattern design: container

// Recordar en el index.html del public, agregar <div id="modal"></div>

const Modal = (props) =>
  props.isOpen
    ? createPortal(
        <div className="modal">
          <figure onClick={props.onClose} className="modal__close">
            <SVGClose className="modal__close-icon" />
          </figure>
          <div>{props.children}</div>
        </div>,
        document.getElementById('modal')
      )
    : '';
export default Modal;
