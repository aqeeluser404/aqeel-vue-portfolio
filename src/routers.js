// import HomeCard from './components/HomeCard.vue'
import AboutCard from './components/AboutCard.vue'
import SkillsCard from './components/SkillsCard.vue'
import ProjectsCard from './components/ProjectsCard.vue'
import ContactCard from './components/ContactCard.vue'
import ThankCard from './components/ThankCard.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name : 'HomeCard',
        component : () => import('../src/components/HomeCard.vue'),
        path : '/'
    },
    {
        name : 'AboutCard',
        component : AboutCard,
        path : '/about'
    },
    {
        name : 'SkillsCard',
        component : SkillsCard,
        path : '/skills'
    },
    {
        name : 'ProjectsCard',
        component : ProjectsCard,
        path : '/projects'
    },
    {
        name : 'ContactCard',
        component : ContactCard,
        path : '/contact'
    },
    {
        name : 'ThankCard',
        component : ThankCard,
        path : '/thank-you'
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router