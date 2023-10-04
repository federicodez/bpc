"use client";

import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();

  return (
    <div
      className="
        fixed 
        justify-between 
        w-full 
        bottom-0 
        z-40 
        flex 
        items-center 
        bg-[#03045e]
        shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]
        lg:hidden
      "
    >
      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          label={route.label}
          active={route.active}
          icon={route.icon}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
