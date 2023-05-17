import useResponsive from "../../hooks/useResponsive";
import React, { useState } from "react";
import MainHeader from "../../components/MainHeader";
import "./landingPage.scss";
import AvailablePdfs from "../../components/mainSection/AvailablePdfs";
import Quotes from "../../components/mainSection/Quotes";

const LandingPage = () => {
  const [query, setQuery] = useState("");
  // console.log("This is the result typed: ", query); //log to see query result search main header component

  const [pdfIsVisible, setPdfIsVisible] = useState(true);

  const onMobile = useResponsive();
  console.log("Mobile status:", onMobile);

  return (
    <div className="landing__page">
      <MainHeader query={query} setQuery={setQuery} />

      {onMobile ? (
        <div className="middle__section">
          <div className="pagination">
            <button
              className={`btn ${pdfIsVisible && "active"}`}
              onClick={() => setPdfIsVisible(true)}
            >
              PDF's
            </button>
            <button
              className={`btn ${!pdfIsVisible && "active"}`}
              onClick={() => setPdfIsVisible(false)}
            >
              Quotes
            </button>
          </div>
          {pdfIsVisible && (
            <div className={"middle__section-right"}>
              <div>
                <AvailablePdfs query={query} setQuery={setQuery} />
              </div>
            </div>
          )}

          {!pdfIsVisible && (
            <div className="middle__section-left">
              <Quotes />
            </div>
          )}
        </div>
      ) : (
        <div className="middle__section">
          <div className="middle__section-right">
            <div className="pagination">
              <button className="btn">PDF's</button>
              <button className="btn">Quotes</button>
            </div>
            <div>
              <AvailablePdfs query={query} setQuery={setQuery} />
            </div>
          </div>
          <div className="middle__section-left">
            <Quotes />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
