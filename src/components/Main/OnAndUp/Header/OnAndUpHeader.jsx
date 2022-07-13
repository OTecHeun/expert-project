import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";
import { MdSearch } from "react-icons/md";
function OnAndUpHeader() {
  const [item, setItem] = useState([]);
  const itemData = "./db/mainItem.json";

  useEffect(() => {
    (async () => {
      const response = await fetch(itemData);
      const json = await response.json();
      setItem(json);
    })();
  });
  return (
    <div id="header">
      <NavLink className="logo" to={`/chemiverseOnUp`}>
        logo
      </NavLink>
      <div className="main-item">
        <ul className="gnb">
          {item.map((item) => (
            <li>
              <NavLink
                to={`/chemiverseOnUp/item/${item.address}`}
                key={item.id}
                state={{
                  id: item.id,
                  menu: item.menu,
                  dep: item.dep,
                  address: item.address,
                }}
              >
                {item.menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-item">
        <ul className="util">
          <li id="mypage">
            <NavLink to={`/chemiverseOnUp/mypage`}>마이페이지</NavLink>
          </li>
          <li id="login">
            <NavLink to={`/chemiverseOnUp/login`}>로그인</NavLink>
          </li>
          <li id="search">
            <MdSearch />
          </li>
          <li id="tab-btn">탭버튼</li>
        </ul>
      </div>
    </div>
  );
}

export default OnAndUpHeader;
