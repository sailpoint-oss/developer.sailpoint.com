/**
 * Swizzled from @docusaurus/theme-classic to raise the mobile-sidebar
 * breakpoint from 996px to 1410px, matching the CSS in custom.css that
 * hides navbar items and shows the hamburger toggle at that width.
 */
import React, {useEffect} from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
  useWindowSize,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';

const DESKTOP_BREAKPOINT = 1410;

export default function NavbarMobileSidebar() {
  const mobileSidebar = useNavbarMobileSidebar();
  const windowSize = useWindowSize({desktopBreakpoint: DESKTOP_BREAKPOINT});
  const shouldRender = !mobileSidebar.disabled && windowSize !== 'desktop';

  useEffect(() => {
    if (!shouldRender && mobileSidebar.shown) {
      mobileSidebar.toggle();
    }
  }, [shouldRender, mobileSidebar]);

  useLockBodyScroll(mobileSidebar.shown && shouldRender);

  if (!shouldRender) {
    return null;
  }
  return (
    <NavbarMobileSidebarLayout
      header={<NavbarMobileSidebarHeader />}
      primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
      secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
    />
  );
}
