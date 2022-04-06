import { useState } from "react";
import Switch from "@material-ui/core/Switch";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import HistoryIcon from "@material-ui/icons/History";
import LockIcon from "@material-ui/icons/Lock";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css";

export const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const showDropDown = () => {
    if (dropdown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img
            className="microsoft-logo"
            src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
            alt=""
          />
          <a className="navbar-brand" href="#">
            Microsoft Bing
          </a>
          <button
            className="navbar-toggler"
            type="button"
           // data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
           // aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Images
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Translate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">...</a>
              </li>
            </ul>
          </div>
        <div className="navbar-right-container">
          <p>Sign In</p>
          <PersonIcon color="white" />

          
          <MenuIcon onClick={showDropDown}/>
          
          {dropdown ? (
            <div className="drop-down">
              <ul>
                <li>
                  <SettingsIcon color="action" />
                  <a className="text-color" href="">
                    setting
                  </a>
                </li>
                <li>
                  <LockIcon color="action" />
                  <a className="text-color" href="">
                    safeSearch
                  </a>
                </li>
                <li>
                  <HistoryIcon color="action" />
                  <a className="text-color" href="">
                    search History
                  </a>
                </li>
                <li>
                  <PersonIcon color="action" />
                  <a className="text-color" href="">
                    My Bing
                  </a>
                </li>
                <li>
                  <LockIcon color="action" />
                  <a className="text-color" href="">
                    Privacy
                  </a>
                </li>
                <li>
                  <FeedbackIcon color="action" />
                  <a className="text-color" href="">
                    Feedback
                  </a>
                </li>
                <li>
                  <HomeIcon color="action" />
                  <a className="text-color" href="">
                    Customize your homepage
                  </a>
                </li>
                <li>
                  <img src="" alt="" />
                  <a className="text-color" href="">
                    show MenuBar
                  </a>
                  <Switch
                   // checked={state.checkedB}
                    //onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </li>
                <li>
                  <img src="" alt="" />
                  <a className="text-color" href="">
                    show News and Interests
                  </a>
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </li>
                <li>
                  <img src="" alt="" />
                  <a className="text-color" href="">
                    show HomePage Image
                  </a>
                  <Switch
                   // checked={state.checkedB}
                   // onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        </div>
      </nav>
    </>
  );
};
