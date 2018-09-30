import React from 'react';

function HotelRow(props) {
  const {hotel} = props;

  return (
    <tr>
      <td>
        <img src={hotel.thumbUrl} alt={hotel.name} />
      </td>
      <td>
        <a href={hotel.url} target="_blank">
          {hotel.name}
        </a>
      </td>
      <td>{hotel.price ? `${hotel.price}円` : '空室なし'}</td>
      <td>{hotel.reviewAverage}</td>
      <td>{hotel.reviewCount}</td>
      <td>{hotel.distance}</td>
    </tr>
  );
}

export default HotelRow;
