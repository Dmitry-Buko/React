import { memo, useMemo } from "react";
import {withRenderTracker} from './withRenderTracker'

const ItemList = ({ initialItems, searchTerm }) => {
  // console.log('ItemList render');
  
  const filteredItems = useMemo(() => {
    return initialItems.filter((el) =>
      el.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [initialItems, searchTerm]);
  return (
    <div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const TrackedItemList = withRenderTracker(ItemList, 'ItemList')
export default memo(TrackedItemList);
