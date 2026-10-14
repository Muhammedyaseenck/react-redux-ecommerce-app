import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setCategory } from "./categorySlice";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { list, selected, status } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  return (
    <div className="category-filter">
      <button
        className={selected === "all" ? "active" : ""}
        onClick={() => dispatch(setCategory("all"))}
      >
        All
      </button>
      {list.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? "active" : ""}
          onClick={() => dispatch(setCategory(cat))}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;