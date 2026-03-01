import React from "react";

const InputComponent = ({
  quantity,
  setQuantity,
  onRefresh,
  breeds,
  selectBreeds,
  setSelectBreeds,
}) => {
  return (
    <div>
      <label htmlFor="dogList">Порода:</label>
      <select
        name="breedsList"
        id="breedsList"
        value={selectBreeds}
        onChange={(e) => setSelectBreeds(e.target.value)}
      >
        {breeds.map((breed) => (
          <option value={breed}>{breed}</option>
        ))}
      </select>
      <div>
        <label htmlFor="quantityDogs"></label>
        <input
          type="number"
          name="quantity"
          id="quantityDogs"
          value={quantity}
          min={1}
          max={50}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={onRefresh}>Обновить</button>
      </div>
    </div>
  );
};

export default InputComponent;
