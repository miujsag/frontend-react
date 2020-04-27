import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MenuContext } from "../../context/MenuContext";
import "./SearchModal.css";
import {
  getCurrentDate,
  getLastWeeksDate,
  formatForSearch,
} from "../../utils/date";

export default function SearchModal({
  isMobileSearchOpen,
  toggleMobileSearch,
}) {
  const menuContext = useContext(MenuContext);
  const [startDate, setStartDate] = useState(getLastWeeksDate());
  const [endDate, setEndDate] = useState(getCurrentDate());

  return (
    <form
      className={`search-modal ${menuContext.state.isSearch ? "active" : ""}`}
      action="/kereses"
      method="GET"
    >
      <button
        type="button"
        className="search-close"
        name="close-search"
        onClick={menuContext.toggleSearch}
      >
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.05217 5.96879C7.44269 5.57827 8.07586 5.57827 8.46638 5.96879L19.0314 16.5338C19.4219 16.9243 19.4219 17.5575 19.0314 17.948L18.9482 18.0312C18.5577 18.4217 17.9245 18.4217 17.534 18.0312L6.96898 7.4662C6.57846 7.07567 6.57846 6.44251 6.96898 6.05198L7.05217 5.96879Z"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.96883 17.948C6.5783 17.5575 6.5783 16.9243 6.96883 16.5338L17.5338 5.96879C17.9244 5.57827 18.5575 5.57827 18.948 5.96879L19.0312 6.05198C19.4218 6.44251 19.4218 7.07567 19.0312 7.4662L8.46623 18.0312C8.0757 18.4217 7.44254 18.4217 7.05201 18.0312L6.96883 17.948Z"
          ></path>
        </svg>
      </button>
      <h2>Keresés</h2>
      <div className="form-group">
        <input type="text" name="query" required="" />
      </div>
      <div className="form-group">
        <label>Dátum szerint</label>
        <div className="inline">
          <input type="hidden" name="from" value={formatForSearch(startDate)} />
          <input type="hidden" name="until" value={formatForSearch(endDate)} />
          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            dateFormat="yyyy-MM-dd"
            maxDate={new Date()}
            placeholderText=""
            calendarClassName="date-input"
          />
          <DatePicker
            selected={endDate}
            onChange={setEndDate}
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
              id="modal-order-relevance"
              defaultChecked={true}
            />
            <label htmlFor="modal-order-relevance">relevancia szerint</label>
          </div>
          <div className="checkbox-button">
            <input
              type="radio"
              name="order"
              value="date"
              id="modal-order-date"
            />
            <label htmlFor="modal-order-date">dátum szerint</label>
          </div>
        </div>
      </div>
      <button type="submit">hírek keresése</button>
    </form>
  );
}
