// import "./VideoPage.css";
// import Header from "./components/Header";
// // import RecommendedVideos from "./components/RecommendedVideos";
// import Sidebar from "./components/Sidebar";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useContext } from "react";


// //redux
// // import { Provider } from "react-redux";


// function VideoPage() {
//   return (
//     <Provider store={store}>
//         <Paper style={{ height: "100vh" }}>
//           <div className="App">
//             <Router>
//               <Header />
//               <Switch>
//                 <Route exact path="/">
//                   <div className="app__page">
//                     <Sidebar />
//                     <RecommendedVideos />
//                   </div>
//                 </Route>
//                 <Route exact path="/search">
//                   <div className="app__page">
//                     <Sidebar />
//                     <SearchPage />
//                   </div>
//                 </Route>
//                 <Route path="/search/:searchTerm">
//                   <div className="app__page">
//                     <Sidebar />
//                     <SearchPage />
//                   </div>
//                 </Route>
//               </Switch>
//             </Router>
//           </div>
//         </Paper>
//     </Provider>
//   );
// }

// export default VideoPage;