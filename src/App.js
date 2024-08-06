import './App.css';
import Header from './Component/header.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { router } from './utils/router.tsx';

function App() {
  return (
    <div className="App h-full">
    <BrowserRouter>
      <Header>
        <Routes>
          {router?.map(r =>(
            <Route path={r?.path} index={r?.index} element={r?.element} />
          ))}
        </Routes>
      </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
