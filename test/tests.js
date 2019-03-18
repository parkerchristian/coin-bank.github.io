import { app } from '../src/firebase/firebase.js';

import './html-equal.js';
import './templates/user-profile.test.js';
import './templates/character-card.test.js';
import './query/query.test.js';
import './api-url/api-url.test.js';

QUnit.done(() => {
    app.delete();
});