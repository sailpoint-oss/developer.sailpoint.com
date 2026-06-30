---
id: v1-entitlementattributebulkupdatefilterrequest-v1
title: EntitlementattributebulkupdatefilterrequestV1
pagination_label: EntitlementattributebulkupdatefilterrequestV1
sidebar_label: EntitlementattributebulkupdatefilterrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EntitlementattributebulkupdatefilterrequestV1', 'v1EntitlementattributebulkupdatefilterrequestV1']
slug: /tools/sdk/typescript/access_model_metadata/models/entitlementattributebulkupdatefilterrequest-v1
tags: ['SDK', 'Software Development Kit', 'EntitlementattributebulkupdatefilterrequestV1', 'v1EntitlementattributebulkupdatefilterrequestV1']
---

# EntitlementattributebulkupdatefilterrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **(optional)** `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [default to undefined]
**operation** | **(optional)** `string` | Operation to perform on the attributes in the bulk update request. | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | **(optional)** `Array<BulkupdateammkeyvalueInnerV1>` | The metadata to be updated, including attribute and values. | [default to undefined]

