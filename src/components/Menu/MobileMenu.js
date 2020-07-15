import React from 'react';
import { MenuNavigationMobile } from '../Menu/MenuStyles';

export default function MobileMenu({ children }) {
    return (
        <MenuNavigationMobile>
            {children}
        </MenuNavigationMobile>
    )
}
