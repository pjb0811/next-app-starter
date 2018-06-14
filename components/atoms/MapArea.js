import React, { Component } from 'react';
// import Link from 'next/link';
import { Link } from '../../lib/routes';
import urlRules from '../../lib/urlRules';

class MapArea extends Component {
  render() {
    const { linkType, linkInfo, mapPosition } = this.props;
    return (
      <Link route={urlRules[linkType]} params={{ id: linkInfo }}>
        <area shape="poly" coords={mapPosition} alt="배너" />
      </Link>
    );
  }
}

export default MapArea;
