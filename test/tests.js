import { app } from '../src/firebase/firebase.js';

import './html-equal.js';
import './templates/user-profile.test.js';

QUnit.done(() => {
    app.delete();
});