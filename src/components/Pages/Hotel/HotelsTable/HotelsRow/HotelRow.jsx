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
      <td className={hotel.price || 'empty'}>
        {hotel.price ? `${hotel.price}円` : '記載なし'}
      </td>
      <td className={hotel.reviewAverage || 'empty'}>
        {hotel.reviewAverage ? `${hotel.reviewAverage}点` : '記載なし'}
      </td>
      <td className={hotel.reviewCount || 'empty'}>
        {hotel.reviewCount ? `${hotel.reviewCount}個` : '記載なし'}
      </td>
      <td className={hotel.distance || 'empty'}>
        {hotel.distance ? `${hotel.distance}m` : '記載なし'}
      </td>
    </tr>
  );
}

export default HotelRow;
