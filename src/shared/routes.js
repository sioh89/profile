import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Lab from './lab/Lab';
import NotFound from './notfound/NotFound';
import Ongoing from './ongoing/Ongoing';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/lab',
    component: Lab,
  },
  {
    path: '/notfound',
    component: NotFound,
  },
  {
    path: '/ongoing',
    component: Ongoing,
  },
];

export default routes;