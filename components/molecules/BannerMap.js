import React, { Component } from 'react';
import MapArea from '../atoms/MapArea';

class BannerMap extends Component {
  render() {
    const { items } = this.props;
    return (
      <map name="top_ban_map" id="_topBannerMapContainer">
        {items.map(item => <MapArea key={item.linkInfo} {...item} />)}
      </map>
    );
  }
}

export default BannerMap;
