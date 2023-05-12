import React from "react";
import { QuoteWords } from "../../asssets/data";

const Quotes = () => {
  return (
    <div className="quotes">
      <div className="quote__heading">
        <h4>Quotes</h4>
        <p>Click the quote icon to copy the specific quotes</p>
      </div>
      <div className="quotes__words">
        {QuoteWords.map(({ id, quote, author }) => {
          return (
            <h5 key={id} className="quote">
              {quote}
            </h5>
          );
        })}
      </div>
    </div>
  );
};

export default Quotes;
