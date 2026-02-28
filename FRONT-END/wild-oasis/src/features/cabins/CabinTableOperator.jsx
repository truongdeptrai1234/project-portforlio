import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperator() {
  return (
    <TableOperations>
      <Filter
        options={[
          { value: "discount", label: "Discount" },
          { value: "full-price", label: "Full price" },
          { value: "all", label: "All" },
        ]}
      />
      <Sort
        type="white"
        options={[
          { value: "price-asc", label: "Sort by price(low to high)" },
          { value: "price-dsc", label: "Sort by price(high to low)" },
          { value: "name-az", label: "Sort by name(A-Z)" },
          { value: "name-za", label: "Sort by name(Z-A)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperator;
