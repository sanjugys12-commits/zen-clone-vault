import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';

const SimpleHome = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-foreground mb-4">Zenvve</h1>
      <p className="text-xl text-muted-foreground">LinkedIn Outreach Platform</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <main>
          <Routes>
            <Route path="/" element={<SimpleHome />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;