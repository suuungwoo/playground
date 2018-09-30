import {Link} from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <div className="a__header">
      <Link to="/">TOP</Link>
      <Link to="/hotel">ホテル検索</Link>
      <Link to="/todo">Todo</Link>
    </div>
  );
}

export default Header;
