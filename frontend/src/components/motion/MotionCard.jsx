import { motion } from 'framer-motion';

const MotionCard = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut'
      }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;
