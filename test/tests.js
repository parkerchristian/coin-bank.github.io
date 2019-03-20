import { app } from '../src/firebase/firebase.js';

import './html-equal.js';
import './templates/user-profile.test.js';
import './templates/character-card.test.js';
import './query/query.test.js';
import './api-url/api-url.test.js';
import './objects-to-array/objects-to-array.test.js';
import './templates/select-character.test.js';
import './templates/match-list.test.js';
import './templates/banners.test.js';

QUnit.done(() => {
    app.delete();
});