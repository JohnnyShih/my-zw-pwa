import React from 'react';
import BoardResult from './components/BoardResult';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>紫微排盤 PWA</h1>
      <BoardResult />
    </div>
  );
};

export default App;

