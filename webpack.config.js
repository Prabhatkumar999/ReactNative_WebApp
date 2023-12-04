import { resolve } from './App';

export const entry = './App.js';
export const output = {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
};
