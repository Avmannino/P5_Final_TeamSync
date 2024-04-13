// import React, { useEffect } from 'react';
// import Highcharts from 'highcharts';
// import DataGrid from '@highcharts/dashboards/datagrid';
// import LayoutModule from '@highcharts/dashboards/modules/layout';


// LayoutModule(Dashboards);

// Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
// Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

// Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
// Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

// export default function DashboardHC(props) {
//     const { config } = props;

//     useEffect(() => {

//         const board = Dashboards.board('container', config);


//         return () => {
//             board.destroy(); 
//         };
//     }, [config]); 

//     return (
//         <div></div> 
//     );
// }
