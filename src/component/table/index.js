import React from "react";
import css from "./style.module.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
const Table = () => {
  return (
    <table className={css.table}>
      <tr className={css.row1}>
        <th>№</th>
        <th>Гэрээний дугаар</th>
        <th>Овог</th>
        <th>Нэр</th>
        <th>Ашиглаж буи төхөөрөмжийн тоо</th>
        <th>Үйлчилгээний төрөл</th>
        <th>Идвэхтэй эсэх</th>
      </tr>
      <tr>
        <th>1</th>
        <th>1010101</th>
        <th>Наранбаатар</th>
        <th>Анхбаяр</th>
        <th>10</th>
        <th>Агааржуулалт</th>
        <th>Тийм</th>
        <th>
          <AiOutlineCloseSquare className={css.icon} />
        </th>
      </tr>
      <tr>
        <th>1</th>
        <th>1010101</th>
        <th>Наранбаатар</th>
        <th>Анхбаяр</th>
        <th>10</th>
        <th>Агааржуулалт</th>
        <th>Тийм</th>
        <th>
          <AiOutlineCloseSquare className={css.icon} />
        </th>
      </tr>
    </table>
  );
};

export default Table;
