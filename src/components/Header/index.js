import React, { useState } from "react";
import { Button, Dropdown, Menu, Space } from "antd";
import "./header.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, setUserRepo } from "redux/slices/user";
import { Link } from "react-router-dom";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            About Me
          </a>
        ),
      },
    ]}
  />
);
const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const getUserData = (e) => {
    axios
      .get(`https://api.github.com/users/${value}`)
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => dispatch(setUser({})));

    axios
      .get(`https://api.github.com/users/${value}/repos`)
      .then((res) => {
        dispatch(setUserRepo(res.data));
      })
      .catch((err) => dispatch(setUserRepo([])));
  };
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      getUserData();
    }
  };
  return (
    <div className="header">
      <div className="nav-menu">
        <Link to="/">
          <div className="logo">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github v-align-middle"
            >
              <path
                id="github-svg"
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </div>
        </Link>
        <div className="search-bar">
          <input
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDownHandler}
            placeholder="Search or jump to..."
            className="search-input"
            type="text"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            aria-hidden="true"
            className="mr-1 header-search-key-slash absolute"
          >
            <path
              fill="none"
              stroke="#979A9C"
              opacity=".4"
              d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
            ></path>
            <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
          </svg>
        </div>
        <div className="nav-items gap-4 flex">
          <a target="_blank" href="https://nikeclone-onurucar.netlify.app">
            Nike Clone
          </a>
          <a target="_blank" href="https://login-panel-redux.netlify.app">
            Login Panel Redux
          </a>
          <a target="_blank" href="https://onurucard4.netlify.app">
            My Bio
          </a>
          <a target="_blank" href="http://dentoperantalya.com">
            Dentoper Antalya
          </a>
        </div>
        <div className="mobile-about">
          <Link to="/about-me">About Me</Link>
        </div>
      </div>
      <Link to="/about-me">
        <Dropdown
          overlayClassName="ant-dropdown-menu-dark"
          className="hover:opacity-70 cursor-pointer"
          overlay={menu}
          placement="bottomLeft"
        >
          <div className="about-me-header">
            <img
              src="https://avatars.githubusercontent.com/u/87551836?s=40&amp;v=4"
              alt="@OnurUcarD4"
              size="24"
              height="24"
              width="24"
              data-view-component="true"
              className="rounded-full"
            ></img>
            <span className="dropdown-caret"></span>
          </div>
        </Dropdown>
      </Link>
    </div>
  );
};

export default Header;
