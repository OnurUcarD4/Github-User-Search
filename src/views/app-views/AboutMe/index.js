import axios from "axios";
import UserInfo from "components/UserInfo";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import user, { setUser, setUserRepo, userSlice } from "redux/slices/user";
import "./aboutme.scss";

const AboutMe = () => {
  const selector = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/OnurUcarD4`)
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => dispatch(setUser({})));

    axios
      .get(`https://api.github.com/users/OnurUcarD4/repos`)
      .then((res) => {
        dispatch(setUserRepo(res.data));
      })
      .catch((err) => dispatch(setUserRepo([])));
  }, []);

  return (
    <div className="about-me">
      <UserInfo userData={selector.userData} userRepo={selector.userRepo} />
    </div>
  );
};

export default AboutMe;
