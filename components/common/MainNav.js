import React, { Children } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter()
    const child = Children.only(children)
    const childClassName = child.props.className || ''
    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName

    return (
        <Link {...props} prefetch={false}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    )
}

const MainNav = ({ menus }) => {
    return (
        <ul className="navbar">
            {menus.map((menu) => {
                return (
                    <li key={menu.name}>
                        <ActiveLink activeClassName="active" as={`${menu.slug}/`} href={`${menu.slug}/`}>
                            <a className="navbar__link">{menu.name}</a>
                        </ActiveLink>
                    </li>
                );
            })}
            <li>
                <Link href="/contact" prefetch={false}>
                    <a className="btn btn--primary btn--header">Contact</a>
                </Link>
            </li>
        </ul>
    );
};

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
}

export default MainNav;