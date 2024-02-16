import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import HomeCard from './components/HomeCard.vue';
import AboutCard from './components/AboutCard.vue';
import SkillsCard from './components/SkillsCard.vue';
import ProjectsCard from './components/ProjectsCard.vue';
import ContactCard from './components/ContactCard.vue';
import ThankCard from './components/ThankCard.vue';

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

const router = createRouter({
  history: createWebHistory(),
  routes
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
