---
id: getting-started-with-saas-connectors
title: Getting Started with SaaS Connectors in CoLab
pagination_label: Getting Started with SaaS Connectors
sidebar_label: SaaS Connectors Guide
sidebar_position: 9
keywords: ['CoLab', 'SaaS Connectors', 'CLI', 'connectivity']
description: Learn how to download, upload, and use a CoLab SaaS Connector.
slug: /tools/colab/getting-started-with-saas-connectors
tags: ['CoLab']
---

Use this guide to view and download Identity Security Cloud (ISC) SaaS Connectors built by the community.

## Download the connector

To download and prepare a connector from CoLab:

1. Download the connector you want from the CoLab **SaaS Connectors** category.
2. Use the SailPoint CLI to create a new connector:

```shell
sail conn create "my-connector-name"
```

3. Use the SailPoint CLI to upload the connector to your tenant:

```shell
sail conn upload -c "my-connector-name" -f path/to/your/download.zip
```

Once the connector is uploaded, you can start using it in Identity Security Cloud.

## Use the connector

To use the connector you uploaded:

1. Navigate to the `admin` page in your tenant.
2. Select **Connections** and choose **Sources**.
3. Select **Create New** and choose the connector.

:::note
The connector name in ISC is **not** the name from `sail conn create`; it is the name set by the connector author.
:::

4. Select **Configure** and follow the instructions provided by the connector author.
