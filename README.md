[The RibbonBlockchain Website](https://ribbonblockchain.com)
[![CircleCI](https://circleci.com/gh/RibbonBlockchain/IncentivesAlpha/tree/master.svg?style=svg)](https://circleci.com/gh/RibbonBlockchain/IncentivesAlpha/tree/master)

[![RibbonBlockchain](https://d33wubrfki0l68.cloudfront.net/acc4bad7b8baf69c0a595a8887e51c474aeb5491/998d2/img/logo.png)](https://ribbonblockchain.com)

---

[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg?style=flat-square)](/CONTRIBUTING.md)

Ribbon Blockchain is a healthcare incentives platform that aims to modify health and wellness behaviour through rewardable tasks.

Ribbon channels donated, pledged or sponsored funding directly to patients, community health workers and healthcare practitioners; where such funding is used to incentivize preventative care, adherence to medication and therapy, quality of care delivery and overall population health outcomes.

Our Incentives are distributed in DAI, an asset-backed, decentralized stablecoin on the Ethereum blockchain.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Packages](#packages)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Resources](#resources)

## Packages

This monorepo contains JavaScript tools and applications that interact with RibbonBlockchain's smart contracts. The ribbon platform consists of 3 key components right now. this will change in time. These are as follows:

| Name                                                                                                                    | Description                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`@ribbonblockchain/back-end`](https://github.com/RibbonBlockchain/IncentivesAlpha/tree/master/packages/API)            | Backend API built with Node, typscript express restful API that handles data capture for patients and all system wide interactions.                    |
| [`@ribbonblockchain/front-end`](https://github.com/RibbonBlockchain/IncentivesAlpha/tree/master/packages/Frontend)      | Frontend react application that patients, CHW, practitioners and admins interact with. [dapp.ribbonblockchain.com](https://alpha.ribbonblockchain.com) |
| [`@ribbonblockchain/smart-contract`](https://github.com/RibbonBlockchain/IncentivesAlpha/tree/master/packages/Frontend) | Solidity Smart contracts that control the funding distribution, allocation and assignment within the Ribbon ecosystem.                                 |

Each section has it's own package and has it's own readme within the package that explains how to set it up and get running with that spesific component.

## Requirements

This project requires `node >=10.0.0` and `yarn >=1.0.0`. A unix shell is also required.

- [Installing Node](https://docs.npmjs.com/getting-started/installing-node)
- [Installing Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [UNIX Shell (Windows users)](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

## Getting Started

To get started, clone the repo and install its dependencies:

```bash
git clone https://github.com/RibbonBlockchain/IncentivesAlpha.git
cd IncentivesAlpha
yarn
```

For development purposes there's a top-level `start` script that will watch and continuously compile all packages concurrently:

```bash
yarn frontend:start
```

For next steps, take a look at documentation for the individual package(s) you want to run and/or develop. Each package can be run from the root directory using Lerna. The main things you can do are outlined below:

```bash
    yarn frontend:start         # start run the front end server
    yarn frontend:build         # build front end for production

    yarn contracts:build        # compile the smart contracts
    yarn contracts:deploy:local # deploy smart contract to local ganage instance
    yarn contracts:deploy:sokol # deploy contract to sokol test POA network
    yarn contracts:start        # start a local ganache-cli instance
    yarn contracts:test         # run contract unit tests
    yarn contracts:cover        # generate coverage report

    yarn backend:test           # run API unit tests
    yarn backend:build:         # build API for production
    yarn backend:dev            # start API in development mode
    yarn backend:prod           # start API in production mode
```

## Contributing

Thanks for your interest in RibbonBlockchain. There are many ways you can contribute. To start, take a few minutes to look over the official guide:

**[Read the "Contributing to RibbonBlockchain" Guide &raquo;](/CONTRIBUTING.md)**

We happily await your pull requests and/or involvement in our [issues page](https://github.com/RibbonBlockchain/IncentivesAlpha/issues) and hope to see your username on our [list of contributors](https://github.com/RibbonBlockchain/IncentivesAlpha/graphs/contributors) 🎉🎉🎉

## Resources

To get a full idea of what RibbonBlockchain is about, be sure to take a look at these other resources

1. [Home Page](https://ribbonblockchain.com)
2. [MVP](https://dapp.ribbonblockchian.com)
3. [Incentives concept](https://incentives.ribbonblockchain.com)
4. [Twitter](https://twitter.com/RibbonPlatform)
