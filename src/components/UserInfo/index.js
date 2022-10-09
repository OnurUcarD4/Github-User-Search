import React from "react";
import Moment from "react-moment";
import Utils from "utils";
import "./userinfo.scss";

const UserInfo = ({ userData, userRepo }) => {
  return (
    <div className="w-full flex flex-col  items-center">
      <div className="profile-page ">
        {" "}
        <div className="user-avatar">
          <img
            className="rounded-full w-48"
            src={userData.avatar_url}
            alt="profile"
          />
        </div>
        <div className="user-info items-start">
          <span className="font-semibold">
            {" "}
            <i className="fa-solid fa-arrow-right w-4"></i> Name:{" "}
            {userData.name ?? "Undefined"}
          </span>
          <span className="font-semibold">
            {" "}
            <i className="fa-sharp fa-solid fa-location-dot w-4"></i> Location:{" "}
            {userData.location ?? "Undefined"}
          </span>
          <span className="font-semibold">
            {" "}
            <i className="fa-regular fa-user w-4"></i> Followers:{" "}
            {userData.followers}
          </span>
          <span className="font-semibold">
            {" "}
            <i className="fa-solid fa-user w-4"></i> Following:{" "}
            {userData.following}
          </span>
          <span className="font-semibold">
            {" "}
            <i className="fa-solid fa-book w-4"></i> Repos:{" "}
            {userData.public_repos}
          </span>
          <span className="font-semibold">
            {" "}
            <i className="fa-regular fa-clock w-4"></i> Created At:{" "}
            <Moment format="MMM Do YY">{userData.created_at}</Moment>
          </span>
          <a className="hover:opacity-70 duration-300" href={userData.html_url}>
            <span className="font-semibold  ">
              {" "}
              <i className="fa-brands fa-github w-4"></i> GitHub Profile{" "}
            </span>
          </a>
        </div>
      </div>
      <div className="mt-10 border border-[#19212c] rounded-full w-1/2 p-4">
        <span>{userData.bio ?? "No Bio Text"}</span>
      </div>
      <div className="mt-4  px-4 border-[#19212c] border rounded-md p-4 mb-4 justify-center items-center w-5/6 ">
        <div className="grid grid-cols-3">
          {userRepo.map((e) => {
            return (
              <a
                className="border border-[#19212c] m-2 p-2 relative pb-8 hover:border-[#354863] duration-300"
                key={e.id}
                href={e.html_url}
              >
                <div className="flex flex-col ">
                  <span className="mr-3 font-semibold px-4">{e.name}</span>
                  <span className="mr-3 text-xs px-4">{e.description}</span>
                  <div className="mr-3 text-sm px-4 absolute bottom-1 -right-5 ">
                    {Utils.getLanguageIcon(e.language)}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
