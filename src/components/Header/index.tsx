import React, {useEffect, useState} from "react";
import axios from "axios";
import { BaseURL } from '../../constants/Api';
import './header.css';
import {Spin} from "antd";
import {useStore} from "../../store";

async function getStats(coin: string, currency: string) {
  try {
    const { data } = await axios.get(`${BaseURL}markets?vs_currency=${currency}&ids=${coin}&price_change_percentage=24h`);
    return data[0];
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default function Header() {
  const [{ coinID, currency }] = useStore();
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getStats(coinID, currency);
      setCoinData(data);
      setLoading(false);
    };
    getData();
  }, [ coinID, currency ]);

  if (loading) return <Spin />;

  return (
    <div>
      <header>
        <span>{Number(coinData?.current_price.toFixed(2)).toLocaleString()}</span>
        <span className="currency">{currency.toUpperCase()}</span>
      </header>
      <div className={coinData?.price_change_24h > 0 ? "positive change" : "negative change"}>
        {coinData?.price_change_24h.toFixed(2)} ({coinData?.price_change_percentage_24h.toFixed(2)}%)
      </div>
    </div>
  );
}
