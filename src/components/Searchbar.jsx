import "./Search.css";
import { Search } from "@material-ui/icons";
export const Searchbar = () => {
  return (
    <>
      <div className="searchbar-container">
        <input type="search" name="" id="searchbar" />
        <div className="search-logo-container">
          <img
            className="search-voice-logo"
            src="https://www.pikpng.com/pngl/m/54-546097_circle-icons-mic-voice-search-icon-png-clipart.png"
            alt=""
          />

          <img
            className="searchLogo"
            src="https://r.bing.com/rp/s2tlPUrMzBwZzzDmnv24-pPhALs.svg"
            alt=""
          />
          <Search color="primary" className="search-logo" />
        </div>
      </div>
    </>
  );
};
