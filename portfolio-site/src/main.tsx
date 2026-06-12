import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import Portfolio from './Portfolio.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
