// import { Books } from "../asssets/data";
import { Search } from "../asssets/icon";
import { motion } from "framer-motion";

const MainHeader = ({ query, setQuery }) => {
  // const [query, setQuery] = useState("");
  // console.log("This is the result typed: ", query);
  return (
    <div className="main__header">
      <motion.div
        className="search__box"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "linear" }}
      >
        <p>
          Start by searching for the course <br />
          PDF you want to download
        </p>
        <div className="inputField">
          <input
            placeholder="Search for All PDF. . ."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="search__icon">
            <Search />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainHeader;
