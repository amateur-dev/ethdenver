// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";


contract Basic721 is ERC721PresetMinterPauserAutoId {
    constructor() ERC721PresetMinterPauserAutoId(
            "Basic721",
            "BAS",
            "https://example.com/token/"
        )
    {}
}