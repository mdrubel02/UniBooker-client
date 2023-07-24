import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../page/Home/Home";
import Colleges from "../../page/Colleges/Colleges";
import Admission from "../../page/Admission/Admission";
import MyCollege from "../../page/MyCollege/MyCollege";
import CollegeDetails from "../../page/Colleges/CollegeDetails";

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/college', element: <Colleges /> },
        { path: '/admission', element: <Admission /> },
        { path: '/myCollege', element: <MyCollege /> },
        {
            path:'/collegeDetails/:id',
            element:<CollegeDetails></CollegeDetails>,
            loader:({params}) =>fetch(`http://localhost:5000/collegeDetails/${params.id}`)
        },
    ]
}
]);
export default router;