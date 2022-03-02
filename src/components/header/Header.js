import React from 'react';

export default function Header() {
  return(
    <header className="bg-transparent flex align-center justify-between py-3 px-12">
      <div>
        <a href="/" className="text-2xl text-white">Logo</a>
      </div>
      <div>
        <a href="/" className="text-white text-base hover:underline">About</a>
      </div>
    </header>
  );
}