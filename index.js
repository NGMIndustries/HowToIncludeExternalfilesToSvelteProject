const { ethers } = require("ethers");


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


// function connectMetaMask() {
//     console.log("Button clicked!");
// }

var button = document.getElementById("connectMetaMask");
button.addEventListener("click", connectMetaMask);
