import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="ui two item menu">
      <Link href="/">
        <a className="item">Home</a>
      </Link>
      <Link href="/about">
        <a className="item">About</a>
      </Link>
    </div>
  );
};

export default Header;