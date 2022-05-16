import { BlogPage, WelcomePage } from './';
import SecondPage from './SecondPage';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome', component: WelcomePage, isIndex: true },
    { path: 'second', component: SecondPage, isIndex: false },
    { path: 'blogs', component: BlogPage, isIndex: false },
  ],
};
