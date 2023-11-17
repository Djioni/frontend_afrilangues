import React, { useEffect, useState } from "react";
import "./TextZone.css";

export default function TextZone(
  {
    // TextZoneProgress,
    // TextZoneScrollBarChecker,
  }
) {
  const textZonedata = localStorage.getItem("textZone")
    ? JSON.parse(localStorage.getItem("textZone"))
    : [];

  // const [isScrolling, setIsScrolling] = useState(false);
  // const [hasScrollbar, setHasScrollbar] = useState(true);

  // const handleScroll1 = (event) => {
  //   const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;

  //   // Calculate and update the total scroll height
  //   const newTotalScroll = scrollHeight - clientHeight;
  //   TextZoneProgress(newTotalScroll, scrollTop);

  //   if (scrollHeight === clientHeight) {
  //     setHasScrollbar(false);
  //   } else {
  //     setHasScrollbar(true);
  //   }

  //   setIsScrolling(true);
  // };

  // useEffect(() => {
  //   const element = document.getElementById("scrolldevtextzone");
  //   if (element) {
  //     const hasScrollbar = element.scrollHeight > element.clientHeight;
  //     console.log("hasScrollbar", hasScrollbar);
  //     TextZoneScrollBarChecker(hasScrollbar);
  //   }
  // }, []);

  return (
    <div id="ex_text_zone" className="">
      <div id="scrolldevtextzone" className="container   ">
        {textZonedata.map((item, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: item.sentence }}
          ></div>
        ))}
      </div>
    </div>
  );
}
