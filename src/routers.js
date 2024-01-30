import HomeCard from './components/HomeCard.vue'
import AboutCard from './components/AboutCard.vue'
import SkillsCard from './components/SkillsCard.vue'
import ProjectsCard from './components/ProjectsCard.vue';

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name : 'HomeCard',
        component : HomeCard,
        path : '/'
    },
    {
        name : 'AboutCard',
        component : AboutCard,
        path : '/about-card'
    },
    {
        name : 'SkillsCard',
        component : SkillsCard,
        path : '/skills-card'
    },
    {
        name : 'ProjectsCard',
        component : ProjectsCard,
        path : '/projects-card'
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router