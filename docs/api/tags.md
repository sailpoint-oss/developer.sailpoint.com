# Tags

Use this API to manage the tags available in your Identity Security Cloud tenant.

A tag is a reusable label, such as `PCI` or `SOX`, that you can apply to objects like identities, roles, access profiles, entitlements, and sources to group them and find them more quickly when you search Identity Security Cloud. These APIs manage the tags themselves. To apply tags to objects or remove them from objects, use the Tagged Objects APIs.

Tag names are normalized when a tag is created: spaces are replaced with underscores, letters are converted to uppercase, and any character other than A-Z, 0-9, and underscore is removed. For example, `pci data` becomes `PCI_DATA`. The normalized name must be between 3 and 128 characters long.

A tag can't be deleted while it's still applied to any object. Remove the tag from those objects first.

Refer to [Tagging Items in Search](https://documentation.sailpoint.com/saas/help/search/index.html?h=tags#tagging-items-in-search) for more information about tagging objects in Identity Security Cloud.




```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
      