import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';
// Add tailwind dark mode class based on localStorage or system preference
if (localStorage.theme === 'dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
render(<App />, document.getElementById('root'));