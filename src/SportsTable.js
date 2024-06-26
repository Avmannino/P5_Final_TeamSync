import React from 'react';
import ReactDOM from 'react-dom';
import './sportstable.css';
import data from './data.json';
import 'rsuite/styles/index.less'
import { Table, CustomProvider } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;


const SportsTable = () => {
    return (
      <CustomProvider theme="dark">
        <div className='sports-table'>
          <Table height={480} data={data} bordered={200} headerHeight={60} fontSize={45} >
            <Column width={0} align="center" resizable>
              <HeaderCell height={70}>Starting Lineup</HeaderCell>
              <Cell dataKey="id" />
            </Column>
  
            <Column width={200} resizable>
              <HeaderCell>Name</HeaderCell>
              <Cell dataKey="name" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>Position</HeaderCell>
              <Cell dataKey="position" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>#</HeaderCell>
              <Cell dataKey="number" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>Bats</HeaderCell>
              <Cell dataKey="bats" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>Age</HeaderCell>
              <Cell dataKey="age" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>Country</HeaderCell>
              <Cell dataKey="country" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>G</HeaderCell>
              <Cell dataKey="games" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>AB</HeaderCell>
              <Cell dataKey="ab" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>Runs</HeaderCell>
              <Cell dataKey="runs" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>Hits</HeaderCell>
              <Cell dataKey="hits" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>2B</HeaderCell>
              <Cell dataKey="doubles" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>3B</HeaderCell>
              <Cell dataKey="triples" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>HR</HeaderCell>
              <Cell dataKey="hr" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>RBI</HeaderCell>
              <Cell dataKey="rbi" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>BB</HeaderCell>
              <Cell dataKey="bb" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>SO</HeaderCell>
              <Cell dataKey="so" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>Avg.</HeaderCell>
              <Cell dataKey="avg" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>OBP</HeaderCell>
              <Cell dataKey="obp" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>SLG %</HeaderCell>
              <Cell dataKey="slg" />
            </Column>
  
            <Column width={125} resizable>
              <HeaderCell>OPS</HeaderCell>
              <Cell dataKey="ops" />
            </Column>
          </Table>
        </div>
      </CustomProvider>
    );
  };
  
  
  export default SportsTable;