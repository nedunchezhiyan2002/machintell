import { useState } from "react";

import "./CombinedStyles.css"
import  {Table}  from "../components/Form";
import  {Modal} from "../components/Model"

function Combined() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      Documents: "Home",
      UID: "This is the main page of the website",
      Availability: "Yes",
      Link: "abcd.com",
    },
    {
      Documents: "About Us",
      UID: "This page has details about the company",
      Availability: "No",
      Link:"dcef.com",
    },
    {
      Documents: "Pricing",
      UID: "Prices for different subscriptions",
      Availability: "No",
      Link:"gehg.com",
    },
  ]);

  console.log(JSON.stringify(rows))

  const postDataToServer = async () => {
    try {
      for (const row of rows){
        const response = await fetch(`${window.location.origin}/api/new-collection`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(row),
        });
        const data = await response.json();
        // Convert JSON string to JavaScript object before logging
        const parsedData = JSON.parse(data);
        console.log("Data posted:", parsedData);
     }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

// Function to handle button click and post data
  const handlePostData = () => {
    postDataToServer();
  };

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="Combined">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">Add</button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
      <button className="btn" onClick={handlePostData}>Save</button>
    </div>
    
  );
}

export default Combined;