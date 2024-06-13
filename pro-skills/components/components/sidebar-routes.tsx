"use client";

import {Search, Layout, Book} from "lucide-react";
import {SidebarItem} from "./sidebar-item";

const guestRoutes = [
    {
        icon : Layout,
        label: "Dashboard",
        href : "/",
    },
    {
        icon : Search,
        label: "Browse",
        href : "/search",
    },
    {
        icon : Book,
        label: "My Learning",
        href : "/my-learning",
    },
]


export const SidebarRoutes = () => {
    const routes = guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
}