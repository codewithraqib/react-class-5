import { WelcomePage,  } from './';
import  ContactUs  from './../common/ContactUs';
import NewPage from './NewPage';
export default {
  path: '',
  childRoutes: [
    { path: 'welcome', component: WelcomePage, isIndex: true },
    { path: 'ContactUs', component: ContactUs, isIndex: false },
    { path: 'newpage', component: NewPage, isIndex: false },


  ],
};
