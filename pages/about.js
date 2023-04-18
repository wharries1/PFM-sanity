import { urlFor, client } from "../lib/client";
import React from "react";
import { video } from 'react';

const About = ({ about }) => {
  console.log(about);
  return (
    <div className="container ws-page-container2">
      <div className="row">
        <div className="ws-about-content col-sm-12">
          <div className="caption">
            <h3>{about[0].title}</h3>
          </div>
          <div class="ws-footer-separator"></div>
          <p>{about[0].content}</p>

          <div className="row text-center">
            <div className="ws-about">
              <div
                className="col-sm-6 ws-about-item"
                data-sr="wait 0.1s, ease-in 20px"
              >
                <img
                  src={urlFor(about && about[4].image)}
                  alt=""
                />
                <div className="caption">
                  <h3>{about[4].title}</h3>
                  <div className="ws-separator"></div>
                  <p>{about[4].content}</p>
                </div>
              </div>

              <div
                className="col-sm-6 ws-about-item"
                data-sr="wait 0.3s, ease-in 20px"
              >
                <img
                  src={urlFor(about && about[2].image)}
                  alt=""
                />
                <div className="caption">
                  <h3>{about[2].title}</h3>
                  <div className="ws-separator"></div>
                  <p>
                  {about[2].content}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="padding-top-x70"></div>

          <div className="row vertical-align">
            <div className="col-sm-9" data-sr="wait 0.1s, ease-in 20px">
              <div className="caption">
                <h3>{about[1].title}</h3>
              </div>
              <div className="ws-footer-separator"></div>
              <p>
              {about[1].content}
              </p>
              <div className="video-container">
              <video src="/videos/printing.mp4" controls />

              <video src="/videos/printing2.mp4" controls />

              </div>
            </div>

            <div className="col-sm-3"></div>
          </div>
          <div className="row vertical-align">
            <div className="col-sm-9" data-sr="wait 0.1s, ease-in 20px">
              <div className="caption">
                <h3>{about[3].title}</h3>
              </div>
              <div className="ws-footer-separator"></div>
              <p>
              {about[3].content}
              </p>
            </div>
          </div>
          <div className="padding-top-x70"></div>

          <div className="row text-center">
            <div className="ws-about">
              <div
                className="col-sm-6 ws-about-item"
                data-sr="wait 0.1s, ease-in 20px"
              >
                <img
                  src={urlFor(about && about[3].image)}
                  alt=""
                />
              </div>

              <div className="video-container">
              <video src="/videos/beach-clean.mp4" controls />
              </div>
              <div
                className="col-sm-6 ws-about-item"
                data-sr="wait 0.3s, ease-in 20px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "about"]';
  const about = await client.fetch(query);

  return {
    props: { about },
  };
};

export default About;
