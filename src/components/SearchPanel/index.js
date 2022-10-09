import React, { useEffect, useState } from "react";
import Searchbar from "../Searchbar";
import "./searchpanel.scss";
import axios from "axios";
import { setUser, setUserRepo } from "redux/slices/user";
import { useDispatch, useSelector } from "react-redux";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.userSlice.inputValue);
  const getUserData = () => {
    axios
      .get(`https://api.github.com/users/${inputValue}`)
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => dispatch(setUser({})));

    axios
      .get(`https://api.github.com/users/${inputValue}/repos`)
      .then((res) => {
        dispatch(setUserRepo(res.data));
      })
      .catch((err) => dispatch(setUserRepo([])));
  };
  return (
    <div className="search-panel">
      <div className="search-panel-content">
        <span className="search-panel-head-text">Find A User</span>
        <Searchbar getUserData={getUserData} placeholder="Search Users..." />
        <div className="flex justify-end">
          <button onClick={() => getUserData()} className="search-panel-button">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i> Search
          </button>
        </div>
        <hr className="mt-12 opacity-20" />
        <span className="credits-head-text">Github API</span>
        <span className="credits-description">
          This service made by{" "}
          <a
            className="underline"
            target="_blank"
            href="https://www.github.com/OnurUcarD4"
          >
            Onur Ucar
          </a>
          . Using Github Users API.
          <br />
          Here is{" "}
          <a
            className="underline"
            target="_blank"
            href="https://docs.github.com/en/rest/users"
          >
            API docs.
          </a>
        </span>
      </div>
    </div>
  );
};

export default SearchPanel;
