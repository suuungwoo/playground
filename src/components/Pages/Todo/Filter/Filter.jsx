import React from 'react';

import {Link} from './Link';

function Filter() {
  return (
    <div className="a__filter">
      <h3>フィルター</h3>
      <div className="f__filter">
        <Link filter="SHOW_ALL">全タスク</Link>
        <Link filter="SHOW_ACTIVE">未完了</Link>
        <Link filter="SHOW_COMPLETED">完了</Link>
      </div>
    </div>
  );
}

export default Filter;
