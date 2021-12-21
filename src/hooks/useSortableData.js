import * as React from "react";

const useSortableData = (items, config = null) => {
  // const [sortedField, setSortedField] = React.useState(null);
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];

    if (sortConfig !== null) {
      console.log("sortConfig:", sortConfig);
      sortableItems.sort((a, b) => {
        console.log("sortConfig:", sortConfig.key);

        if (a[sortConfig.key] < b[sortConfig.key]) {
          console.log("A:", a[sortConfig.key]);
          console.log("B:", b[sortConfig.key]);

          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    // console.log("sortConfig:", sortConfig)
    // console.log("sortConfigKey:",sortConfig.key)
    // console.log("sortConfigDirection:",sortConfig.direction)

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  return { items: sortedItems, requestSort, sortConfig };
};

export default useSortableData;
