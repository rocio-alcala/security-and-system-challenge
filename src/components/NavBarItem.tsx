import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "../components/NavBarItem.module.css";

interface NavBarItemProps {
  active?: boolean;
  href: string;
}

export default function NavBarItem({
  children,
  active,
  href,
}: NavBarItemProps & PropsWithChildren) {
  return (
    <Link
      href={href}
      className={`${styles.navBarItem} ${active && styles.active}`}
    >
      {children}
    </Link>
  );
}
