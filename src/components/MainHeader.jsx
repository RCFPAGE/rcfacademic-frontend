import { Books } from "../asssets/data";
import { Search } from "../asssets/icon";

const MainHeader = ({ query, setQuery }) => {
  // const [query, setQuery] = useState("");
  // console.log("This is the result typed: ", query);
  return (
    <div className="main__header">
      <div className="search__box">
        <p>
          Start by searching for the course <br />
          PDF you want to download
        </p>
        <div className="inputField">
          <input
            placeholder="Search for PDF. . ."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="search__icon">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
