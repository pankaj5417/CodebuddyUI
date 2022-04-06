import { useState } from "react"
import "./Navbar.css"

export const Navbar=()=>{
    const [dropdown,setDropDown]=useState(false)

    const showDropDown=()=>{
        if(dropdown){
            setDropDown(false)
        }else{
            setDropDown(true)
        }

    }
    return (
        <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <img className="microsoft-logo" src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="" />
    <a className="navbar-brand" href="#">Microsoft Bing</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Images</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Videos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Translate</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">...</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="navbar-right-container">
  <p>Sign In</p>
  <img className="profile-img" src="https://w7.pngwing.com/pngs/410/591/png-transparent-computer-icons-user-profile-avatar-icon-artwork-user-symbol-thumbnail.png" alt="" />

  <img onClick={showDropDown} className="ham-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />
  {
      dropdown?(

  <div  className="drop-down">

  <ul>
      <li>
          <img className="general-img" src="https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png" alt="" />
          <a className="text-color" href="">setting</a>
      </li>
      <li>
          <img className="general-img" src="" alt="" />
          <a className="text-color" href="">safeSearch</a>
      </li><li>
          <img src="" alt="" />
          <a className="text-color" href="">search History</a>
      </li><li>
          <img src="" alt="" />
          <a className="text-color" href="">My Bing</a>
      </li><li>
          <img src="" alt="" />
          <a className="text-color" href="">Privacy</a>
      </li><li>
          <img src="" alt="" />
          <a className="text-color" href="">Feedback</a>
      </li><li>
          <img src="" alt="" />
          <a className="text-color" href="">Customize your homepage</a>
      </li><li>
          <img src="" alt="" />
          <a className="text-color" href="">show MenuBar</a>
      </li>
      <li>
          <img src="" alt="" />
          <a className="text-color" href="">show News and Interests</a>
      </li>
      <li>
          <img src="" alt="" />
          <a className="text-color" href="">show HomePage Image</a>
      </li>
      
  </ul>
  </div>
      ):null
  }
  </div>
</nav>
        </>
    )
}