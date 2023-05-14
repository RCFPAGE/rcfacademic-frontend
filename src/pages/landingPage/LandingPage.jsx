import React, { useState } from "react";
import MainHeader from "../../components/MainHeader";
import "./landingPage.scss";
import AvailablePdfs from "../../components/mainSection/AvailablePdfs";
import Quotes from "../../components/mainSection/Quotes";

const LandingPage = () => {
  const [query, setQuery] = useState("");
  // console.log("This is the result typed: ", query); //log to see query result search main header component

  return (
    <div className="landing__page">
      <MainHeader query={query} setQuery={setQuery} />

      <div className="middle__section">
        
        <div className="middle__section-right"> 
          <div className="pagination">
            <button className="btn">PDF's</button>
            <button className="btn">Quotes</button>
          </div>
          <AvailablePdfs query={query} setQuery={setQuery} />
        </div>

        <div className="middle__section-left">
          <Quotes />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
