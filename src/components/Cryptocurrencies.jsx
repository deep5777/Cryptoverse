import React, { useEffect, useState } from 'react'
import millify from "millify"
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from "../services/cryptoapi"
import { Link } from "react-router-dom"



const Cryptocurrencies = ({ simplified }) => {

  const count = simplified ? 10 : 10;
  const { data: cryptoslist, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoslist?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filterdata = cryptos?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));
    setCryptos(filterdata);
  }, [searchTerm, cryptos]);


  console.log(cryptos);
  if (isFetching) return 'isLoading ... '
  return (
    <>
      {!simplified &&
        (<div className='search-crypto'>
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>)
      }
      <Row gutter={[32, 32]} className='crypto-card-container' >
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card title={`${currency.rank}.${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} alt="currency-image" />}
                hoverable
              >

                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>


              </Card>
            </Link>
          </Col>
        ))}
      </Row>

    </>
  )
}

export default Cryptocurrencies