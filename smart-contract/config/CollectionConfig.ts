import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PitbullNFTClub',
  tokenName: 'PITBULLS',
  tokenSymbol: 'PBNC',
  hiddenMetadataUri: 'ipfs://QmeprvHNA49V6JbGLd19agE1ucP4xv6Ua71pPAWzSJHumw/hidden.json',
  maxSupply:30,
  whitelistSale: {
    price: 0.0005,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.0007,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.0009,
    maxMintAmountPerTx: 15,
  },
  contractAddress: "0x81f4B4eC30726da2261Cf9D3c26D4695328ceB1c",
  marketplaceIdentifier: 'Pitbulls',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
