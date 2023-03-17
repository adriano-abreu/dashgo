import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import { Header } from '../components/Header/';
import { Sidebar } from '../components/Sidebar';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },

  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },

  xaxis: {
    axisBorder: {
      color: theme.colors.gray[600],
    },

    axisTicks: {
      color: theme.colors.gray[600],
    },

    categories: ['10/03', '11/03', '12/03', '13/03', '14/03', '15/03', '16/03'],
  },

  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacity: 0.3,
    },
  },
};

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109],
  },
];

export default function dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={['6', '8']} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={['6', '8']} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
