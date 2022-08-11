import React from "react";
import "./Table.css";
import Row from "./Row";

const Url = "https://62ab3440a62365888bd75cdd.mockapi.io/api/Movie";
function Table({ movieList, setMovieList }) {
  // handling delet
  const handleDelet = (ID) => {
    setMovieList(movieList.filter((item) => item.id !== ID));
    fetch(`${Url}/${ID}`, { method: "DELETE" }).then((res) =>
      console.log(res.json())
    );
  };

  return (
    <div className="wrapper">
      <div className="title">
        <h3>لیست فیـــــلم</h3>
        <div className="iconi"></div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>نام فیــلم</th>
            <th>کارگردان</th>
            <th>ژانر فیــلم</th>
            <th>سال ساخت</th>
            <th>توضیحات</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((item, index) => (
            <Row item={item} index={index} handleDelet={handleDelet} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
