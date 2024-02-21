import { createRouter, createWebHistory } from 'vue-router';

// components
import HomeCard from './components/HomeCard.vue';
import AboutCard from './components/AboutCard.vue';
import SkillsCard from './components/SkillsCard.vue';
import ProjectsCard from './components/ProjectsCard.vue';
import ContactCard from './components/ContactCard.vue';
import ThankCard from './components/ThankCard.vue';

// routes
const routes = [
  {
    name: 'HomeCard',
    component: HomeCard,
    path: '/'
  },
  {
    name: 'AboutCard',
    component: AboutCard,
    path: '/about'
  },
  {
    name: 'SkillsCard',
    component: SkillsCard,
    path: '/skills'
  },
  {
    name: 'ProjectsCard',
    component: ProjectsCard,
    path: '/projects'
  },
  {
    name: 'ContactCard',
    component: ContactCard,
    path: '/contact'
  },
  {
    name: 'ThankCard',
    component: ThankCard,
    path: '/thank-you'
  },
];


// Always allow router to start page from the top
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Reload back to homeCard
router.beforeEach((to, from, next) => {
    if (!from.name && to.name && to.name !== 'HomeCard') {
      next({ name: 'HomeCard' });
    } 
    else {
      next();
    }
});

export default router;
