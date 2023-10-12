---
id: connectivity-customizers-linking
title: Linking a customizer to a connector
pagination_label: Linking to a Source
sidebar_label: Linking to a Source
sidebar_position: 6
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: Getting started with Connectivity Customizers
slug: /docs/saas-connectivity/customizers/linking
tags: ['Connectivity']
---

# Build and Deploy into Identity Now

### initial requirements

Before you can link a connector customizer to a source, you need to have a SaaS source in IdentityNow as well as a Customizer. 

```
sail conn customizers create my-connector-customizer

+--------------------------------------+-------------------------+---------+
|                  ID                  |          NAME           | VERSION |
+--------------------------------------+-------------------------+---------+
| 7b968fab-0f40-49f0-b13b-8bf529fc0b82 | my-connector-customizer |         |
+--------------------------------------+-------------------------+---------+
```

### Building

Building a connector customizer is similar to building a SaaS Connector, simply execute the command
