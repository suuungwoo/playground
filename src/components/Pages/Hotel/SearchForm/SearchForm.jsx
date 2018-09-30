import React from 'react';
import enhance from './enhancer';

function SearchForm(props) {
  const {onSubmit, place, onChange} = props;
  return (
    <form className="search_form" onSubmit={onSubmit}>
      <input
        className="place_input"
        size="30"
        type="text"
        value={place}
        onChange={onChange}
      />
      <input className="submit_button" type="submit" value="検索" />
    </form>
  );
}

export default enhance(props => <SearchForm {...props} />);
