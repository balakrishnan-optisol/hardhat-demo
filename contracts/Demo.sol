//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Demo {
    string private demo;

    constructor(string memory _demo) {
        console.log("Deploying a Demo with demo:", _demo);
        demo = _demo;
    }

    function getDemo() public view returns (string memory) {
        return demo;
    }

    function setDemo(string memory _demo) public {
        console.log("Changing demo from '%s' to '%s'", demo, _demo);
        demo = _demo;
    }
}
