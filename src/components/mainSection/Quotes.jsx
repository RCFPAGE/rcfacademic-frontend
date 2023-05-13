import React from "react";
import { QuoteWords } from "../../asssets/data";

const Quotes = () => {
  return (
    <div className="quotes">
      <div className="quote__heading">
        <h4>Quotes</h4>
        <p>Click the quote icon to copy the specific quotes</p>
      </div>
      <ul className="quotes__words">
        {QuoteWords.map(({ id, quote, author }) => {
          return (
            <li key={id} className="quote">
              {quote}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Quotes;
