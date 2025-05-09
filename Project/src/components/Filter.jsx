import React from 'react';
import './Filter.css';

const Filter = () => {
  return (
    <div className="pipeline-header-bar">
      <div className="left-section">
        <span className="icon">📋</span>
        <span className="tab active">Pipeline</span>
        <span className="tab">List</span>
        <span className="summary">Total Deals: 6 Total Revenue in Pipeline: <strong>$66,817</strong></span>
      </div>

      <div className="right-section">
        <input className="search-input" type="text" placeholder="Search..." />
        <input className="date-input" type="text" placeholder="From: dd/mm/yyyy" />
        <input className="date-input" type="text" placeholder="To: dd/mm/yyyy" />
        <label className="checkbox-label">
          <input type="checkbox" />
          Active Deals
        </label>
      </div>
    </div>
  );
};

export default Filter;
