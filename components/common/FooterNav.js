 import Link from "next/link";

const FooterNav = ({ menus }) => {
    return (
        <ul className="footer-navbar">
            {menus.map((menu) => {
                return (
                    <li key={menu.name}>
                        <Link as={`/${menu.slug}`} href={`/${menu.slug}`} prefetch={false}>
                            <a className="footer-navbar__link">{menu.name}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default FooterNav;