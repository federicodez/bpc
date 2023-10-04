import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import spine from "@/app/images/spine.png";
import { useTranslation } from "react-i18next";
import { FaUserDoctor } from "react-icons/fa6";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Procedures",
        href: "/procedures",
        icon: FaUserDoctor,
        active: pathname === "/procedures",
      },
      {
        label: "Home",
        href: "/",
        icon: FaUserDoctor,
        active: pathname === "/",
      },
      {
        label: "Contact Us",
        href: "/contact",
        icon: MdOutlineContactPhone,
        active: pathname === "/contact",
      },
    ],
    [pathname],
  );

  return routes;
};

export default useRoutes;
