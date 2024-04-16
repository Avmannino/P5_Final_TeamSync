import React from 'react';
import ReactDOM from 'react-dom';
import './drawer.css';
import { Drawer, ButtonToolbar, Button, IconButton, Placeholder } from 'rsuite';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import AngleUpIcon from '@rsuite/icons/legacy/AngleUp';
import DashTimeline from './Timeline';
import Dash from './HighCharts';
import { HighchartsReact } from 'highcharts-react-official';

const TimeDrawer = () => {
    const [openRight, setOpenRight] = React.useState(false);
    const [openBottom, setOpenBottom] = React.useState(false);

    const handleOpenRight = () => {
        setOpenRight(true);
    };

    const handleOpenBottom = () => {
        setOpenBottom(true);
    };

    return (
        <div>
            <ButtonToolbar className='btn-toolbar'>
                <IconButton icon={<AngleRightIcon />} onClick={handleOpenRight}>
                    Right
                </IconButton>
                <IconButton icon={<AngleUpIcon />} onClick={handleOpenBottom}>
                    Bottom
                </IconButton>
            </ButtonToolbar>

            {/* Drawer that opens from the right */}
            <Drawer placement="right" open={openRight} size={650} onClose={() => setOpenRight(false)}>
                <Drawer.Header>
                    <Drawer.Title></Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={() => setOpenRight(false)}>Cancel</Button>
                        <Button onClick={() => setOpenRight(false)} appearance="primary">
                            Confirm
                        </Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <DashTimeline />
                </Drawer.Body>
            </Drawer>

            {/* Drawer that opens from the bottom */}
            <Drawer placement="bottom" open={openBottom} size={850} onClose={() => setOpenBottom(false)}>
                <Drawer.Header>
                    <Drawer.Title></Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={() => setOpenBottom(false)}>Cancel</Button>
                        <Button onClick={() => setOpenBottom(false)} appearance="primary">
                            Confirm
                        </Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                   <HighchartsReact />
                </Drawer.Body>
            </Drawer>
        </div>
    );
};

export default TimeDrawer;
