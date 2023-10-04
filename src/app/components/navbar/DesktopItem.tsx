import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import spine from "@/app/images/spine.png";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  href,
  icon: Icon,
  active,
}) => {
  return (
    <li key={label}>
      <Link
        href={href}
        className={clsx(
          `
            group 
            flex 
            flex-row
            items-center
            gap-x-3 
            rounded-md 
            p-3 
            text-sm 
            leading-6 
            font-semibold 
            text-white
            hover:bg-gray-900
          `,
          active && "bg-gray-900 text-white",
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="text-center">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
