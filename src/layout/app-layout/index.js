import Header from "components/Header";
import SearchPanel from "components/SearchPanel";
import React from "react";
import AppViews from "views/app-views";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SearchPanel />
        <div className="w-full">
          <AppViews />
        </div>{" "}
      </div>
    </div>
  );
};

export default AppLayout;
