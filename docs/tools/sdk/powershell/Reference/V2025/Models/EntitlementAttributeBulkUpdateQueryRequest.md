---
id: v2025-entitlement-attribute-bulk-update-query-request
title: EntitlementAttributeBulkUpdateQueryRequest
pagination_label: EntitlementAttributeBulkUpdateQueryRequest
sidebar_label: EntitlementAttributeBulkUpdateQueryRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementAttributeBulkUpdateQueryRequest', 'V2025EntitlementAttributeBulkUpdateQueryRequest'] 
slug: /tools/sdk/powershell/v2025/models/entitlement-attribute-bulk-update-query-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateQueryRequest', 'V2025EntitlementAttributeBulkUpdateQueryRequest']
---


# EntitlementAttributeBulkUpdateQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | [**Search**](search) |  | [optional] 
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementAttributeBulkUpdateQueryRequest = Initialize-V2025EntitlementAttributeBulkUpdateQueryRequest  -Query null `
 -Operation add `
 -ReplaceScope attribute `
 -Values [{attribute=iscFederalClassifications, values=[topSecret]}]
```

- Convert the resource to JSON
```powershell
$EntitlementAttributeBulkUpdateQueryRequest | ConvertTo-JSON
```


[[Back to top]](#) 

