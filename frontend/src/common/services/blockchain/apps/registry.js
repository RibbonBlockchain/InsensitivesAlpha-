import BlockchainService from "../index";
import IRegistry from "../abis/IRegistry.json";
import { config } from "../../../constants/config";

let registryAddress = config.REGISTRY_CONTRACT_ADDRESS;

export default class RegistryContract extends BlockchainService {
  constructor() {
    super();
    this.contract = this.initializeContract(registryAddress, IRegistry);
    this.addUser = this.addUser.bind(this);
    this.address = this.address.bind(this);
    this.balanceOf = this.balanceOf.bind(this);
    this.getUserRole = this.getUserRole.bind(this);
    this.recordPayout = this.recordPayout.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.addWhitelistAdmin = this.addWhitelistAdmin.bind(this);
  }

  async addWhitelistAdmin(address) {
    let { ethers } = await this.getInstance();
    let contract = await this.contract;
    console.log(contract);
    try {
      //   return await contract.addWhitelistAdmin(address);
    } catch (error) {
      return error;
    }
  }
  async addUser(address, role) {
    let { ethers } = await this.getInstance();
    let contract = await this.contract;
    try {
      return await contract.addUser(address, role, {
        value: 0x0,
        gasLimit: ethers.utils.hexlify(8000000)
      });
    } catch (error) {
      return error;
    }
  }
  async address() {}
  async balanceOf() {}
  async getUserRole(address) {
    let contract = await this.contract;
    return await contract.getUserRole(address);
  }
  async recordPayout() {}
  async removeUser() {}
  async updateUser() {}
}
