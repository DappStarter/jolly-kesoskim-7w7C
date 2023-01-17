require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stove razor soap unveil hidden enter equal genius'; 
let testAccounts = [
"0xbc021152d807a44c77712d8540d00167e1ea1204b8ce64030004a63bac85a090",
"0xa3212da63abe5bb637b5f70f4eeb85774bfbf3a2ac2ac906f04177f910e2d9f9",
"0xfda9d0f8a495caa399c31cd4f42fb2cb418527de8bb3cb3fa8cc608d7599467d",
"0xcfa5758364ff3adadd6a9961f9637ca9fdab9edaac4c3a6b1d815115c6e9b53b",
"0x68a2e4e70a14392cad274243eaaebb25b6a70c056226385f6dd1129171743f5b",
"0xf7c9d6608da903133f724bfee06edc5e9a044debcc12ded4cfd5bd2e5dab0b77",
"0xd4623740b6c63d9b17289fea9b60426a6dd1db0eb0c3fcd6e2eff5edc1f8de24",
"0xe58ee6b460fae670cee6ca6469cac6a977d0c78cb8494b78dd6a15dd87bb4c71",
"0x5c7c3044d19d695f80513b8089ec82550a65212345bac709446803ded7d88f5b",
"0x6c09ed65616cf9a4e39e4e614cf6ca04bdbcfb254336ca73f279347a3e7e7793"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

