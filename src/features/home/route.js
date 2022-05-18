import { BlogPage, WelcomePage } from './';
import SecondPage from './SecondPage';
import  blog2  from './blog2';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome', component: WelcomePage, isIndex: true },
    { path: 'second', component: SecondPage, isIndex: false },
    { path: 'blogs', component: BlogPage, isIndex: false },
    { path: 'blogs2', component: blog2, isIndex: false },
  ],
};
