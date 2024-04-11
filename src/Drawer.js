import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './drawer.css';
import { Drawer, RadioGroup, Radio, ButtonToolbar, Button, IconButton, Placeholder } from 'rsuite';
import DashTimeline from './Timeline';



const RadioLabel = ({ children }) => <label style={{ padding: 7 }}>{children}</label>;

const TimeDrawer = () => {
    const [size, setSize] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState('right');

    const handleOpen = value => {
        setSize(value);
        setOpen(true);
    };

    return (
        <>
            <RadioGroup inline appearance="picker" value={placement} onChange={setPlacement}>
            </RadioGroup>
            <hr />
            <ButtonToolbar>
                <Button style={{position: 'relative', width: '200px', height:'65px', top: '18vh', left: '40vw', fontFamily: 'Dashboard'}} onClick={() => handleOpen(800)}>
                    <code>Upcoming Games</code>
                </Button>
            </ButtonToolbar>

            <Drawer size={size} placement={placement} className='draw-it' open={open} onClose={() => setOpen(false)}>
                <div className="drawer-content" style={{ backgroundColor: '#333333' }}>
                    <Drawer.Header>
                        <Drawer.Title>UPCOMING GAMES</Drawer.Title>
                        <Drawer.Actions>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button onClick={() => setOpen(false)} appearance="primary">
                                Confirm
                            </Button>
                        </Drawer.Actions>
                    </Drawer.Header>
                    <Drawer.Body>
                        <DashTimeline />
                    </Drawer.Body>
                </div>
            </Drawer>
        </>
    );
};

export default TimeDrawer;
