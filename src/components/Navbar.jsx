import { useState } from "react";
import Switch from "@material-ui/core/Switch";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import HistoryIcon from "@material-ui/icons/History";
import LockIcon from "@material-ui/icons/Lock";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import { ListItem, makeStyles } from "@material-ui/core";
import "./Navbar.css";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [opens,setOpens]=useState(true)

  const handleClick = () => {
    setOpen(!open);
  };
  const handleSecondClick = () => {
    setOpens(!opens);
  };
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
            <div className="microsoft-brand">
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
           data-bs-toggle="collapse"
           data-bs-target="#navbarNav"
           aria-controls="navbarNav"
           aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={{width:"300px",display:"flex"}} className=" " id="navbarNav">
            <ul style={{width:"300px",display:"flex",flexDirection:"row"}} className="navbar-nav">
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
          </div>
          <div className="navbar-right-container">
              <div className="sign-in-button">
            <p style={{width:"90px"}}>Sign in</p>
            <PersonIcon color="white" />

              </div>

            <MenuIcon onClick={showDropDown} />

            {dropdown ? (
              <div className="drop-down">
                <ul>
                  <li>
                    <List>
                      <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                          <SettingsIcon color="action" />
                        </ListItemIcon>
                        <ListItemText secondary="Setting" />
                        {open ? (
                          <ExpandLess color="action" />
                        ) : (
                          <ExpandMore color="action" />
                        )}
                      </ListItem>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItem button className={classes.nested}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText secondary="Language" />
                          </ListItem>
                          <ListItem button className={classes.nested}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText secondary="English" />
                          </ListItem>
                          <ListItem button className={classes.nested}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText secondary="Country/Region" />
                          </ListItem>
                          <ListItem button className={classes.nested}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText secondary="India" />
                          </ListItem>
                          <ListItem button className={classes.nested}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText secondary="Location" />
                          </ListItem>
                          <ListItem button className={classes.nested}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText secondary="Voice Search" />
                          </ListItem>
                          <ListItem button className={classes.nested}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText secondary="More" />
                          </ListItem>
                        </List>
                      </Collapse>
                    </List>
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
                
                     

                     
                      
                    <ListItem button onClick={handleSecondClick}>
                        <ListItemIcon>
                    <HomeIcon color="action" />
                        </ListItemIcon>
                        <ListItemText secondary="Customize your homepage" />
                        {opens ? (
                          <ExpandLess color="action" />
                        ) : (
                          <ExpandMore color="action" />
                        )}
                      </ListItem>
                      <Collapse in={opens} timeout="auto" unmountOnExit>
                    
                  <li>
                    <img src="" alt="" />
                    <a className="text-color" href="">
                      show MenuBar
                    </a>
                    <Switch
                      checked={state.checkedB}
                      //onChange={handleChange}
                      color="primary"
                      name="checkedB"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                  </li>
                  <li>
                    <img src="" alt="" />
                    <a className="text-color" href="">
                      show News and Interests
                    </a>
                    <Switch
                       checked={state.checkedB}
                      // onChange={handleChange}
                      color="primary"
                      name="checkedB"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </li>
                  <li>
                    <img src="" alt="" />
                    <a className="text-color" href="">
                      show HomePage Image
                    </a>
                    <Switch
                       checked={state.checkedB}
                       // onChange={handleChange}
                       color="primary"
                       name="checkedB"
                       inputProps={{ "aria-label": "secondary checkbox" }}
                       />
                  </li>
                  </Collapse>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
};
