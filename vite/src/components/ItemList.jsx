import { memo, useMemo } from "react";

const ItemList = ({ initialItems, searchTerm }) => {
  console.log('ItemList render');
  
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

export default memo(ItemList);
