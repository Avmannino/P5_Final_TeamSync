import React from 'react';
import ReactDOM from 'react-dom';
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

            <ButtonToolbar>
                <Button className='games-btn' onClick={() => handleOpen(300)}>
                    <code style={{ color: '#fff' }}>Upcoming Series</code>
                </Button>
            </ButtonToolbar>

            <Drawer size={size} placement={placement} className='draw-it' open={open} onClose={() => setOpen(false)}>
                <div className="drawer-content" style={{ backgroundColor: '#333333' }}>
                    <Drawer.Header>
                        <Drawer.Title></Drawer.Title>
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
