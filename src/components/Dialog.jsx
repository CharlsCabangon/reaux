import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { motion, AnimatePresence } from 'framer-motion';

import { PrimaryBtn } from './controls/Button';

export default function Dialog({ isOpen, message, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();

      document.body.style.overflow = 'hidden';

      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEsc);

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed z-50 flex w-[80%] max-w-md -translate-x-1/2 flex-col items-center rounded-lg bg-white p-6 shadow-xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-message"
          >
            <p id="dialog-message" className="text-md mb-10 text-center font-normal">
              {message}
            </p>
            <PrimaryBtn name="Okay" onClick={onClose} ref={closeButtonRef} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
