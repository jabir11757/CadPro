import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import DownloadSoftware from "../pages/DownloadSoftware/DownloadSoftware";
import FAQs from "../pages/FAQs/FAQs";
import ImportPins from "../pages/ImportPins/ImportPins";
import PrintVouchers from "../pages/PrintVouchers/PrintVouchers";
import Settings from "../pages/Settings/Settings";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/importPins',
                element: <ImportPins />
            },
            {
                path: '/printVouchers',
                element: <PrintVouchers />
            },
            {
                path: '/settings',
                element: <Settings />
            },
            {
                path: '/faqs',
                element: <FAQs />
            },
            {
                path: '/downloadSoftware',
                element: <DownloadSoftware />
            }
        ]
    }
])