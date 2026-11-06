# UI Plugins

UI Plugins let you extend the Identity Security Cloud (ISC) user interface with your own custom web applications. Rather than building a separate app that lives outside the platform, a UI plugin is a micro-frontend that ISC loads directly into designated **slots** in its UI — so your custom experience runs inside ISC, using the tenant's session and honoring its security model. UI Plugins are a licensed feature. 
The best way to interact with the UI Plugins API is to use the [SailPoint CLI](https://developer.sailpoint.com/docs/tools/cli). Alternatively, you can use the REST APIs for tenant UI plugin instance lifecycle (CRUD, alias validate/resolve, local-dev linking), asset bundle upload, and the static UI plugin slot registry.



```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
      