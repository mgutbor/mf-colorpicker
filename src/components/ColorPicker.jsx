import React from "react";

const ColorPicker = ({ color, handleChangeColor, handleSubmitSaveColor }) => {

  return (
    <>
      <form onSubmit={handleSubmitSaveColor}>
        <input
          type="color"
          className="form-control"
          style={{ width: "100%", height: "300px" }}
          title="Seleccionar un color"
          value={color}
          onChange={handleChangeColor}
        />

        <div className="text-center">
          <h2 className="mt-3 fw-bolder">
            <div
              style={{
                width: "30px",
                height: "30px",
                background: color,
                display: "inline-block",
                margin: "0 1rem",
                borderRadius: "50%",
                verticalAlign: "middle",
              }}
            ></div>
            <span className="text-uppercase" style={{ color: color }}>
              {color}
            </span>
          </h2>

          <button type="submit" className="btn btn-success mt-3">
            Guardar color
          </button>
        </div>
      </form>
    </>
  );
};

export default ColorPicker;
