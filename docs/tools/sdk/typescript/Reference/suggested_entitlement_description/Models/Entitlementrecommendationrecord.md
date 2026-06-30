---
id: v1-entitlementrecommendationrecord-v1
title: EntitlementrecommendationrecordV1
pagination_label: EntitlementrecommendationrecordV1
sidebar_label: EntitlementrecommendationrecordV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EntitlementrecommendationrecordV1', 'v1EntitlementrecommendationrecordV1']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/entitlementrecommendationrecord-v1
tags: ['SDK', 'Software Development Kit', 'EntitlementrecommendationrecordV1', 'v1EntitlementrecommendationrecordV1']
---

# EntitlementrecommendationrecordV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordType** | **(optional)** `string` | The type of recommendation. \"SED\" indicates a suggested description recommendation; \"privilege\" indicates a privilege-level recommendation. | [default to undefined]
**id** | **(optional)** `string` | The unique identifier for this recommendation record. | [default to undefined]
**attribute** | **(optional)** `string` | The entitlement attribute name (e.g. \"groups\"). | [default to undefined]
**displayName** | **(optional)** `string` | The human-readable display name of the entitlement. | [default to undefined]
**name** | **(optional)** `string` | The internal name of the entitlement. | [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source that owns this entitlement. | [default to undefined]
**sourceName** | **(optional)** `string` | The display name of the source that owns this entitlement. | [default to undefined]
**status** | **(optional)** `string` | The current review status of the recommendation. | [default to undefined]
**type** | **(optional)** `string` | The entitlement type (e.g. \"group\"). | [default to undefined]
**value** | **(optional)** `string` | The entitlement value or identifier. | [default to undefined]
**description** | **(optional)** `string` | The current description of the entitlement, if one exists. | [default to undefined]
**suggestedDescription** | **(optional)** `string` | The AI-generated suggested description for the entitlement (SED records only). | [default to undefined]
**privilege** | **(optional)** `string` | The current privilege level assigned to the entitlement. | [default to undefined]
**suggestedPrivilege** | **(optional)** `string` | The AI-suggested privilege level for the entitlement (privilege records only). | [default to undefined]
**approvedBy** | **(optional)** `string` | The ID of the identity who approved this recommendation. | [default to undefined]
**approvedType** | **(optional)** `string` | How the recommendation was approved (e.g. \"direct\"). | [default to undefined]
**approvedWhen** | **(optional)** `string` | The timestamp when the recommendation was approved. | [default to undefined]
**llmBatchCreatedAt** | **(optional)** `string` | The timestamp when the LLM batch that generated this recommendation was created. | [default to undefined]

