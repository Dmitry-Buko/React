import { memo } from "react";
import {withRenderTracker} from './withRenderTracker'

const SearchInput = ({ onItemChange }) => {
  // console.log('SearchInput render');
  
  return (
    <>
      <input type="text" onChange={(e) => onItemChange(e.target.value)} />
    </>
  );
};

const TrackedSearchInput = withRenderTracker(SearchInput, 'SearchInput')
export default memo(TrackedSearchInput);
