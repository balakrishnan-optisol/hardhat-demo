const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Demo", function () {
  it("Should return the new demo", async function () {
    const Demo = await ethers.getContractFactory("Demo");
    const demo = await Demo.deploy("Hello, world!");
    await demo.deployed();

    expect(await demo.getDemo()).to.equal("Hello, world!");

    const setDemo = await demo.setDemo("Hola, mundo!");

    // wait until the transaction is mined
    await setDemo.wait();

    expect(await demo.getDemo()).to.equal("Hola, mundo!");
  });
});
