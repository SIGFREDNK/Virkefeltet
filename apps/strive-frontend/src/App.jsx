import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import path from './constants/path';
import { AnimatePresence } from 'framer-motion';

import Schedule from './pages/schedule';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Diary from './pages/diary';
import LandingPage from './pages/index/index';
import Login from './pages/entry/login';
import Signup from './pages/entry/signup';
import CreateTask from './pages/create/task';
import CreateHabit from './pages/create/habit';
import CreateProject from './pages/create/project';
import CreateSkill from './pages/create/skill';

import './App.css';

export default function App() {
    const [page, changePage] = useState(1);
    const [user, setUser] = useState(null);

    function setPage(page) {
        changePage(page);
    }

    const location = useLocation();

    return (
        <div className="app">
            <AnimatePresence exitBeforeEnter initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<LandingPage />} />
                    <Route
                        path={path.LOGIN}
                        element={
                            <Login
                                setUser={userData => {
                                    setUser(userData);
                                }}
                            />
                        }
                    />
                    <Route path={path.SIGNUP} element={<Signup />} />
                    <Route
                        path={path.SCHEDULE}
                        element={
                            <Schedule
                                pageNumber={page}
                                setPageNumber={setPage}
                                user={user}
                            />
                        }
                    />
                    <Route
                        path={path.PROJECTS}
                        element={
                            <Projects
                                pageNumber={page}
                                setPageNumber={setPage}
                                user={user}
                            />
                        }
                    />
                    <Route
                        path={path.SKILLS}
                        element={
                            <Skills
                                pageNumber={page}
                                setPageNumber={setPage}
                                user={user}
                            />
                        }
                    />
                    <Route
                        path={path.DIARY}
                        element={
                            <Diary
                                pageNumber={page}
                                setPageNumber={setPage}
                                user={user}
                            />
                        }
                    />
                    <Route path={path.CREATE_TASK} element={<CreateTask />} />
                    <Route path={path.CREATE_HABIT} element={<CreateHabit />} />
                    <Route
                        path={path.CREATE_PROJECT}
                        element={<CreateProject />}
                    />
                    <Route path={path.CREATE_SKILL} element={<CreateSkill />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}
