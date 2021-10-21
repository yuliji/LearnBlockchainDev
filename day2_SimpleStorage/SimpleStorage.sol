// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {
    // uint varying size interger
    uint storedData; //default zero
                    // state variable

    constructor() {
        storedData = 666;
    }
    function set(uint x) public {
      storedData = x;
    }

    // view don't change state variable
    function get() public view returns (uint) {
      return storedData;
    }

    // pure even don't read state variable
    function getLocalState() public pure returns (uint) {
        uint local = 888;
        return local;
    }
}