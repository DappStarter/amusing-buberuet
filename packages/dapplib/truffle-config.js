require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note mean proof grace neck flock trend'; 
let testAccounts = [
"0x8bb5000f12e0f872bf1144fb29c85fbd0489267ec6671d1b4a105de6fa2d1baa",
"0x1c7f6850663deba584cd9126f64c570707ad08d6a4879534c3b01c23f500cae6",
"0x3e89ff24c7529693ac7aa180e7fe6aa2534483d27eee195e6cfb40113b86074d",
"0x3c34abbb0d19f89638b120f5c080d027037eff59437722cfcf44dd1be3e6465b",
"0x9df552c17c84a4d156f3f916e07da833c15d7c074fd97932a79a44259fb28411",
"0x786bb313cf006d895282cd6e8732fe627bbe920b90b89f0395c0c333739f824f",
"0x7631f29bdc29d4ea0aba0e62aeffcf9667affa850debfd8b6de4fcddb1aea860",
"0xef2aa107a18acae072bd73d4b32edbbd40872f119ad00c480cab826693da1864",
"0xccc498c70f64302fa3a166bc809b70d6d6521fbf1d90b6103a3e406aef1e31f6",
"0x035c4d199f87303d4c338b1e6e89a901b293f0d96d16a79645c72673701675b4"
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
            version: '^0.5.11'
        }
    }
};
