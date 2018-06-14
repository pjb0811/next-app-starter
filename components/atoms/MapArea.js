import React from 'react';
import Link from 'next/link';
import urlRules from '../../lib/urlRules';

const MapArea = props => {
  const link = `/${urlRules[props.linkType]}/${props.linkInfo}`;
  return (
    <Link prefetch href={link}>
      <area shape="poly" coords={props.mapPosition} alt="배너" />
    </Link>
  );
};

export default MapArea;
