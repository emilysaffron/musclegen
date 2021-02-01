import { useState } from "react";

import getExerciseTargets from "../Helpers/getExerciseTargets";
const FilterModal = (filterExercises, half) => {
  const [filterState, toggleFilterState] = useState(false);

  return filterState ? (
    <div>
      {getExerciseTargets(filterExercises, half)}
      <button onClick={() => toggleFilterState(!filterState)} />
    </div>
  ) : (
    <button onClick={() => toggleFilterState(!filterState)} />
  );
};
export default FilterModal;
