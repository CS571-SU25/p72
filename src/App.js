import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Page-home';
import About from './Page-about';


import EAToday from "./Page-eaToday"
import EchoArk from './Page-echoArk';



import Login from './Login/login';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="/login" element={<PageWrapper title="" children={<Login />} />} />
        <Route path="/home" element={<PageWrapper title="" children={<Home />} />} />
        <Route path="/about" element={<PageWrapper title="" children={<About />} />} />
        {/* <Route path="/buildpage" element={<PageWrapper title="" children={<BuildPage />} />} /> */}
        {/* <Route path="/teabreak" element={<PageWrapper title="" children={<TeaBreak />} />} /> */}
        
        <Route path="/eaToday" element={<PageWrapper title="" children={<EAToday />} />} />
        <Route path="/echoArk" element={<PageWrapper title="" children={<EchoArk />} />} />
        
        
      </Routes>
      
    </HashRouter>
  );
}

function PageWrapper({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return children;
}

export default App;