const { ethers } = require("ethers");
const { UserAPI,
    generateKeyPair,
    ConnectorNames } = require("@loopring-web/loopring-sdk")
const axios = require('axios/dist/browser/axios.cjs');
Web3 = require("web3")



let address;
async function connectMetaMask() {
    // connectMetaMaskButton.disabled = true;
    const provider = new ethers.providers.Web3Provider(
        (window).ethereum
    );
    const walletAddress = await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
            {
                eth_accounts: {}
            }
        ]
    });


    const accounts = await provider.send("eth_requestAccounts", []);
    // console.log(provider.send("eth_requestAccounts", []));
    const providedAccount = accounts[0];
    console.log(providedAccount)
    // ethereumAccount.set(providedAccount);
    return providedAccount;

}


async function fetchLoopringNFts() {
    console.log("Button clicked!");
    address = "0x9552cfce60429863D4A7D8205457EC4AC05857dC"
    const userAPI = new UserAPI({
        chainId: 1,
    });
    const accountInfo = await axios.get(
        `https://api3.loopring.io/api/v3/account?owner=${address}`
    );
        console.log(accountInfo.data.owner)
}

var button = document.getElementById("connectMetaMask");
button.addEventListener("click", connectMetaMask);

var button = document.getElementById("fetchLoopring");
button.addEventListener("click", fetchLoopringNFts);