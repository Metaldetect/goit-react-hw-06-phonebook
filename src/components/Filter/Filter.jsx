import React from 'react';
import PropTypes from 'prop-types';
import { FilterWrapper, FilterLabel, FilterInput } from './FilterStyles';

function Filter({ value, onChange }) {
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Filter contacts:</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </FilterWrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
