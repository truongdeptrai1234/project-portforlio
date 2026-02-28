import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Sort({ options, type }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Select
      type={type}
      value={searchParams.get("sort") || ""}
      onChange={(e) =>
        setSearchParams((prev) => {
          prev.set("sort", e.target.value);
          return prev;
        })
      }
    >
      <option value="" hidden>
        sort by
      </option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  );
}

export default Sort;
