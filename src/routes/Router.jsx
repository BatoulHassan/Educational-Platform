import App from '../App';
import Main from './../modules/main/pages/Main'
import { newsRoutes } from '../modules/news/routes/newsRoutes';
import { aboutRoutes } from '../modules/about/routes/AboutRoutes';
import { coursesRoutes } from '../modules/courses/routes/CoursesRoutes';
import { studentsRoutes } from '../modules/students/routes/StudentsRoutes';
import { teachersRoutes } from '../modules/teachers/routes/TeachersRoutes';

export const routes = [
    {
        path: "/educational-platform/",
        element: <App />,
        children: [
            {
                path: "/educational-platform/",
                element: <Main />,
            },
            ...newsRoutes,
            ...aboutRoutes,
            ...coursesRoutes,
            ...studentsRoutes,
            ...teachersRoutes
        ]
    }
]
