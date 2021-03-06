export const AUTHOR_ADDRESS =
    (process.env.REACT_APP_AUTHOR_ADDRESS ||
    "0x223ecddc2ff392e286c88d742198eb447f34f67e").toLowerCase();
    
console.log("AUTHOR_ADDRESS", AUTHOR_ADDRESS)
/** All the vars, some of them injectable */
const MATIC_RPC =
    process.env.NEXT_PUBLIC_MATIC_RPC || "https://rpc-mainnet.matic.network";

const MATIC_CHAIN_ID = 137;

const MUMBAI_CHAIN_ID = 80001;
const MUMBAI_RPC =
    process.env.NEXT_PUBLIC_MUMBAI_RPC || "https://rpc-mumbai.matic.today";

const MUMBAI_EXPLORER_URL = "https://explorer-mumbai.maticvigil.com";

/** TODO */
const MUMBAI_THE_GRAPH_URL =
    "https://thegraph.com/explorer/subgraph/gallodasballo/opensky";

/** Set them into settings objects */
const devSettings = {
    RPC: MUMBAI_RPC,
    CHAIN_ID: MUMBAI_CHAIN_ID,
    GRAPH_URL: MUMBAI_THE_GRAPH_URL,
    EXPLORER_URL: MUMBAI_EXPLORER_URL,
};

const prodSettings = {
    RPC: MATIC_RPC,
    CHAIN_ID: MATIC_CHAIN_ID,

    GRAPH_URL: "TODO",
    CONTRACT_ADDRESS: "TODO",
    CONTRACT_ABI: "TODO",
    EXPLORER_URL: "TODO",
};

const prod = false; // Always in dev

export const RPC = prod ? prodSettings.RPC : devSettings.RPC;
export const CHAIN_ID = prod ? prodSettings.CHAIN_ID : devSettings.CHAIN_ID;
export const GRAPH_URL = prod ? prodSettings.GRAPH_URL : devSettings.GRAPH_URL;
export const CONTRACT_ADDRESS = prod
    ? prodSettings.GRAPH_URL
    : devSettings.CONTRACT_ADDRESS;
export const CONTRACT_ABI = prod
    ? prodSettings.GRAPH_URL
    : devSettings.CONTRACT_ABI;

export const EXPLORER_URL = prod
    ? prodSettings.EXPLORER_URL
    : devSettings.EXPLORER_URL;
