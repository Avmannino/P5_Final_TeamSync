import React from 'react';
import './Dashboard.css';
import llamas from './assets/llamas_logo.png';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { DayClickEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import NavSide from './NavSide';
import Table from './SportsTable';
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  ChakraProvider,
  Flex,
  Grid,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Link,
  Stack,
  VStack,
  Text,
  extendTheme,
} from '@chakra-ui/react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { color } from 'chart.js/helpers';
import SportsTable from './SportsTable';

// Define the Sidebar component
const Sidebar = () => {
  return (
    <Box w="425px" h="150vh" zIndex='base' bg="#3d485c;" color="white" align="center" borderRight='6px solid #2b1f3c' position='absolute' top='0vh' left='0vw'>
      <VStack p="5" align="stretch">
        <Stack spacing={10} textAlign="left" position='relative' top='20vh' left='0vw'>
          <Link fontSize='30px'>Announcements</Link>
          <Link fontSize='30px'>Injuries</Link>
          <Link fontSize='30px'>Calendar</Link>
          <Link fontSize='30px'>Recruitment</Link>
        </Stack>
      </VStack>
    </Box>
  );
};



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Bar Chart Data
const barData = {
  labels: ['Ramsey', 'McDonaugh', 'Velasquez', 'Green', 'Peterson', 'Johnson'],
  datasets: [
    {
      label: 'Team Leaders - Home Runs',
      data: [37, 31, 29, 15, 7, 6],
      backgroundColor: [
        '#410069',
        '#410069',
        '#410069',
        '#410069',
        '#410069',
        '#410069',
      ],
      borderColor: [
        '#00d5ffa7',
        '#00d5ffa7',
        '#00d5ffa7',
        '#00d5ffa7',
        '#00d5ffa7',
        '#00d5ffa7',
      ],
      borderWidth: 2,
      borderRadius: 3,
      fontFamily: Dashboard,
      fontSize: 30
    },
  ],
};

// Line Chart Data
const lineData = {
  labels: ['Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.'],
  datasets: [
    {
      label: 'Bullpen ERA',
      data: [0.12, 1.35, 1.97, 2.31, 3.59, 4.78],
      fill: false,
      borderColor: '#410069',
      tension: 0.3,
    },
  ],
};


