import { BlogPage, WelcomePage,  } from './';
import SecondPage from './SecondPage';
import  Blog2  from './Blog2';
import  ContactUs  from './../common/ContactUs';
export default {
  path: '',
  childRoutes: [
    { path: 'welcome', component: WelcomePage, isIndex: true },
    { path: 'second', component: SecondPage, isIndex: false },
    { path: 'blogs', component: BlogPage, isIndex: false },
    { path: 'blogs2', component: Blog2, isIndex: false },
    { path: 'ContactUs', component: ContactUs, isIndex: false },

  ],
};
