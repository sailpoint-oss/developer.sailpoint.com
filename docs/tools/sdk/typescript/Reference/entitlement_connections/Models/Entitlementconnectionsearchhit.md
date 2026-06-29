---
id: v1-entitlementconnectionsearchhit-v1
title: EntitlementconnectionsearchhitV1
pagination_label: EntitlementconnectionsearchhitV1
sidebar_label: EntitlementconnectionsearchhitV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EntitlementconnectionsearchhitV1', 'v1EntitlementconnectionsearchhitV1']
slug: /tools/sdk/typescript/entitlement_connections/models/entitlementconnectionsearchhit-v1
tags: ['SDK', 'Software Development Kit', 'EntitlementconnectionsearchhitV1', 'v1EntitlementconnectionsearchhitV1']
---

# EntitlementconnectionsearchhitV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Connection ID as represented in search results. | [default to undefined]
**identity** | **(optional)**  | Identity summary object from search index. | [default to undefined]
**machineIdentity** | **(optional)**  | Machine identity summary object when available. | [default to undefined]
**account** | **(optional)**  | Account summary object. | [default to undefined]
**entitlement** | **(optional)** `EntitlementconnectionsearchhitentitlementV1` |  | [default to undefined]
**source** | **(optional)**  | Source summary object. | [default to undefined]
**state** | **(optional)**  | Connection state object. | [default to undefined]
**jit** | **(optional)**  | JIT timestamps for lifecycle events. | [default to undefined]
**standalone** | **(optional)** `boolean` | Indicates whether the connection is marked as standalone. | [default to false]
**type** | **(optional)** `string` | Connection type classification. | [default to undefined]

