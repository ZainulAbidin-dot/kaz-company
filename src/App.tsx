import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AppLayout } from './components/app-layout/app-layout';
import { HistoryPage } from './pages/history-page/history-page';
import { HomePage } from './pages/home-page/home-page';

function App() {
  return (
    <Router basename="">
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
