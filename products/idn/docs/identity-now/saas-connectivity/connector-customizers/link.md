---
id: connectivity-customizers-linking
title: Linking a customizer to a connector
pagination_label: Linking to a Source
sidebar_label: Linking to a Source
sidebar_position: 6
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: Link connectivity customizers to sources.
slug: /docs/saas-connectivity/customizers/linking
tags: ['Connectivity']
---

# Linking a connectivity customizer to a source

### Initial requirements

Before you can link a connector customizer to a source, you must have a SaaS source in IdentityNow, as well as a Customizer built and deployed. You can use the following commands to get a list of valid sources, as well as customizers:

Use this command to find sources:

```bash
sail conn instances list
```
This similar looking list of instances will be returned:

```bash
+--------------------------------------+--------------------------+---------------+
|                  ID                  |           NAME           | CUSTOMIZER ID |
+--------------------------------------+--------------------------+---------------+
| 0327d0a4-5e94-4803-90a6-c0819349ecca | airtable test            |               |
| 05da3fa2-17f0-4bd4-9e2a-ab93d7dffe68 | Discourse                |               |
| 069b9398-8ed9-433d-943f-3cb32952524f | github                   |               |
| 0dbb53b0-2e62-4a8e-9efe-97555755025d | Smartsheet               |               |
+--------------------------------------+--------------------------+---------------+
```

Use this command to find customizers:

```bash
sail conn customizers list
```
This similar looking list of customizers will be returned:

```bash
+--------------------------------------+---------------------+---------+
|                  ID                  |        NAME         | VERSION |
+--------------------------------------+---------------------+---------+
| 7b968fab-0f40-49f0-b13b-8bf529fc0b82 | airtable-customizer |       1 |
+--------------------------------------+---------------------+---------+
```

### Link to a source

To link a source to a customizer, find the source ID in the instance list and a customizer from the customizer list. Then issue this command:

```bash
sail conn customizers link -i edfc9bfb-b55c-482f-b1aa-b4d51caf7558 -c 7b968fab-0f40-49f0-b13b-8bf529fc0b82
```
The output will indicate that the customizer has succesfully linked to the connector instance:
```bash
+--------------------------------------+----------------------+--------------------------------------+
|                  ID                  |         NAME         |            CUSTOMIZER ID             |
+--------------------------------------+----------------------+--------------------------------------+
| edfc9bfb-b55c-482f-b1aa-b4d51caf7558 | Discourse-Current-V2 | 7b968fab-0f40-49f0-b13b-8bf529fc0b82 |
+--------------------------------------+----------------------+--------------------------------------+
```

### Unlink from a source

To unlink a customizer from a source, issue the unlink command and pass the source instance ID: 

```bash
sail conn customizers unlink -i edfc9bfb-b55c-482f-b1aa-b4d51caf7558
```
