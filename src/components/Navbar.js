import React from "react";

function Navbar() {
  return (
    <div className="h-[10vh] flex justify-between  items-center px-6 bg-[#151515]">
      <h1 className="text-3xl text-white font-bold">Notes-book</h1>
      <div>
        <button className="px-3 py-1 mr-2 rounded-md text-lg text-white font-semibold bg-red-600 hover:bg-red-400 transition delay-150">
          Login
        </button>
        <button className="px-3 py-1 text-lg rounded-md text-white font-semibold bg-red-600 hover:bg-red-400 transition delay-150">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
