import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 } from "uuid";
import AddPost from "./components/AddPost";
import Home from "./components/Home";

import "./App.css";

const App = () => {
  let setDataId;

  const [data, setData] = useState([]);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [selectStatus, setSelectStatus] = useState("");

  const [search, setSearch] = useState("");

  function onSubmit() {
    if (title && time && status) {
      data.push({ id: v4(), title, time, status });
      setLocalStorage();
      alert("Successfully🎉");
      document.querySelector(".form").reset()
    } else {
      alert("To'liq kiriting");
    }
  }

  function setLocalStorage() {
    localStorage.setItem("data", JSON.stringify(data));
  }

  function setId(id) {
    setDataId = id;
  }
  let draft = [];
  let publ = [];

  function CountData() {
    draft = data.filter((item, index) => {
      return item.status === "Draft";
    });
    publ = data.filter((item, index) => {
      return item.status === "Published";
    });
    
  }
  CountData()
  

  function changeStatus(e) {
    let changeStatus = e.target.value;

    let changeData;
    data.forEach((item, index) => {
      if (index === setDataId) {
        changeData = { ...item, status: changeStatus };
        return;
      }
    });
    CountData();
    data.splice(setDataId, 1, changeData);
    setLocalStorage();
  }

  useEffect(() => {
    setData(
      JSON.parse(localStorage.getItem("data"))
        ? JSON.parse(localStorage.getItem("data"))
        : []
    );
   
    
  }, [search]);

  function searchHandle(e) {
    setSearch(e.target.value);
  }

  function selectHandle(e) {
    setSelectStatus(e);
  }

  const filteredData = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectStatus ? item.status === selectStatus : true)
    );
  });

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={filteredData}
              changeStatus={changeStatus}
              setId={setId}
              searchHandle={searchHandle}
              selectHandle={selectHandle}
              selectStatus={selectStatus}
              draft={draft}
              publ={publ}
            />
          }
        />
        <Route
          path="/add"
          element={
            <AddPost
              setTitle={setTitle}
              title={title}
              time={time}
              status={status}
              setTime={setTime}
              setStatus={setStatus}
              onSubmit={onSubmit}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
