import React from "react";
import { QuoteWords } from "../../asssets/data";
import { QuoteIcon } from "../../asssets/icon";
import { motion } from "framer-motion";

const Quotes = () => {
  return (
    <div className="quotes">
      <div className="quotes__heading">
        <h4>Quotes</h4>
        <p>Click the quote icon to copy the specific quotes</p>
      </div>
      <ul className="quotes__words">
        {QuoteWords.map(({ id, quote, author }) => {
          return (
            <motion.li
              key={id}
              className="quote"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "linear" }}
            >
              <span>
                <QuoteIcon />
              </span>
              {quote}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Quotes;
