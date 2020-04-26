import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchForm.css";

export default function SearchForm({
  from,
  until,
  query,
  order,
  total,
  didSearch,
  handleChange,
  handleDateChange,
  handleSubmit,
}) {
  return (
    <form
      className="search-form"
      action="/kereses"
      method="GET"
      onSubmit={handleSubmit}
    >
      <h2>Keresés</h2>
      <div className="form-group">
        <input
          type="text"
          name="query"
          required=""
          onChange={handleChange}
          value={query}
          placeholder="Milyen hír érdekel?"
        />
      </div>
      <div className="form-group">
        <label>Dátum szerint</label>
        <div className="inline">
          <DatePicker
            selected={from}
            onChange={(value) => handleDateChange("from", value)}
            dateFormat="yyyy-MM-dd"
            maxDate={new Date()}
            placeholderText=""
            calendarClassName="date-input"
          />
          <DatePicker
            selected={until}
            onChange={(value) => handleDateChange("until", value)}
            dateFormat="yyyy-MM-dd"
            maxDate={new Date()}
            placeholderText=""
            calendarClassName="date-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Rendezés</label>
        <div className="inline order">
          <div className="checkbox-button">
            <input
              type="radio"
              name="order"
              value="relevance"
              id="order-relevance"
              defaultChecked={order === "relevance"}
              onChange={handleChange}
            />
            <label htmlFor="order-relevance">relevancia szerint</label>
          </div>
          <div className="checkbox-button">
            <input
              type="radio"
              name="order"
              value="date"
              id="order-date"
              defaultChecked={order === "date"}
              onChange={handleChange}
            />
            <label htmlFor="order-date">dátum szerint</label>
          </div>
        </div>
      </div>
      {didSearch ? <p>Találatok száma: {total}</p> : ""}
      <button type="submit">hírek keresése</button>
    </form>
  );
}
