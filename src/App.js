import './App.css';
import Portfolio from './page/Portfolio';

import GlobalStyle from './style/GlobalStyle';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Information from './page/Information';
import Presentation from './page/Presentation';
import Resume from './page/Resume';
import NotFound from './page/NotFound';
import Portfolio1 from './page/portfolio-page/Portfolio1';

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/info' element={<Information/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/ppt' element={<Presentation/>}/>
        <Route path='/portfolio1' element={<Portfolio1/>}/>

      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
