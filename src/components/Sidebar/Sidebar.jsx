import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img className="menu" src={assets.menu_icon} alt="MenuIcon" />
          <div className="new-chat">
            <img src={assets.plus_icon} alt="PlusIcon" />
            <p>New Chat</p>
          </div>
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="MessageIcon" />
              <p>What is react...</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="QuestionIcon" />
            <p>Help</p>
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="HistoryIcon" />
            <p>Activity</p>
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="SettingIcon" />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
