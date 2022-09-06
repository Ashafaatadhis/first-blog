import React from "react";
import { BsUpload } from "react-icons/bs";
import "./admin.css";

const Admin = () => {
  //   const handleArticle = (e) => {
  //     let kata = e.target.value;
  //     let cols = e.target.cols;
  //     let rows = 0;
  //     let result = kata.split("\n");
  //     result.forEach((l) => {
  //       rows += Math.ceil(l.length / cols);
  //     });
  //     e.target.rows = rows;
  //   };

  const handleFilePreview = (e) => {
    const [file] = e.target.files;
    if (file) {
      document.getElementById("admin-img").style.backgroundImage = `url(${URL.createObjectURL(file)})`;
      document.getElementById("admin-img").style.objectFit = "cover";
      document.getElementById("admin-img").style.backgroundPosition = "50% 50%";
    }
  };

  const handlerUploadImage = (e) => {
    // console.log(document.getElementById("article").value);
    console.log(e.target.files);
    document.getElementById("article").value += "!konsole";
  };

  return (
    <section className="admin">
      <div className="admin-jumbotron">
        <div className="container">
          <div className="admin-back">
            <a href="/">Back To Home</a>
          </div>
          <textarea className="admin-title" placeholder="title..." />
          <div className="admin-img" id="admin-img">
            {/* <img src="https://placeimg.com/100/500/any" alt="" /> */}
            <div className="img-upload">
              <input type="file" accept="img/*" onChange={handleFilePreview} hidden id="banner-upload" />
              <label htmlFor="banner-upload">
                <BsUpload />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-ini-article">
        <div className="container">
          <div className="admin-article">
            <textarea className="article" id="article" placeholder="article..." rows={20} />
            <input type="file" id="img-article" accept="image/*" hidden onChange={handlerUploadImage} />
            <button className="img-article">
              <label htmlFor="img-article">Upload image</label>
            </button>
            <button className="upload-article">Upload article</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
