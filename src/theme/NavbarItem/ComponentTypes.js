/**
 * Swizzled to register a custom navbar item type: `custom-megaDropdown`.
 * All built-in navbar item types are preserved from the original mapping.
 */
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import MegaDropdownNavbarItem from '@theme/NavbarItem/MegaDropdownNavbarItem';

export default {
  ...ComponentTypes,
  'custom-megaDropdown': MegaDropdownNavbarItem,
};
