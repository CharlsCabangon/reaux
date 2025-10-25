import { motion, AnimatePresence } from 'framer-motion';

import { PrimaryBtn } from './controls/Button';

export default function Dialog({ isOpen, message, onClose }) {
  if (!isOpen) return null;

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
            className="flex h-[30%] w-[25%] flex-col items-center justify-between rounded-md bg-white p-10 pb-7 text-center shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <p className="text-md mb-4 font-normal">{message}</p>
            <PrimaryBtn name="Okay" onClick={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
