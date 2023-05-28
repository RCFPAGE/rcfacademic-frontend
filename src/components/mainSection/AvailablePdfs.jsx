import React, { useEffect, useState } from "react";
import {
  CaretDownIcon,
  CaretUpIcon,
  Download,
  Eye,
  Filter,
} from "../../asssets/icon";
import { Books } from "../../asssets/data";
import { motion } from "framer-motion";

const AvailablePdfs = ({ query, setQuery }) => {
  // State for filtered PDFs
  const [filteredPDFs, setFilteredPDFs] = useState([]);

  // Populate pdf array when page loads
  useEffect(() => {
    setFilteredPDFs(
      Books.filter(({ title }) => {
        return title.toLowerCase().includes(query.toLowerCase());
      })
    );
  }, []);

  // Populate pdf array when query changes
  useEffect(() => {
    setFilteredPDFs(
      Books.filter(({ title }) => {
        return title.toLowerCase().includes(query.toLowerCase());
      })
    );
  }, [query]);

  // const filteredPDFs = Books.filter(({ title }) => {
  //   return title.toLowerCase().includes(query.toLowerCase());
  // });

  // console.log(filteredPDFs);//log to see filtered result

  const [filterDropdownIsVisible, setFilterDropdownIsVisible] = useState(false);
  const [filterOptionsIsVisible, setFilterOptionsIsVisible] = useState(false);
  const [filterOptionSelected, setFilterOptionSelected] = useState(undefined);

  const filterOptions = {
    schoolBooks: 1,
    churchBooks: 2,
    faculty: 3,
    department: 4,
  };

  const switchFilterName = () => {
    if (!filterOptionSelected) {
      return `Select option`;
    }
    if (filterOptionSelected === filterOptions.schoolBooks) {
      return "School books";
    }
    if (filterOptionSelected === filterOptions.churchBooks) {
      return "Church books";
    }
    if (filterOptionSelected === filterOptions.department) {
      return "Department";
    }
    if (filterOptionSelected === filterOptions.faculty) {
      return "Faculty";
    }
  };

  const switchSerchPlaceholder = () => {
    if (filterOptionSelected === filterOptions.schoolBooks) {
      return "Search school books...";
    }
    if (filterOptionSelected === filterOptions.churchBooks) {
      return "Search church books...";
    }
    if (filterOptionSelected === filterOptions.department) {
      return "Search based on department...";
    }
    if (filterOptionSelected === filterOptions.faculty) {
      return "Search based on faculty...";
    }
  };

  const searchBasedOnFilterOption = (e) => {
    // console.log('e.target.value: ', e.target.value);
    // if (!e.target.value || e.target.value == '') {
    //   setFilteredPDFs(Books);
    // }

    // console.log(e.target.value);
    setFilteredPDFs(
      Books.filter((anyBook) => anyBook.title === e.target.value)
    );
  };

  useEffect(() => {
    if (filterOptionSelected === 1) {
      setFilteredPDFs(
        Books.filter((anyBook) => anyBook.category === "school_book")
      );
    }
    if (filterOptionSelected === 2) {
      setFilteredPDFs(
        Books.filter((anyBook) => anyBook.category === "church_book")
      );
    }
    if (
      filterOptionSelected === 3 ||
      filterOptionSelected === 4 ||
      filterOptionSelected === undefined
    ) {
      setFilteredPDFs(Books);
    }
  }, [filterOptionSelected]);

  return (
    <div className="available__pdfs">
      <div className="available__pdfs-heading">
        <h4>All available PDF's</h4>
        <div className="cta">
          <button
            onClick={() => setFilterDropdownIsVisible(!filterDropdownIsVisible)}
          >
            Filter <Filter />
          </button>
          {filterDropdownIsVisible && (
            <div className="cta__dropdown">
              <div className="filterArea">
                <p>Filter by:</p>
                <div className="filterContainer">
                  <span
                    onClick={() =>
                      setFilterOptionsIsVisible(!filterOptionsIsVisible)
                    }
                  >
                    {switchFilterName()}
                    {filterOptionsIsVisible ? (
                      <CaretUpIcon />
                    ) : (
                      <CaretDownIcon />
                    )}
                  </span>
                  {filterOptionsIsVisible && (
                    <div className="filterOptions">
                      <span
                        className="filterOption"
                        onClick={() => {
                          setFilterOptionSelected(filterOptions.schoolBooks);
                          setFilterOptionsIsVisible(false);
                        }}
                      >
                        School books
                      </span>
                      <span
                        className="filterOption"
                        onClick={() => {
                          setFilterOptionSelected(filterOptions.churchBooks);
                          setFilterOptionsIsVisible(false);
                        }}
                      >
                        Church books
                      </span>
                      <span
                        className="filterOption"
                        onClick={() => {
                          setFilterOptionSelected(filterOptions.faculty);
                          setFilterOptionsIsVisible(false);
                        }}
                      >
                        Faculty
                      </span>
                      <span
                        className="filterOption"
                        onClick={() => {
                          setFilterOptionSelected(filterOptions.department);
                          setFilterOptionsIsVisible(false);
                        }}
                      >
                        Department
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {filterOptionSelected && (
                <input
                  type="text"
                  placeholder={switchSerchPlaceholder()}
                  onChange={searchBasedOnFilterOption}
                />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="bookpdfs">
        {filteredPDFs.map(({ id, title, href, authorName, numOfPages }) => {
          return (
            <motion.div
              className="bookpdf"
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "linear" }}
            >
              <div className="bookpdf__left">
                <h4 className="title">{title}</h4>
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePdfs;
