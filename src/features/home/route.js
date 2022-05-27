import { WelcomePage, Collections } from './';

import ContactUs from './../common/ContactUs';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome', component: WelcomePage, isIndex: true },
    { path: 'ContactUs', component: ContactUs, isIndex: false },
    { path: 'shop', component: Collections, isIndex: false },
  ],
};
