import React from "react";
import { Download, Eye, Filter } from "../../asssets/icon";
import { Books } from "../../asssets/data";

const AvailablePdfs = ({ query, setQuery }) => {
  const filteredPDFs = Books.filter(({ title }) => {
    return title.toLowerCase().includes(query.toLowerCase());
  });
  // console.log(filteredPDFs);//log to see filtered result
  return (
    <div className="available__pdfs">
      <div className="available__pdfs-heading">
        <h4>All available PDF's</h4>
        <p>
          Filter <Filter />
        </p>
      </div>
      <div className="bookpdfs">
        {filteredPDFs.map(({ id, title, href, authorName, numOfPages }) => {
          return (
            <div className="bookpdf" key={id}>
              <div className="bookpdf__left">
                <h4 className="book__title">{title}</h4>
                <div className="bookpdf__left1">
                  <h6>{authorName}</h6>
                  <span>{numOfPages} pages</span>
                </div>
              </div>
              <div className="bookpdf__right">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopenner"
                  className="btn1"
                >
                  Preview
                  <Eye />
                </a>
                <a
                  href={href}
                  target="_blank"
                  download={title}
                  rel="noreferrer noopenner"
                  className="btn2"
                >
                  Download <Download />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePdfs;
