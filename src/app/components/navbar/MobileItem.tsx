import Link from "next/link";

import clsx from "clsx";

interface MobileItemProps {
  label: string;
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        `
        group 
        flex 
        flex-col
        items-center
        gap-x-3 
        text-sm 
        leading-6 
        font-semibold 
        w-full 
        justify-center 
        p-4 
        text-white
        hover:bg-gray-500
      `,
        active && "bg-gray-500 text-white",
      )}
    >
      <Icon className="h-6 w-6" />
      <span>{label}</span>
    </Link>
  );
};

export default MobileItem;
