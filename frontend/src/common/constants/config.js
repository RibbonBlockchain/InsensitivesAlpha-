export const config = {
  POA_RPC: process.env.REACT_APP_POA_RPC || "https://sokol.poa.network/",
  ADMIN_CONTRACT_ADDRESS:
    process.env.REACT_APP_ADMIN_CONTRACT_ADDRESS ||
    "0x7D75d5a901a365DC49422FC765c576E70f912a55",
  VAULT_CONTRACT_ADDRESS:
    process.env.REACT_APP_VAULT_CONTRACT_ADDRESS ||
    "0xc2e365BBC3F64E11a5FCE7d96291dd0A79A5B746",
  REGISTRY_CONTRACT_ADDRESS:
    process.env.REACT_APP_REGISTRY_CONTRACT_ADDRESS ||
    "0x97eD1a2f62ECE345C9F7bb05239CC9E6971151A4",
  PRIVATE_KEY:
    process.env.REACT_APP_PRIVATE_KEY ||
    "0x190f12957983e77f3750d8a3529eaa4775abac27f21c30e11cc018f682905dca",

  NETWORK: process.env.REACT_APP_NETWORK || "kovan",
  // Auth
  API_ENDPOINT:
    process.env.REACT_APP_API_ENDPOINT ||
    "https://staging.ribbonblockchain.com:2053/api/v1",
  WALLET_CONNECT:
    process.env.REACT_APP_INFURA_ID || "ad774db213544e6a805541dbd3719d36",
  PORTIS:
    process.env.REACT_APP_PORTIS_ID || "01cced9c-be26-4742-84d6-67dbfdce7194",
  FORTMATIC: process.env.REACT_APP_FORTMATIC_ID || "pk_test_B395AD580D9ADEA6"
};
