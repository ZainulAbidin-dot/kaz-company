import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AppLayout } from './components/app-layout/app-layout';
import { HistoryPage } from './pages/history-page/history-page';
import { HomePage } from './pages/home-page/home-page';
import { JobPage } from './pages/jobs/page';
import { AboutPage } from './pages/about-page/about';
import { SolutionPage } from './pages/solution-page/solution-page';

function App() {
  return (
    <Router basename="">
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
