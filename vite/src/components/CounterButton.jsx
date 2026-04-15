import { memo } from "react";
import {withRenderTracker} from './withRenderTracker'

const CounterButton = ({handleChangeCount}) => {
  // console.log('CounterButton render');
  
  return(
    <div>
      <button onClick={handleChangeCount}>Change + 1</button>
    </div>
  )
};

const TrackedCounterButton = withRenderTracker(CounterButton, 'CounterButton')
export default memo(TrackedCounterButton);
