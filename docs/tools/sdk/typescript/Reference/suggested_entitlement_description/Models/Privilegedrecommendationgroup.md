---
id: v1-privilegedrecommendationgroup-v1
title: PrivilegedrecommendationgroupV1
pagination_label: PrivilegedrecommendationgroupV1
sidebar_label: PrivilegedrecommendationgroupV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PrivilegedrecommendationgroupV1', 'v1PrivilegedrecommendationgroupV1']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/privilegedrecommendationgroup-v1
tags: ['SDK', 'Software Development Kit', 'PrivilegedrecommendationgroupV1', 'v1PrivilegedrecommendationgroupV1']
---

# PrivilegedrecommendationgroupV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlementName** | **(optional)** `string` | The name of the entitlement shared across all instances in this group. | [default to undefined]
**connectorType** | **(optional)** `string` | The connector type associated with all instances in this group. | [default to undefined]
**recommendationScore** | **(optional)** `string` | A decimal string representing the confidence score of the privilege recommendation (0.0-1.0). | [default to undefined]
**orgCount** | **(optional)** `number` | The number of organizations in which this entitlement appears as privileged. | [default to undefined]
**instanceCount** | **(optional)** `number` | The total number of individual entitlement instances in this group. | [default to undefined]
**instances** | **(optional)** `Array<PrivilegedrecommendationinstanceV1>` | The individual entitlement instances belonging to this group. | [default to undefined]

