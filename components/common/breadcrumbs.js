import React, { Children } from "react";
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from "next/link";
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
const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <ul className="breadcrumbs">
            {breadcrumbs.map((itm) => {
                return (
                    <li key={itm.name} className="breadcrumbs__item">
                        <ActiveLink activeClassName="current" as={`${itm.slug}`} href={`${itm.slug}`}>
                            <a className="breadcrumbs__link">{itm.name}</a>
                        </ActiveLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default Breadcrumbs;