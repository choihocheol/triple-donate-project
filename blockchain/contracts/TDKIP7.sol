// SPDX-License-Identifier: MIT

pragma solidity ^0.5.0;

import "@klaytn/contracts/token/KIP7/KIP7Mintable.sol";
import "@klaytn/contracts/token/KIP7/KIP7Burnable.sol";
import "@klaytn/contracts/token/KIP7/KIP7Metadata.sol";

contract TDKIP7 is KIP7Mintable, KIP7Burnable, KIP7Metadata {
    constructor() KIP7Metadata("TripleDonateToken", "TDT", 0) public {}
}
