import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="userprofile">
      <div>
        <div>
          <div className="imgdiv">img</div>
          <h2 align="center">UserName</h2>
          <div className="detail">
            <div
              onClick={() => {
                navigate("/home/profile");
              }}
            >
              Details
            </div>
            <div
              onClick={() => {
                navigate("/home/profile/themes");
              }}
            >
              Themes
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
