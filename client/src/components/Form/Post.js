import React from "react";
import './post.css'

const Post = () => {
  return (
    <div className="pt-5">
      <div className="heading pb-3">
      <h5 className="text-center ">Creating A Memory</h5>
      </div>
      <form>
      <div className="input__form">
      <div className="form-row">
          {/* Creator */}

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Creator"
            />
          </div>

          {/* tittle */}
          <div className="form-group pt-3">
            <input
            type="text"
              className="form-control"
              placeholder="Title"
            />
          </div>
        </div>

        {/* Message */}

        <div className="form-group pt-3">
          <input
            type="text"
            className="form-control message-input"
            placeholder="Message"
          />
        </div>
        {/* Tags (Comma Seperated) */}


        <div className="form-group pt-3">
          <input
            type="text"
            className="form-control "
            placeholder="Tags (Comma Seperated) "
          />
        </div>

        <div className="form-group pt-3">
          <input
            type="file"
            className="form-control "
          />
        </div>

        <div className="pt-3">
          <button type="submit" className="btn signin btn-primary">
            Sign in
          </button>
        </div>
        <div className="pt-3">
        <button type="submit" className="btn signin btn-danger">
            Sign Up
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Post;
