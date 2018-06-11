import React from 'react';
import Link from 'next/link';

const MapArea = props => {
  return (
    <Link prefetch href="/promotion/g/solopower">
      <area shape="poly" coords="0,0,270,0,270,80,0,80" alt="배너" />
    </Link>
  );
};

export default MapArea;
