import React from 'react';
import { FilterWrapper, FilterLabel, FilterInput } from './FilterStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

function FilterComponent() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Filter contacts:</FilterLabel>
      <FilterInput
        type="text"
        placeholder="Enter a name"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterWrapper>
  );
}

export default FilterComponent;
