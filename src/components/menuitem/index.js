import React from 'react';
import './menuitem.styles.scss';

const MenuItem = (props) => {
     return ( 
     <div className= {`${props.size} menu-item`} > 
        <div className='background-image'
            style={{
            backgroundImage: `url(${props.imageUrl})`}}
        />
        <div className='content'>
          <div className='title'>{(props.title).toUpperCase()}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
     )
};

export default MenuItem;