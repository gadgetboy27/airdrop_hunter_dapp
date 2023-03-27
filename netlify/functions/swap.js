require('dotenv').config()
const numeral = require('numeral')
const { ethers } = require('ethers')
const bodyParser = require('body-parser')
const { schedule } = require('@netlify/functions')

const IUniswapV2Router02 = require('@uniswap/v2-periphery/build/IUniswapV2Router02.json')


const handler = async function (event, context) {
    console.log('Received event:', event)

    const INFURA_URL_TESTNET = process.env.RPC_URL
    const WALLET_ADDRESS = process.env.WALLET_ADDRESS
    const WALLET_SECRET_1 = process.env.WALLET_SECRET_1
    const WALLET_SECRET_2 = process.env.WALLET_SECRET_2
    const WALLET_SECRET_3 = process.env.WALLET_SECRET_3
    const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS
    const SWAP_AMOUNT = process.env.SWAP_AMOUNT

    const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_TESTNET)

    const ACCOUNT_1 = new ethers.Wallet(WALLET_SECRET_1, provider)
    const V2_ROUTER = new ethers.Wallet(V2_ROUTER_ADDRESS, IUniswapV2Router02.abi)

    const PATH = [WETH_ADDRESS, TOKEN_ADDRESS]
    const DEADLINE = MAth.floor(Data.now()/100) + 60 * 10

    const transaction = await V2_ROUTER.connect(ACCOUNT_1).swapExactETHForTokens(
        0,
        PATH,
        ACCOUNT_1,
        DEADLINE,
        { value: SWAP_AMOUNT }
    )

    return {
        statusCode: 200,
    }
}

exports.handler = schedule("@daily", handler)