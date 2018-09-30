import React from 'react';
import enhance from './enhancer';

function HotelsClickableTh(props) {
  const {onClick, label, isSelected} = props;
  return (
    <th className="hotels_clickable_th" onClick={onClick}>
      {label}
      {isSelected ? '▲' : ''}
    </th>
  );
}

export default enhance(props => <HotelsClickableTh {...props} />);
