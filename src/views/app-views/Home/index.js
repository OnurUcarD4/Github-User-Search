import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import "./home.scss";
import UserInfo from "components/UserInfo";
import { setUser, setUserRepo } from "redux/slices/user";

const Home = () => {
  useEffect(() => {
    dispatch(setUser({}));
    dispatch(setUserRepo([]));
  }, []);

  const selector = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  console.log(selector);

  return (
    <div className="home-main">
      {_.isEmpty(selector.userData) ? (
        <div className="no-profile-page ">
          {" "}
          <div className="  flex h-max justify-center items-center">
            <img
              className="w-48 h-48 "
              src="https://i.imgur.com/hoA73bc.png"
              alt="no profile"
            />{" "}
            <span className="">There is no profile :/</span>
          </div>
        </div>
      ) : (
        <UserInfo userData={selector.userData} userRepo={selector.userRepo} />
      )}
    </div>
  );
};

export default Home;
