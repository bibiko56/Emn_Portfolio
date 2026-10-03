import { motion } from "framer-motion";

const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}     // Starts invisible and 20px down
      whileInView={{ opacity: 1, y: 0 }}  // Fades in and moves up when seen
      viewport={{ once: true, amount: 0.2 }} // Only triggers once when 20% visible
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;