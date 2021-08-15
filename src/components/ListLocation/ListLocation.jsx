import React from "react";

import "./ListLocation.scss";
function ListLocation() {
  const dataLocation = [
    "Hồ Chí Minh",
    "Tây Ninh",
    "Bình Phước",
    "Hải Phòng",
    "Đà Nẵng",
    "Biên Hòa",
    "Nha Trang",
    "Vũng Tàu",
    "Cần Thơ",
    "Huế",
    "Long Xuyên",
  ];
  const renderLi = () => {
    return dataLocation.map((location, index) => {
      return (
        <li
          key={index}
          className="item__location"
          onClick={(e) => handleSelectLocation(e)}
        >
          {location}
        </li>
      );
    });
  };

  const handleSelectLocation = (e) => {
    const { innerHTML } = e.target;
    // console.log("name: ", innerHTML);
    const newLocation = innerHTML;
    document.getElementsByClassName("currentLocation")[0].innerHTML =
      newLocation;
  };
  const handleShowUpListLocation = () => {};
  return (
    <>
      <div
        className="containerLogin"
        onClick={() => handleShowUpListLocation()}
      >
        <span>Địa điểm: </span>
        <span class="currentLocation">Hồ Chí Minh</span>
        <ul className="list-location" id="list-location">
          {renderLi()}
        </ul>
      </div>
    </>
  );
}

export default ListLocation;
