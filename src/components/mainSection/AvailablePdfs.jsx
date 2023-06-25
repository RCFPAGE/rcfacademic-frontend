import React, { useEffect, useRef, useState } from "react";
import {
  CaretDownIcon,
  CaretUpIcon,
  Download,
  Eye,
  Filter,
} from "../../asssets/icon";
import { Books } from "../../asssets/data";
import { motion } from "framer-motion";
import useOuterClick from "../Custom/useOuterClick";

const AvailablePdfs = ({ query, setQuery }) => {
  // State for filtered PDFs
  const [filteredPDFs, setFilteredPDFs] = useState([]);
  const [filteredParentPDFs, setFilteredParentPDFs] = useState([]);
  const [sortedBooks, setSortedBooks] = useState([]);
  const [filterDropdownIsVisible, setFilterDropdownIsVisible] = useState(false);
  const [filterOptionsIsVisible, setFilterOptionsIsVisible] = useState(false);
  const [filterOptionSelected, setFilterOptionSelected] = useState(undefined);

  useEffect(() => {
    setFilteredPDFs(
      Books.filter(({ title }) => {
        return title.toLowerCase().includes(query.toLowerCase());
      })
    );
  }, [query]);

  useEffect(() => {
    setSortedBooks(
      filteredPDFs.sort((a, b) => a.department.localeCompare(b.department))
    );
  }, [filteredPDFs]);

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
    if (filterOptionSelected === 3) {
      const filteredPdf = filteredParentPDFs.filter(({ faculty }) => {
        return faculty.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setFilteredPDFs(filteredPdf);
    } else if (filterOptionSelected === 4) {
      const filteredPdf = filteredParentPDFs.filter(({ department }) => {
        return department.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setFilteredPDFs(filteredPdf);
    } else {
      const filteredPdf = filteredParentPDFs.filter(({ title }) => {
        return title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setFilteredPDFs(filteredPdf);
    }
  };

  useEffect(() => {
    if (filterOptionSelected === 1) {
      setFilteredPDFs(
        Books.filter((anyBook) => anyBook.category === "school_book")
      );
      setFilteredParentPDFs(
        Books.filter((anyBook) => anyBook.category === "school_book")
      );
    }
    if (filterOptionSelected === 2) {
      setFilteredPDFs(
        Books.filter((anyBook) => anyBook.category === "church_book")
      );
      setFilteredParentPDFs(
        Books.filter((anyBook) => anyBook.category === "church_book")
      );
    }
    if (filterOptionSelected === 3) {
      setFilteredPDFs(
        Books.filter((anyBook) => anyBook.category !== "church_book")
      );
      setFilteredParentPDFs(
        Books.filter((anyBook) => anyBook.category !== "church_book")
      );
    }
    if (filterOptionSelected === 4) {
      setFilteredPDFs(
        Books.filter((anyBook) => anyBook.category !== "church_book")
      );
      setFilteredParentPDFs(
        Books.filter((anyBook) => anyBook.category !== "church_book")
      );
    }
    if (filterOptionSelected === undefined) {
      setFilteredPDFs(Books);
      setFilteredParentPDFs(Books);
    }
  }, [filterOptionSelected]);

  const filterRef = useRef(null);

  useOuterClick(filterRef, setFilterDropdownIsVisible);

  return (
    <div className="available__pdfs">
      <div className="available__pdfs-heading">
        <h4>All available PDF's</h4>
        <div className="cta" ref={filterRef}>
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
        {sortedBooks.length === 0 && (
          <div className="errorContainer">
            <svg
              width="111"
              height="112"
              viewBox="0 0 111 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_891_2550)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M84.3908 76.3958C91.7688 66.8839 95.2459 54.9185 94.1149 42.9339C92.9838 30.9492 87.3295 19.8456 78.3023 11.882C69.275 3.91831 57.553 -0.307174 45.5209 0.0651507C33.4887 0.437475 22.0504 5.37964 13.5328 13.8862C5.0078 22.3987 0.0494798 33.8415 -0.331742 45.8827C-0.712964 57.924 3.51161 69.6575 11.4811 78.6922C19.4505 87.7269 30.5651 93.3827 42.5598 94.5072C54.5545 95.6317 66.5266 92.1402 76.0365 84.7442L76.2909 85.0105L101.389 110.115C101.939 110.665 102.592 111.101 103.31 111.398C104.028 111.696 104.798 111.849 105.575 111.849C106.353 111.849 107.123 111.696 107.841 111.398C108.559 111.101 109.212 110.665 109.761 110.115C110.311 109.565 110.747 108.913 111.045 108.194C111.342 107.476 111.495 106.706 111.495 105.929C111.495 105.151 111.342 104.382 111.045 103.663C110.747 102.945 110.311 102.293 109.761 101.743L84.657 76.6443C84.5706 76.559 84.4818 76.4762 84.3908 76.3958ZM72.1078 22.2583C75.4484 25.5449 78.1051 29.4603 79.9249 33.7788C81.7447 38.0973 82.6914 42.7334 82.7105 47.4196C82.7296 52.1058 81.8206 56.7495 80.0361 61.0826C78.2515 65.4158 75.6267 69.3528 72.313 72.6665C68.9994 75.9801 65.0624 78.605 60.7292 80.3895C56.396 82.174 51.7524 83.083 47.0662 83.0639C42.38 83.0448 37.7439 82.0981 33.4254 80.2783C29.1069 78.4585 25.1915 75.8018 21.9049 72.4612C15.3369 65.7854 11.6729 56.7847 11.7111 47.4196C11.7492 38.0546 15.4863 29.084 22.1085 22.4619C28.7306 15.8398 37.7012 12.1026 47.0662 12.0645C56.4312 12.0263 65.432 15.6903 72.1078 22.2583Z"
                  fill="#29176A"
                />
                <path
                  d="M31.1927 26.4795L31.1928 26.4795L31.187 26.4739C30.5571 25.8656 29.7135 25.5289 28.8378 25.5365C27.9621 25.5441 27.1245 25.8954 26.5052 26.5146C25.886 27.1338 25.5348 27.9715 25.5272 28.8472C25.5196 29.7228 25.8562 30.5665 26.4646 31.1964L26.4645 31.1964L26.4702 31.2021L42.7713 47.5032L26.47 63.8017C26.1524 64.1092 25.899 64.4767 25.7245 64.8828C25.5495 65.2903 25.4574 65.7285 25.4535 66.172C25.4497 66.6155 25.5342 67.0552 25.7021 67.4657C25.87 67.8761 26.118 68.249 26.4316 68.5626C26.7452 68.8762 27.1181 69.1242 27.5285 69.2921C27.939 69.46 28.3787 69.5445 28.8222 69.5407C29.2657 69.5368 29.7039 69.4447 30.1114 69.2696C30.5176 69.0952 30.8851 68.8418 31.1926 68.5242L47.4938 52.2257L63.795 68.5269L63.795 68.527L63.8007 68.5325C64.4306 69.1409 65.2742 69.4775 66.1499 69.4699C67.0256 69.4623 67.8632 69.1111 68.4825 68.4918C69.1017 67.8726 69.4529 67.035 69.4605 66.1593C69.4681 65.2836 69.1315 64.44 68.5231 63.8101L68.5232 63.81L68.5175 63.8044L52.2164 47.5032L68.5175 31.2021L68.5176 31.2021L68.5231 31.1964C69.1315 30.5665 69.4681 29.7228 69.4605 28.8472C69.4529 27.9715 69.1017 27.1338 68.4825 26.5146C67.8632 25.8954 67.0256 25.5441 66.1499 25.5365C65.2742 25.5289 64.4306 25.8656 63.8007 26.4739L63.8007 26.4739L63.795 26.4795L47.4939 42.7807L31.1927 26.4795Z"
                  fill="#0EACE7"
                  stroke="#0EACE7"
                  stroke-width="0.921317"
                />
              </g>
              <defs>
                <clipPath id="clip0_891_2550">
                  <rect width="111" height="112" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2>Result Not Found</h2>
            <p>Oops... this information could not be found at the moment.</p>
            <button onClick={() => setFilteredPDFs(Books)}>See all PDFs</button>
            {/* <p>Hey, the PDF is currently unavailable</p> */}
          </div>
        )}
        {sortedBooks.map(
          ({ id, title, href, faculty, numOfPages, department }) => {
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
                    <h6>{faculty + " | " + department}</h6>
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
          }
        )}
      </div>
    </div>
  );
};

export default AvailablePdfs;
