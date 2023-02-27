import { useState, useEffect } from "react";
import '../component/coins.css'
const Coins = () => {
    let [coin,setCoin] = useState([])
    let [count,setCount]=useState(0)
    let[coin1,setCoin1] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`https://api.coinranking.com/v2/coins`)
            let data = await response.json()
            setCoin(data.data.coins)
            setCoin1(data.data.stats)
        }
        fetchData()
    },[coin])
    let buy=()=>{
        setCount(count+1)
    }
    return (
        <div className="coins">
            <h1>Crypto</h1>
            <h1>Cart:{count}</h1>
            {
                coin.map((data) => (
                    <div className="box">
                        <div className="image">
                        <img src={data.iconUrl} alt="" />
                        <h1>{data.name}</h1>
                        </div>
                        <div className="desc">
                        <div>
                            <h1>USD</h1>
                        <h1>{(data.price).slice(1,8)}</h1>
                        </div>
                        <div>
                            <h1>INR</h1>
                            <h1>{(data.price*82.86)}</h1>
                        </div>
                        <div>
                            <h1>EUR</h1>
                            <h1>{(data.price*0.93)}</h1>
                        </div>
                        </div>
                        <button onClick={buy}>Buy Now</button>
                    </div>
                ))
            }
            <h1>Statistics</h1>
            <div className="stat">
                <div>
                <h1>Total:{coin1.total}</h1>
                </div>
                <div>
                <h1>Total Markets:{coin1.totalMarkets}</h1> 
                </div>
                <div>
                <h1>Total Exchanges:{coin1.totalExchanges}</h1>
                </div>
                <div>
                <h1>Total Coins:{coin1.totalCoins}</h1>
                </div>
            </div>
        </div>
    );
}
export default Coins;