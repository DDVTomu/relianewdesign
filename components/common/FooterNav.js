import Link from "next/link";

const FooterNav = ({ menus }) => {
  return (
    <ul className="footer-navbar">
      {menus.map((menu, key) => {
        return (
          <li key={key}>
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
