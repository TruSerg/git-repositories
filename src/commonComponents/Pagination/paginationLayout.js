import PropTypes from "prop-types";
import { memo } from "react";

import sprite from "../../static/sprite.svg";

import "./index.scss";

const PaginationLayout = ({
  currentButton,
  setCurrentButton,
  arrOfCurrButtons,
  numberOfPages,
}) => {
  return (
    <div>
      <div className="pagination-container">
        <button
          className={`${currentButton === 1 ? "disabled" : ""}`}
          onClick={() =>
            setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
          }
        >
          <svg className="arrow-left">
            <use href={sprite + "#i-left"} />
          </svg>
        </button>

        {arrOfCurrButtons.map((item, index) => {
          return (
            <button
              key={index}
              className={`${currentButton === item ? "active" : ""}`}
              onClick={() => setCurrentButton(item)}
            >
              {item}
            </button>
          );
        })}

        <button
          className={`${
            currentButton === numberOfPages.length ? "disabled" : ""
          }`}
          onClick={() =>
            setCurrentButton((prev) =>
              prev >= numberOfPages.length ? prev : prev + 1
            )
          }
        >
          <svg className="arrow-right">
            <use href={sprite + "#i-right"} />
          </svg>
        </button>
      </div>
    </div>
  );
};

PaginationLayout.propTypes = {
  currentButton: PropTypes.number.isRequired,
  setCurrentButton: PropTypes.func.isRequired,
  arrOfCurrButtons: PropTypes.array.isRequired,
  numberOfPages: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default memo(PaginationLayout);
