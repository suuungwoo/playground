import React from 'react';

import {HotelRow} from './HotelsRow';
import {HotelsClickableTh} from './HotelsClickableTh';
import enhance from './enhancer';

function HotelsTable(props) {
  const {hotels} = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>画像</th>
          <th>ホテル名</th>
          <HotelsClickableTh label="値段" sortKey="price" />
          <HotelsClickableTh label="レビュー" sortKey="reviewAverage" />
          <th>レビュー件数</th>
          <th>距離</th>
        </tr>
        {hotels.map(hotel => <HotelRow key={hotel.id} hotel={hotel} />)}
      </tbody>
    </table>
  );
}

export default enhance(props => <HotelsTable {...props} />);
