import { Icon } from '#icons';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SSidebar, SSidebarContainer, SSidebarLink } from './styled';

const SidebarLink = ({ href, currentPath, children }) => (
    <SSidebarLink $active={href === currentPath}>
        <Link href={href}>
            <a>{children}</a>
        </Link>
    </SSidebarLink>
);

export const Sidebar = () => {
    const router = useRouter();

    return (
        <SSidebarContainer>
            <SSidebar>
                <SidebarLink href="/" currentPath={router.pathname}>
                    Home
                </SidebarLink>
                <SidebarLink href="/steps" currentPath={router.pathname}>
                    Steps
                </SidebarLink>
                <SidebarLink href="/article" currentPath={router.pathname}>
                    Article
                </SidebarLink>
                <SidebarLink href="/design" currentPath={router.pathname}>
                    Design
                </SidebarLink>
                <SidebarLink href="/stack" currentPath={router.pathname}>
                    Stack
                </SidebarLink>
                <SidebarLink href="/about-me" currentPath={router.pathname}>
                    About me
                </SidebarLink>
                <SidebarLink href="/contact" currentPath={router.pathname}>
                    Contact
                </SidebarLink>
            </SSidebar>
        </SSidebarContainer>
    );
};
