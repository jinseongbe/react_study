import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text',
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
    },
    {
        title: 'Canvas',
        path: '/canvas',
        icon: <MdIcons.MdDraw />,
        cName: 'nav-text',
    },
    {
        title: 'Messages',
        path: '/Messages',
        icon: <FaIcons.FaEnvelopeOpen />,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/suppoer',
        icon: <IoIcons.IoMdHelpCircle    />,
        cName: 'nav-text',
    },
]