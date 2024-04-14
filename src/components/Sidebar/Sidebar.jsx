import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Sidebar = () => {
  const [sidebarExtended, setSidebarExtended] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img
            className="menu"
            src={assets.menu_icon}
            alt="MenuIcon"
            onClick={() => setSidebarExtended((previous) => !previous)}
          />
          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {sidebarExtended ? <p>New Chat</p> : null}
          </div>
          {sidebarExtended ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              <div className="recent-entry">
                <img src={assets.message_icon} alt="MessageIcon" />
                <p>What is react...</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="QuestionIcon" />
            {sidebarExtended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="HistoryIcon" />
            {sidebarExtended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="SettingIcon" />
            {sidebarExtended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
