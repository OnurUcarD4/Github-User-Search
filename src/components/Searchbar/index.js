import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "redux/slices/user";
import "./searchbar.scss";

const Searchbar = ({ placeholder, getUserData }) => {
  const inputValue = useSelector((state) => state.userSlice.inputValue);
  const dispatch = useDispatch();
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      getUserData();
    }
  };
  return (
    <input
      onChange={(e) => dispatch(setInputValue(e.target.value))}
      onKeyDown={onKeyDownHandler}
      value={inputValue}
      placeholder={placeholder}
      className="search-input"
      type="text"
    />
  );
};

export default Searchbar;
