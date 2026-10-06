import fs from 'fs';
import path from 'path';

// Load Module 1 data from robotics_module1.json
let mod1: any;
try {
    const raw = fs.readFileSync(path.join(__dirname, 'robotics_module1.json'), 'utf-8');
    mod1 = JSON.parse(raw);
} catch (e) {
    try {
        mod1 = require('./robotics_module1.json');
    } catch (err) {
        console.error('Failed to load robotics_module1.json:', err);
    }
}

export const robotics30DayModules = mod1 ? [mod1] : [];
