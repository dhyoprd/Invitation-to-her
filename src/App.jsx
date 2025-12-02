import React, { useState } from 'react';
import './App.css';
import HeartBackground from './components/HeartBackground';
import MusicPlayer from './components/MusicPlayer';
import Welcome from './pages/Welcome';
import Ask from './pages/Ask';
import Success from './pages/Success'; // Keeping this as a transition or removing if not needed, but user flow implies direct sequence
import Where from './pages/Where';
import Time from './pages/Time';
import Dresscode from './pages/Dresscode';
import Activity from './pages/Activity';
import Final from './pages/Final';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [page, setPage] = useState('welcome');
  const musicRef = React.useRef(null);

  const handleWelcomeNext = () => {
    setPage('ask');
    if (musicRef.current) {
      musicRef.current.play();
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'welcome': return <Welcome onNext={handleWelcomeNext} />;
      case 'ask': return <Ask onYes={() => setPage('where')} />;
      case 'where': return <Where onNext={() => setPage('time')} />;
      case 'time': return <Time onNext={() => setPage('dresscode')} />;
      case 'dresscode': return <Dresscode onNext={() => setPage('activity')} />;
      case 'activity': return <Activity onNext={() => setPage('final')} />;
      case 'final': return <Final />;
      default: return <Welcome onNext={() => setPage('ask')} />;
    }
  };

  return (
    <div className="app-container">
      <HeartBackground />
      <MusicPlayer ref={musicRef} />
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
