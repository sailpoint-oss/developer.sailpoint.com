---
id: v2025-entitlement-attribute-bulk-update-ids-request
title: EntitlementAttributeBulkUpdateIdsRequest
pagination_label: EntitlementAttributeBulkUpdateIdsRequest
sidebar_label: EntitlementAttributeBulkUpdateIdsRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementAttributeBulkUpdateIdsRequest', 'V2025EntitlementAttributeBulkUpdateIdsRequest'] 
slug: /tools/sdk/powershell/v2025/models/entitlement-attribute-bulk-update-ids-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateIdsRequest', 'V2025EntitlementAttributeBulkUpdateIdsRequest']
---


# EntitlementAttributeBulkUpdateIdsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | **[]String** | List of entitlement IDs to update. | [optional] 
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementAttributeBulkUpdateIdsRequest = Initialize-V2025EntitlementAttributeBulkUpdateIdsRequest  -Entitlements [2c9180867817ac4d017817c491119a20, 2c9180867817ac4d017817c491119a21] `
 -Operation add `
 -ReplaceScope attribute `
 -Values [{attribute=iscFederalClassifications, values=[topSecret]}]
```

- Convert the resource to JSON
```powershell
$EntitlementAttributeBulkUpdateIdsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

