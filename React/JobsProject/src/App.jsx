import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router} from 'react-router-dom';
import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
//https://www.youtube.com/watch?v=LDB4uaJ87e0
//1:59:48

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return (<RouterProvider router={router}/>
  )
}

export default App