import { app } from '../src/firebase/firebase.js';

import './html-equal.js';

QUnit.done(() => {
    app.delete();
});