"use client";

import {LucideIcon} from "lucide-react";
import {usePathname,useRouter} from "next/navigation";
import {cn} from "@/lib/utils";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItem = ({icon: Icon, label, href} : SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === "/" && href === "/") || pathname === href || pathname.startsWith('${href}'); 
    // kiem tra xem ta co dang o rootpage hay khong , pathname cua ta co bang href hay khong
    // kiem tra xem pathname la duong dan goc den 1 trang cu the

    const onClick = () => {
        router.push(href);
    }
    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 tranition-all hover:text-slate-600 hover:bg-slate-300/20",
                isActive && "bg-sky-200/20 hover:bg-sky-200/20 ",  
            )}
            style={{ borderColor: isActive ? "#12B7BD" : "transparent" }}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon 
                    size={20} 
                    className={cn(
                        "text-slate-500",
                        isActive && ""
                    )}
                    style={{ color: isActive ? "#12B7BD" : undefined }}
                />
            <span style={{ color: isActive ? "#12B7BD" : undefined }}>{label}</span>
            </div>
            <div className={cn(
                "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
                isActive && "opacity-100"
                )}
                style={{ borderColor: isActive ? "#12B7BD" : "transparent" }}
            />
        </button>
    )
}