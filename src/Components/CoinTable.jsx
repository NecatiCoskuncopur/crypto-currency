import { Table } from 'antd';
import { styled } from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { useMediaQuery } from 'react-responsive';

import { colors, device } from '../theme';
import Text from './Text';

const CoinTable = ({ data }) => {
  const isTablet = useMediaQuery({
    query: `${device.tablet}`,
  });

  const isLaptop = useMediaQuery({
    query: `${device.laptop}`,
  });

  const columns = [
    {
      title: '#',
      dataIndex: 'market_cap_rank',
    },
    {
      title: '',
      dataIndex: 'image',
      render: (image) => (
        <img
          alt={image}
          src={image}
          width={30}
          height={30}
        />
      ),
    },
    {
      title: 'Ad',
      dataIndex: 'name',
    },
    {
      title: 'Fiyat',
      dataIndex: 'current_price',
      render: (current_price) => (
        <CurrencyFormat
          value={current_price}
          displayType={'text'}
          thousandSeparator={true}
          suffix={'$'}
          renderText={(value) => <Text value={value} />}
        />
      ),
    },
    {
      title: 'Fiyat Değişimi (24h)',
      dataIndex: 'price_change_24h',
      hidden: isTablet,
      render: (price_change_24h) => (
        <CurrencyFormat
          value={price_change_24h.toFixed(2)}
          displayType={'text'}
          thousandSeparator={true}
          suffix={'$'}
          renderText={(value) => (
            <Text
              isChange={true}
              data={price_change_24h}
              value={value}
            />
          )}
        />
      ),
    },
    {
      title: 'Fiyat Değişimi (24h)%',
      dataIndex: 'price_change_percentage_24h',
      hidden: isTablet,
      render: (price_change_percentage_24h) => (
        <Text
          isChange={true}
          data={price_change_percentage_24h}
          value={`${price_change_percentage_24h.toFixed(2)}%`}
        />
      ),
    },
    {
      title: 'Piyasa Değeri',
      dataIndex: 'market_cap',
      hidden: isLaptop,
      render: (market_cap) => (
        <CurrencyFormat
          value={market_cap}
          displayType={'text'}
          thousandSeparator={true}
          suffix={'$'}
          renderText={(value) => <Text value={value} />}
        />
      ),
    },
  ].filter((item) => !item.hidden);

  return (
    <Wrapper>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </Wrapper>
  );
};

export default CoinTable;

const Wrapper = styled.section`
  width: 80%;
  margin: 36px auto 50px;
  @media ${device.tablet} {
    width: 100%;
    font-size: 12px !important;
  }

  .ant-table-thead .ant-table-cell,
  .ant-table {
    background-color: transparent;
    color: ${colors.main};
    border-color: ${colors.mainLight};
    &:before {
      background-color: transparent !important;
    }
  }
  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td {
    background: unset !important;
  }
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: ${colors.ebonyClay} !important;
  }

  .ant-table-thead > tr.ant-table-row > td,
  .ant-table-tbody > tr.ant-table-row > td {
    border-color: ${colors.mainLight};
  }
`;
