import {  WelcomePage, Mypage } from './';
export default {
  path: '',
  childRoutes: [
    { path: 'welcome', component: WelcomePage, isIndex: true },
    {path: 'mypage1', component: Mypage, isIndex: false},

  ],
};
