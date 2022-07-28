import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AboutMeDetail from "./AboutMeDetail";
import TableSearchBarTwo from "./TableSearchBarTwo";
const AboutMeTableList = ({
  posts,
  totalPosts,
  content,
  setContent,
  copyPosts,
  setPosts,
}) => {
  const [viewCount, setViewCount] = useState(0);
  const [index, setIndex] = useState();
  const likeValue = useSelector((state) => state.item.data);
  function onClick(index) {
    setContent(false);
    setIndex(index);
    setViewCount((num) => (num += 1));
  }
  return (
    <>
      {content ? (
        <div className="aboutMe_table_area">
          <TableSearchBarTwo
            posts={posts}
            copyPosts={copyPosts}
            setPosts={setPosts}
          />
          <span>
            총<span className="total"> {totalPosts}</span>건
          </span>
          <table className="aboutMe_table">
            <thead>
              <tr>
                <th>NO</th>
                <th>WRITER</th>
                <th>SUBJECT</th>
                <th>VIEWES</th>
                <th>DATE</th>
                <th>LIKE</th>
              </tr>
            </thead>
            <tbody>
              {totalPosts === 0 ? (
                <h2>검색결과 없음</h2>
              ) : (
                posts.map((posts, index) => (
                  <tr className="content_row" key={index}>
                    <td>{posts.writer === "교육담당자" ? "필독" : posts.id}</td>
                    <td>{posts.writer}</td>
                    <td onClick={() => onClick(index)}>{posts.title}</td>
                    <td>{posts.views}</td>
                    <td>{posts.date}</td>
                    <td>{posts.like}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <AboutMeDetail
            setContent={setContent}
            posts={posts[index]}
            id={posts[index].id}
          />
        </div>
      )}
    </>
  );
};

export default AboutMeTableList;
