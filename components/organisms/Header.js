import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="ui three item menu">
      <Link prefetch href="/">
        <a className="item">Home</a>
      </Link>
      <Link prefetch href="/about">
        <a className="item">About</a>
      </Link>
      <Link prefetch href="/redux">
        <a className="item">redux</a>
      </Link>
    </div>
  );
};

export default Header;