import millify from "millify"
import { Typography, Row, Col, Statistic } from 'antd'
import { useGetCryptosQuery } from "../services/cryptoapi"
import Cryptocurrencies from "./Cryptocurrencies"
const { Title } = Typography

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalstate = data?.data?.stats

  console.log(data);

  if (isFetching) {
    return 'Loading ... '
  }

  return (
    <>
      <Title level={2} className="heading">Global Crypto stats
      </Title>

      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalstate.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalstate.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={millify(globalstate.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalstate.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalstate.totalMarkets)} /></Col>
      </Row>

      <Title level={2} className="heading">Top 10 CryptoCurrencies
      </Title>

      <Cryptocurrencies simplified />


    </>

  )
}

export default Homepage