import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
const Styled = styled.div`
  .modal_overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal_body {
    background: #ffffff;
    border-radius: 4px;
    width: 60%;
    padding: 40px 30px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .modal_header {
    margin-bottom: 15px;
    font-weight: 600;
  }
`;
const Modal = ({ header, isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, duration: 0.5 }}
          exit={{ opacity: 0, duration: 0.5 }}
        >
          <Styled>
            <div className="modal_overlay">
              <div className="modal_body">
                {header && <h2 className="modal_header">{header}</h2>}
                {children}
              </div>
            </div>
          </Styled>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
