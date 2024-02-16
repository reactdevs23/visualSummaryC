import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({ topHeader, header, data, lineColor }) => {
  return (
    <div
      className={`min-h-screen flex py-10 items-center flex-col	 justify-center w-full ${classes.mainWrapper}`}
      style={{ background: "var(--mainBg)", "--lineColor": lineColor }}
    >
      <div className={classes.topHeader}>
        <h5
          className={classes.subHeading}
          style={{ "--color": topHeader.subHeadingColor }}
        >
          {topHeader.heading}
        </h5>
        <h2
          className={classes.heading}
          style={{ "--color": topHeader.headingColor }}
        >
          {topHeader.heading}
        </h2>
      </div>
      <div className={classes.headerAndWrapper}>
        <div
          className={classes.header}
          style={{
            "--bg": header.background,
            "--border": header.border,
            "--boxShadow": header.boxShadow,
          }}
        >
          <div className={classes.icon}>{header.headingIcon}</div>
          <h2
            className={classes.heading}
            style={{ "--color": header.headingColor }}
          >
            {header.heading}
          </h2>
          <h4
            className={classes.subHeading}
            style={{ "--color": header.headingColor }}
          >
            {header.subHeading}
          </h4>
        </div>
        <div
          className={[classes.items, classes[`items${data.length}`]].join(" ")}
        >
          {data.map((item, id) => (
            <div className={classes.itemContainer} key={id}>
              {item.map((el, i) => (
                <div
                  key={i}
                  className={[classes.item, classes.idea].join(" ")}
                  style={{
                    "--border": el.border,
                    "--bg": el.background,
                  }}
                >
                  <div
                    className={classes.titleContainer}
                    style={{
                      "--border": el.titleContainer.border,
                      "--bg": el.titleContainer.background,
                      "--color": el.titleContainer.titleColor,
                      "--boxShadow": el.titleContainer.boxShadow,
                    }}
                  >
                    <h4 className={classes.title}>{el.titleContainer.title}</h4>
                  </div>
                  <div
                    className={classes.imgContainer}
                    style={{ "--border": el.middleBorder }}
                  >
                    <img src={el.img} alt="#" className={classes.img} />
                  </div>
                  <div className={classes.infoContainer}>
                    {el.info.map((text, i) => (
                      <div key={i} className={classes.info}>
                        <div className={classes.infoIcon}>{text.icon}</div>
                        <p
                          className={classes.text}
                          style={{ "--color": text.textColor }}
                        >
                          {text.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
