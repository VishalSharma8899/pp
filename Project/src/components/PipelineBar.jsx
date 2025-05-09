import React, { useState } from "react";
import "./PipelineBar.css"; // Make sure to create this CSS file

const PipelineBar = ({ heading, counts, tableData , bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <div className="pipeline-container" style={{ backgroundColor: bgColor }}>
      <div className="pipeline-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown-icon">{isOpen ? "▲" : "▼"}</div>
        <div className="pipeline-heading">{heading}</div>
        <div className="pipeline-counts">
            <div className="count-block" >
              <div className="count-number">{counts[0]}</div>
            </div>
            <div className="count-block" >
              <div className="count-number">${counts[1]}</div>
            </div>
        </div>
      </div>

      {isOpen && (
         <div className="pipeline-table" style={{ backgroundColor: "#ffffff" }}>

          <div className="table-row table-header">
            <div>Client</div>
            <div>Deal Name</div>
            <div>Deal Budget</div>
            <div>Assignees</div>
          </div>
          {tableData.map((row, idx) => (
            <div className="table-row" key={idx}>
              <div>{row.client}</div>
              <div>{row.dealName}</div>
              <div>{row.budget}</div>
              <div>{row.assignees}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PipelineBar;
