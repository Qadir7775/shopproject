import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Layout from "../components/Layouts";
import Order from "../pages/dashboard/orders";
import Wishlist from "../pages/dashboard/wishlist";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import AccountLayout from "../components/MyAccount";
import AccountEdit from "../pages/dashboard/accountEdit";
import EditAddress from './../pages/dashboard/editAddress/index';





export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout>
            <Home />
        </Layout>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Layout>
            <AccountLayout>
                <Dashboard />
            </AccountLayout>
        </Layout>
    },
    {
        path: '/dashboard/orders',
        element: <Layout>
            <AccountLayout>
                <Order />
            </AccountLayout>
        </Layout>
    },
    {
        path: '/dashboard/wishlist',
        element: <Layout>
            <AccountLayout>
                <Wishlist />
            </AccountLayout>
        </Layout>
    },
    {
        path: '/dashboard/accountEdit',
        element: <Layout>
            <AccountLayout>
                <AccountEdit />
            </AccountLayout>
        </Layout>
    },
    {
        path: '/dashboard/editAddress',
        element: <Layout>
            <AccountLayout>
                <EditAddress />
            </AccountLayout>
        </Layout>
    },
    {
        path: '/login',
        element: <Layout>
            <Login />
        </Layout>
    }
])



//diger sehifelerinde hansinda header ve footer olacaqsa elementi yazanda onu Layout komponenti icerisinde yaz. Diger sehifelerin jsx kodlarini duzelderken ise Header, Footer xaric ortada qalan main icerisinde olan kodlari at html to jsx a cevirib onu page e elave et


// bildin edeceyin duzelisleri?bildim .derse kimi bitir, nese sualin olsa yaz oldu .