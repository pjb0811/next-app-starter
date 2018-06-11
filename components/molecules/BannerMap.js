import React, { Component } from 'react';
import MapArea from '../atoms/MapArea';

class BannerMap extends Component {
  render() {
    return (
      <map name="top_ban_map" id="_topBannerMapContainer">
        <MapArea />
        <area
          shape="poly"
          coords="270,0,540,0,540,80,270,80"
          href="http://promotion.wemakeprice.com/promotion/g/hello_summer06"
          alt="배너"
        />
        <area
          shape="poly"
          coords="540,0,811,0,811,80,540,80"
          href="http://promotion.wemakeprice.com/promotion/g/fashionbeautyweek"
          alt="배너"
        />
        <area
          shape="poly"
          coords="811,0,1084,0,1084,80,811,80"
          href="http://promotion.wemakeprice.com/promotion/g/all-pass"
          alt="배너"
        />
      </map>
    );
  }
}

export default BannerMap;