const playerStats = [
  {
    id: 1,
    name: 'Mike Ramsey',
    position: 'SS',
    number: 10,
    bats: 'R',
    age: 25,
    country: 'USA',
    games: 100,
    ab: 300,
    runs: 50,
    hits: 100,
    doubles: 20,
    triples: 5,
    hr: 37,
    rbi: 92,
    bb: 30,
    so: 50,
    avg: 0.303,
    obp: 0.400,
    slg: 0.500,
    ops: 0.900
  },
  {
    id: 2,
    name: 'Jordan McDonaugh',
    position: '1B',
    number: 25,
    bats: 'L',
    age: 28,
    country: 'Canada',
    games: 110,
    ab: 320,
    runs: 60,
    hits: 110,
    doubles: 25,
    triples: 3,
    hr: 31,
    rbi: 45,
    bb: 35,
    so: 60,
    avg: 0.244,
    obp: 0.410,
    slg: 0.520,
    ops: 0.930
  },
  {
    id: 3,
    name: 'Nick Green',
    position: 'C',
    number: 8,
    bats: 'R',
    age: 27,
    country: 'USA',
    games: 98,
    ab: 290,
    runs: 45,
    hits: 95,
    doubles: 15,
    triples: 7,
    hr: 15,
    rbi: 38,
    bb: 25,
    so: 48,
    avg: 0.328,
    obp: 0.390,
    slg: 0.510,
    ops: 0.900
  },
  {
    id: 4,
    name: 'Fernando Velasquez',
    position: '2B',
    number: 4,
    bats: 'R',
    age: 26,
    country: 'Mexico',
    games: 105,
    ab: 310,
    runs: 55,
    hits: 105,
    doubles: 22,
    triples: 4,
    hr: 29,
    rbi: 42,
    bb: 30,
    so: 55,
    avg: 0.239,
    obp: 0.400,
    slg: 0.498,
    ops: 0.898
  },
  {
    id: 5,
    name: 'Ben Peterson',
    position: 'RF',
    number: 19,
    bats: 'L',
    age: 29,
    country: 'USA',
    games: 95,
    ab: 280,
    runs: 50,
    hits: 90,
    doubles: 18,
    triples: 2,
    hr: 7,
    rbi: 55,
    bb: 40,
    so: 70,
    avg: 0.321,
    obp: 0.380,
    slg: 0.570,
    ops: 0.950
  },
  {
    id: 6,
    name: 'Tim Johnson',
    position: '3B',
    number: 17,
    bats: 'R',
    age: 27,
    country: 'Canada',
    games: 102,
    ab: 310,
    runs: 58,
    hits: 110,
    doubles: 20,
    triples: 6,
    hr: 14,
    rbi: 48,
    bb: 35,
    so: 65,
    avg: 0.355,
    obp: 0.410,
    slg: 0.540,
    ops: 0.950
  },
  {
    id: 7,
    name: 'Colin Morrosey',
    position: 'LF',
    number: 21,
    bats: 'L',
    age: 26,
    country: 'USA',
    games: 97,
    ab: 290,
    runs: 52,
    hits: 100,
    doubles: 24,
    triples: 4,
    hr: 11,
    rbi: 40,
    bb: 35,
    so: 55,
    avg: 0.345,
    obp: 0.410,
    slg: 0.520,
    ops: 0.930
  },
  {
    id: 8,
    name: 'Shinju Natomaki',
    position: 'CF',
    number: 12,
    bats: 'R',
    age: 30,
    country: 'JAP',
    games: 93,
    ab: 280,
    runs: 48,
    hits: 95,
    doubles: 16,
    triples: 5,
    hr: 1,
    rbi: 20,
    bb: 30,
    so: 90,
    avg: 0.339,
    obp: 0.400,
    slg: 0.505,
    ops: 0.905
  },
  {
    id: 8,
    name: 'Adam Farrell',
    position: 'DH',
    number: 35,
    bats: 'R',
    age: 28,
    country: 'USA',
    games: 93,
    ab: 280,
    runs: 48,
    hits: 95,
    doubles: 16,
    triples: 5,
    hr: 6,
    rbi: 40,
    bb: 30,
    so: 60,
    avg: 0.339,
    obp: 0.400,
    slg: 0.505,
    ops: 0.905
  }

]

const bookedDays = [new Date(2024, 3, 2), new Date(2024, 3, 3), new Date(2024, 3, 11), new Date(2024, 3, 12), new Date(2024, 3, 13), new Date(2024, 3, 16), new Date(2024, 3, 15), new Date(2024, 3, 16), new Date(2024, 3, 28), new Date(2024, 3, 29), new Date(2024, 3, 30)];
const bookedStyle = { border: '2.2px dashed #ce6c88' };


// Extend the theme to set the font family
const customTheme = extendTheme({
  fonts: {
    body: '"Dashboard", sans-serif',
    heading: '"Dashboard", sans-serif',
  },
});

