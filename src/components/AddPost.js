import React from "react";
import Logo from "../img/logo (3) 1.png";
import Swatch from "../img/color-swatch.png";
import { Link } from "react-router-dom";
import leftIcon from "../img/Button.png";

function AddPost({
  setTitle,
  setStatus,
  setTime,
  onSubmit,
  title,
  time,
  status,
}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-2 border">
          <div className="col-2">
            <Link to="/" className="nav-link">
              <img src={Logo} alt="" width="88" />
            </Link>
          </div>
          <div className="col-10 d-flex align-items-center">
            <Link to="/">
              <img src={leftIcon} alt="" />
            </Link>
            <h4 className="ms-2">New Post</h4>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light ">
        <div className="row">
          <div className="col-2 bg-white">
            <button className="btn btn-light d-flex mt-3 form-control">
              <img src={Swatch} alt="post" className="img-fluid" />
              <h4 className="ms-3">Posts</h4>
            </button>
          </div>
          <div className="col-10 py-1 px-3">
            <div className="bg-white rounded p-2 section__page">
              <div className="row mt-3">
                <div className="col-12 ">
                  <div className="row">
                    <div className="col-4 ms-2">
                      <form className="form">
                        <h4>Post Information</h4>
                        <input
                          type="text"
                          className="form-control mt-2 bg-light"
                          placeholder="Title"
                          required
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                        <select
                          name="status"
                          id=""
                          className="form-select mt-2 bg-light"
                          placeholder="Status"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option >Tanlang</option>
                          <option value="Draft">Draft</option>
                          <option value="Published">Published</option>
                        </select>
                        <input
                          type="date"
                          className="form-control mt-2 bg-light"
                          name="time"
                          id=""
                          required
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-primary mt-4 px-5"
                          onClick={onSubmit}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
