import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

const container = document.getElementById('root');
if (!container) throw new Error('找不到 root 容器');

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerSW({
  onNeedRefresh() { console.log('有新版') },
  onOfflineReady() { console.log('離線可用') }
});
