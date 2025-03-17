import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AppLayout } from './components/app-layout/app-layout';
import { HistoryPage } from './pages/history-page/history-page';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about';

function App() {
  return (
    <Router basename="">
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
