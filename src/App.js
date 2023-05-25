import { useEffect, useState } from 'react';
import axios from 'axios';

import { Cards, CoinTable, Header } from './Components';

const App = () => {
  const [data, setData] = useState([]);
  const [listFormat, setListFormat] = useState('table');
  const [search, setsearch] = useState('');

  useEffect(() => {
    const getData = async () => {
      axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false`).then((getData) => {
        setData(getData.data);
      });
    };
    getData();
  }, [data]);

  const handleListFormat = () => {
    const isCurrentTable = listFormat === 'table';
    setListFormat(isCurrentTable ? 'card' : 'table');
  };

  const filteredData = data?.filter((item) => item.name.toLowerCase().includes(search));

  return (
    <main>
      <Header
        listFormat={listFormat}
        handleListFormat={handleListFormat}
        setsearch={setsearch}
      />
      {filteredData && listFormat === 'table' && <CoinTable data={filteredData} />}
      {filteredData && listFormat === 'card' && <Cards data={filteredData} />}
    </main>
  );
};

export default App;
