import { memo, React } from "react";

const CounterButton = ({handleChangeCount}) => {
  console.log('CounterButton render');
  
  return(
    <div>
      <button onClick={handleChangeCount}>Change + 1</button>
    </div>
  )
};

export default memo(CounterButton);
