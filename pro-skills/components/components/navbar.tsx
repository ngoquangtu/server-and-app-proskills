import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoutes } from "@/components/navbar-routes";
import Link from 'next/link';

export const Navbar = () => {
  const links : typeof Link[] = [
    { title: 'Profile', url: '/profile' },
    { title: 'Dashboard', url: '/user' },
    { title: 'Admin Dashboard', url: '/admin', role: 'admin' },
  ];

    return (
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
     );
}