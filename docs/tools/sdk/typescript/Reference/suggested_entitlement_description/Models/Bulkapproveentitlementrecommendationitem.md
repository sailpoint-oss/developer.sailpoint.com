---
id: v1-bulkapproveentitlementrecommendationitem-v1
title: BulkapproveentitlementrecommendationitemV1
pagination_label: BulkapproveentitlementrecommendationitemV1
sidebar_label: BulkapproveentitlementrecommendationitemV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'BulkapproveentitlementrecommendationitemV1', 'v1BulkapproveentitlementrecommendationitemV1']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/bulkapproveentitlementrecommendationitem-v1
tags: ['SDK', 'Software Development Kit', 'BulkapproveentitlementrecommendationitemV1', 'v1BulkapproveentitlementrecommendationitemV1']
---

# BulkapproveentitlementrecommendationitemV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the recommendation record to approve. | [default to undefined]
**recordType** | **(optional)** `string` | The type of the recommendation. When omitted, the backend resolves the type by looking up the ID. | [default to undefined]
**description** | **(optional)** `string` | The approved description text. Required for SED-type items; ignored for privilege items. | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The approved privilege level. Required for privilege-type items; ignored for SED items. | [default to undefined]

