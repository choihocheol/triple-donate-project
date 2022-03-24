// SPDX-License-Identifier: MIT

pragma solidity ^0.5.0;

import "@klaytn/contracts/token/KIP37/KIP37.sol";
import "./KIP37Mintable.sol";

contract TDKIP37 is KIP37, KIP37Mintable {
    constructor() KIP37("") public {}
}
