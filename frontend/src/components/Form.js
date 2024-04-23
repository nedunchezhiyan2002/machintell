import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./formTableStyles.css"

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Documents</th>
            <th>UID</th>
            <th>Availability</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {

            return (
              <tr key={idx}>
                <td>{row.Documents}</td>
                <td>{row.UID}</td>
                <td>{row.Availability}</td>
                <td><a href = {row.Link}>Link</a></td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)}/>
                    <BsFillPencilFill className="edit-btn" onClick={() => editRow(idx)}/>
                  </span>
                </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};