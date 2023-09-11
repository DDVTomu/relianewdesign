import Link from "next/link";

const FooterNav = ({ menus }) => {
  return (
    <ul className="footer-navbar">
      {menus.map((menu, key) => {
        let menuLink = menu.external ? menu.slug : `/${menu.slug}`;
        return (
          <li key={key}>
            <a href={menuLink} className="footer-navbar__link">{menu.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterNav;
