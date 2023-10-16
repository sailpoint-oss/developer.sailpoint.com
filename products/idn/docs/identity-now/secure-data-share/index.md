---
id: secure-data-share
title: Secure Data Share
pagination_label: Secure Data Share
sidebar_label: Secure Data Share
sidebar_position: 6
sidebar_class_name: secureDataShare
keywords: ['data listing', 'data share', 'secure data sharing']
description: Secure Data Share is an easy way to get IDN data of your organization in a structured format.
slug: /docs/secure-data-share
tags: ['SecureDataShare']
hide_table_of_contents: true
---

import MermaidViewer from '@site/src/components/MermaidViewer';

Secure Data Sharing (SDS) makes SailPoint's Identity data avaiable directly to customer via their Snowflake account. DataSet comprises of structured Identity and audit data. Includes relationship tables that connects Identity with other domain entities like entitlements, roles, access profiles, accounts and Apps. This dataset has an additional Audit events table that is a flattened representation of all the events happening in IdentityNow for your organization.

## IdentityNow Documentation
For information on how to use SDS in your environment, see the documentation [here](https://documentation.sailpoint.com/saas/help/secure_data_share/secure_data_share.html).

## Technical Documentation
For Entity Relationship (ER) Diagrams that represent the data model in SDS as well as other documentation see the following pages

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
