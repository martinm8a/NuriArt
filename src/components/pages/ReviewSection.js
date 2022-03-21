import React from "react";
// import {Button} from "./Button.js";
// import {Link} from "react-router-dom";
import "./ReviewSection.css";
import {useTranslation} from "react-i18next"

function ReviewSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  const [t, i18n] = useTranslation("data");

  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{headline}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {topLine}{" "}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark "
                  }
                >
                  {description}
                </p>
                {/* <Link to="/sign-up">
                  <Button buttonSize="btn-wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewSection;
