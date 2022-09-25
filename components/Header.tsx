import * as React from 'react';

const Header = () => {
  return (
    <div className="container mx-auto bg-black rounded-xl shadow p-8 m-10">
      <h1 className="text-3xl text-red-800 font-bold mb-5">
        Dungeons & Dragons Shop
      </h1>
      <p className="text-gray-200 text-lg">
        Welcome to the shop adventurer, feel free to look around.
      </p>
    </div>
  );
};

export default Header;
