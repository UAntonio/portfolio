import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProjectListView from 'src/views/projects/ProjectListView';
import AboutView from 'src/views/about/AboutView';
import EducationView from 'src/views/education/EducationView';
import SkillsView from 'src/views/skills/SkillsView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'about', element: <AboutView /> },
      { path: 'experience', element: <ProjectListView /> },
      { path: 'projects', element: <ProjectListView /> },
      { path: 'skills', element: <SkillsView /> },
      { path: 'education', element: <EducationView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/projects" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