export default function Dashboard() {
  const [booked, setBooked] = React.useState(false);

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    setBooked(day && modifiers.booked);
  };

  const footer = booked
    ? 'Gameday'
    : '';


  const [selected, setSelected] = useState(Date());
  return (
    <ChakraProvider theme={customTheme} bg='black'>
      <Box>
        <div className='llamas-box'>
          <img src={llamas} alt='LL' className='llamas' />
          <h1 className='llamas-header'>
            The Las Vegas Llamas
          </h1>
          <h4 className='llamas-location'>
            Las Vegas, Nevada
          </h4>
          <p className='llamas-record-head'>Win Loss</p>
          <p className='llamas-record'>2023: 46  78</p>
        </div>
      </Box>

      <Flex>
        {/* Render the Sidebar */}
        {/* <Sidebar /> */}
          <NavSide />
        <Box flex="1" p={0}>
          <InputGroup mb={0} w="12.5%" h='4%' position='absolute' left='1vw' top='45vh' fontSize='25px' borderRadius='10px'>
            <Input placeholder="Search..." />
            <InputRightElement children={<Button colorScheme="blue" h='3vh' width='2.2vw' position='absolute' left='2vw' top='0.2vh' backgroundColor='transparent' border='.5px solid white' fontSize='10px' borderRadius='10'>Search</Button>} />
          </InputGroup>
          <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} h='45%' w='35%' >
            <Box boxShadow="base" borderRadius="15px" p={0} h='50%' w='250%' marginLeft="65vw" marginTop="65vh" fontSize='25px' position='static'>
              <Bar data={barData} />
            </Box>
            <Box boxShadow="base" borderRadius="l5px" p={4} w='230%' marginLeft="2vw" marginTop='65vh'>
              <Line data={lineData} />
            </Box>
            <Box flex="1" p={0}><SportsTable /></Box>
            {/* <Box boxShadow="base" p={4} overflowY="auto" height="34%" width="1850px" position='relative' marginTop="170vh" marginLeft="-4.5vw" border="3px solid black" backgroundColor='#4b4b4b76' borderRadius="17px">
              <Table variant="simple" className="custom-table" border="4px" borderColor="#fee5b4" borderRadius="md" color='red' bg="#003e705a" width="100%">
                <TableCaption placement="top" marginRight="0%" marginTop='-1%' fontSize='30px'>Player Statistics</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Pos</Th>
                    <Th>Number</Th>
                    <Th>Bats</Th>
                    <Th>Age</Th>
                    <Th>Country</Th>
                    <Th>Games</Th>
                    <Th>AB</Th>
                    <Th>R</Th>
                    <Th>H</Th>
                    <Th>2B</Th>
                    <Th>3B</Th>
                    <Th>HR</Th>
                    <Th>RBI</Th>
                    <Th>BB</Th>
                    <Th>SO</Th>
                    <Th>AVG</Th>
                    <Th>OBP</Th>
                    <Th>SLG</Th>
                    <Th>OPS</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {playerStats.slice(0, 12).map((player) => (
                    <Tr key={player.id}>
                      <Td>{player.name}</Td>
                      <Td>{player.position}</Td>
                      <Td>{player.number}</Td>
                      <Td>{player.bats}</Td>
                      <Td>{player.age}</Td>
                      <Td>{player.country}</Td>
                      <Td>{player.games}</Td>
                      <Td>{player.ab}</Td>
                      <Td>{player.runs}</Td>
                      <Td>{player.hits}</Td>
                      <Td>{player.doubles}</Td>
                      <Td>{player.triples}</Td>
                      <Td>{player.hr}</Td>
                      <Td>{player.rbi}</Td>
                      <Td>{player.bb}</Td>
                      <Td>{player.so}</Td>
                      <Td>{player.avg}</Td>
                      <Td>{player.obp}</Td>
                      <Td>{player.slg}</Td>
                      <Td>{player.ops}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box> */}

            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
              <Box position="relative" fontSize="20px" style={{ zIndex: 9999 }}>
                <Box position="absolute" top="-45vh" left="-3.5vw" backgroundColor='#af113f' borderRadius='35px' width='12%' height='2%' color='white'>
                  <DayPicker
                    defaultMonth={new Date(2024, 3, 18)}
                    modifiers={{ booked: bookedDays }}
                    modifiersStyles={{ booked: bookedStyle }}
                    onDayClick={handleDayClick}
                    footer={footer}

                  />
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Flex>
    </ChakraProvider >
  );
}
