import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./gallery.css"

const Gallery = (props) => {
  const { data } = props;

  return (
    <ul className='images'>
      {data.map((image) => (
        <li key={image.id}  className='image'>
          <div>
            <img
              alt="img"
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              height="200"
              width="250"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
