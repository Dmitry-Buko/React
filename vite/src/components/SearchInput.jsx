import { memo, React } from "react";

const SearchInput = ({ onItemChange }) => {
  console.log('SearchInput render');
  
  return (
    <>
      <input type="text" onChange={(e) => onItemChange(e.target.value)} />
    </>
  );
};

export default memo(SearchInput);
