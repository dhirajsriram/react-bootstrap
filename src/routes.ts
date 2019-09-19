
import React from "react";
const Home = React.lazy(() => import("./pages/home/home"));

const routes = [
    {
        path: '/',
        component: Home
    },

]

export default routes;