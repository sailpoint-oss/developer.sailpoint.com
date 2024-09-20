---
id: secure-data-share
title: Secure Data Share
pagination_label: Secure Data Share
sidebar_label: Secure Data Share
sidebar_position: 6
sidebar_class_name: secureDataShare
keywords: ['data listing', 'data share', 'secure data sharing']
description: Share ISC data with Snowflake.
slug: /reporting/secure-data-share
tags: ['SecureDataShare']
hide_table_of_contents: true
---

import MermaidViewer from '@site/src/components/MermaidViewer';

# Secure Data Share

Secure Data Share (SDS) makes your SailPoint identity data available directly in your own [AWS Snowflake](https://aws.amazon.com/financial-services/partner-solutions/snowflake/) account. The provided dataset comprises structured tables that include identity, audit event, entitlement, role, access profile, account, and application data. Secure Data Share is an alternative to SailPoint's [Search](https://documentation.sailpoint.com/saas/help/search/index.html). SDS uses SQL as the query language, whereas Search uses the [Elasticsearch Query Language](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html). SQL provides certain advantages over Elasticsearch: joining and aggregating data is easier in SQL, and the Snowflake interface has a built-in SQL explorer and allows you to download your search results in CSV format. SDS also allows you to connect your SailPoint data to your favorite data analytics tools, like [PowerBI](https://learn.microsoft.com/en-us/power-bi/connect-data/service-connect-snowflake) and [Tableau](https://help.tableau.com/current/pro/desktop/en-us/examples_snowflake.htm), further enhancing the reporting capabilities for your SailPoint data.

If you would like to speak to a SailPoint representative about Secure Data Share, please [schedule a meeting here](https://calendly.com/jordan-mandernach/secure_data_share).

<div class="text--center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Q-XZtjuv6XY?si=8o9qou1lEGsTx-Se" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Requirements

Secure Data Share is an add-on for Identity Security Cloud. Please contact your sales representative to discuss your SDS options. You must also have an AWS Snowflake account so that SailPoint can synchronize your tenant data with your Snowflake instance.

## Data Synchronization SLA

Similar to Search, SDS has a synchronization service-level agreement (SLA) of 24 hours. This means it can take up to 24 hours for operational data in your tenant to be synchronized with your Snowflake database. SailPoint Search and SDS are two separate systems, and there is no guarantee on which service will receive updated data first. In some cases, operational data may appear in Search before SDS, and in other cases SDS may receive the data first.

## How to use SDS

For information on how to install and use SDS in your environment, see the documentation [here](https://documentation.sailpoint.com/saas/help/secure_data_share/secure_data_share.html). Because SDS uses SQL as the query language, your tenant data is formatted into relational tables. To view the relationships between these tables, please see the following pages for the entity relationship (ER) diagrams that represent the data model.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

## Discuss

The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions.

To learn more about SDS and discuss it with SailPoint Developer Community members, go to the [SailPoint Developer Community Forum](https://platform.sailpoint.com/).
