import React from 'react';
import SmallInput from './inputs/small-input';

export default ({ value, onChange }) => {
  return (
    <SmallInput
      className="search-input"
      id="search-input"
      value={value}
      onChange={onChange}
    />
  );
}
