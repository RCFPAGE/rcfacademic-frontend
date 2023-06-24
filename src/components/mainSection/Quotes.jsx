import React, { useEffect, useState } from "react";
import { QuoteWords } from "../../asssets/data";
import { QuoteIcon } from "../../asssets/icon";
import { motion } from "framer-motion";
import { shuffleArray } from "./utils";

const Quotes = () => {
  const [copied, setCopied] = useState(false);
  const [shuffledQuotes, setShuffledQuotes] = useState([]);

  useEffect(() => {
    // Shuffle the array of quotes
    const shuffledArray = shuffleArray(QuoteWords);
    setShuffledQuotes(shuffledArray);
  }, []);
  return (
    <div className="quotes">
      {copied && (
        <div className="popup">
          <span className="popup-message">Copied to clipboard!</span>
        </div>
      )}
      <div className="quotes__heading">
        <h4>Quotes</h4>
        <p>Click the quote icon to copy the specific quotes</p>
      </div>
      <ul className="quotes__words">
        {shuffledQuotes.map(({ id, quote, author }) => {
          return (
            <motion.li
              key={id}
              className="quote"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "linear" }}
              onClick={() => {
                navigator.clipboard.writeText(quote);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 3000);
              }}
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
