import React, { useEffect, useState } from "react";
import "./adspage.style.css";
import { IoClose } from "react-icons/io5";
import { BsSendCheckFill } from "react-icons/bs";
import cover from "../../assets/ads/cover.png";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { API_URL } from "../../api";
import ReactPlayer from "react-player";
import URLParse from "url-parse";
import AdsVideoPlayer from "./AdsVideoPlayer";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";

export default function AdsPage({ adsInfo ,setIsAdsPage}) {
  const [isClose, setIsClose] = useState(false);
  const currentads = localStorage.getItem("currentads");
  const [totalSeconds, setTotalSeconds] = useState(5);
  const [videoRemaining, setVideoRemaining] = useState(20);
  function GetURLHostName(url) {
    if (url) {
      if (!url.includes("://")) {
        url = `http://${url}`;
        console.log(url);
        const parsedUrl = new URLParse(url);
        if (parsedUrl.hostname.startsWith("www.")) {
          return parsedUrl.hostname.substring(4);
        } else return parsedUrl.hostname;
      }

      if (url.includes("://")) {
        const parsedUrl = new URLParse(url);
        if (parsedUrl.hostname.startsWith("www.")) {
          return parsedUrl.hostname.substring(4);
        } else {
          return parsedUrl.hostname;
        }
      }
    }
  }

  const [currentAds, setCurrentAds] = useState(null);
  const [activeAd, setActiveAd] = useState(null);
  useEffect(() => {
    if (currentads) {
      const ads = JSON.parse(currentads);
      setCurrentAds(JSON.parse(currentads));
      setActiveAd(ads);
    } else {
      localStorage.setItem(
        "currentads",
        JSON.stringify({ current: 1, total: adsInfo.length })
      );
      setActiveAd({ current: 1, total: adsInfo.length });
    }
  }, []);

  const handleClose = () => {
    if (activeAd.current < adsInfo.length) {
      localStorage.setItem(
        "currentads",
        JSON.stringify({ current: activeAd.current + 1, total: adsInfo.length })

      );

      setIsAdsPage(false)
    } else {
      localStorage.setItem(
        "currentads",
        JSON.stringify({ current: 1, total: adsInfo.length })
      );
    }
    setIsClose(true);
    setIsAdsPage(false)
  };
  console.log(
    "current url:",
    GetURLHostName(adsInfo[activeAd?.current - 1]?.link)
  );
  // second counter

  const currentVideoDuration = (value) => {
    setVideoRemaining(Math.floor(value));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (totalSeconds > 0) {
        setTotalSeconds(totalSeconds - 1);
      } else {
        clearInterval(intervalId);
        console.log("Countdown finished!");
      }
    }, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [totalSeconds]); // Dependency array ensures effect runs only on totalSeconds change

  return (
    <div id={`newsl1`} className={`${isClose && "d-none"}`}>
      <div className="newl-card ">
        <div className="box w-100 ">
          <div className="ads_header">
            <div>
              <h4 className="title ">PUB</h4>
            </div>
            <div>
              {adsInfo[activeAd?.current - 1]?.exerciseMedia[0]?.type ===
                "image/jpeg" ||
              adsInfo[activeAd?.current - 1]?.exerciseMedia[0]?.type ===
                "image/jpg" ||
              adsInfo[activeAd?.current - 1]?.exerciseMedia[0]?.type ===
                "image/png" ? (
                <div>
                  {totalSeconds > 0 ? (
                    <p className="title">
                      Temps restant :{" "}
                      {totalSeconds ? totalSeconds : totalSeconds} secondes
                    </p>
                  ) : (
                    <IoMdClose onClick={handleClose} className="close" />
                  )}
                </div>
              ) : (
                <div>
                  {videoRemaining > 0 ? (
                    <p className="title">
                      Temps restant :{" "}
                      {videoRemaining
                        ? videoRemaining.toFixed(2)
                        : totalSeconds}{" "}
                      secondes
                    </p>
                  ) : (
                    <IoMdClose onClick={handleClose} className="close" />
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="ads_container">
            <a href={adsInfo[activeAd?.current - 1]?.link} target="_blank">
              <div>
                {adsInfo[activeAd?.current - 1]?.exerciseMedia[0]?.type ===
                  "image/jpeg" ||
                adsInfo[activeAd?.current - 1]?.exerciseMedia[0]?.type ===
                  "image/jpg" ||
                adsInfo[activeAd?.current - 1]?.exerciseMedia[0]?.type ===
                  "image/png" ? (
                  <img
                    className="banner"
                    style={{ width: "100%" }}
                    src={`${API_URL}/mediaObject/download/${
                      adsInfo[activeAd?.current - 1]?.exerciseMedia[0]?.media
                    }`}
                    alt=""
                  />
                ) : (
                  <AdsVideoPlayer
                    src={`${API_URL}/mediaObject/download/${
                      adsInfo[activeAd?.current - 1]?.exerciseMedia[0]?.media
                    }`}
                    currentVideoDuration={currentVideoDuration}
                  />
                )}

                {/* <video
                src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4`}
                className="w-full"
                autoPlay
                muted={isClose} // Ensure the video is not muted
                controls
                style={{ height: "200px" }}
                onEnded={() => {
                  console.log("Video ended.");
                }}
                onError={(e) => {
                  console.error(
                    "Error occurred while loading the video:",
                    e.target.error
                  );
                }}
              /> */}
              </div>
            </a>
            <div className="ads_body">
              <div>
                <a
                  className="ads_body_link"
                  target="_blank"
                  href={adsInfo[activeAd?.current - 1]?.link}
                >
                  <div>
                    <h4 className="title text-center">
                      {adsInfo[activeAd?.current - 1]?.title}
                    </h4>
                  </div>
                  <div>
                    <h4 className="dsc">
                      {adsInfo[activeAd?.current - 1]?.description}
                    </h4>
                  </div>
                </a>
              </div>
              <div className="action">
                <a target="_blank" href={adsInfo[activeAd?.current - 1]?.link}>
                  <div className="d-block">
                    <h4 className="name d-block">
                      {GetURLHostName(adsInfo[activeAd?.current - 1]?.link)}
                    </h4>
                  </div>
                  <div className="d-block">
                    {adsInfo[activeAd?.current - 1]?.link && (
                      <a
                        href={adsInfo[activeAd?.current - 1]?.link}
                        target="_blank"
                      >
                        Découvrir <IoIosArrowForward className="arrow" />
                      </a>
                    )}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
