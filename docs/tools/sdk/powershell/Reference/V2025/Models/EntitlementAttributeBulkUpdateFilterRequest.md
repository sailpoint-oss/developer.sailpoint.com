---
id: v2025-entitlement-attribute-bulk-update-filter-request
title: EntitlementAttributeBulkUpdateFilterRequest
pagination_label: EntitlementAttributeBulkUpdateFilterRequest
sidebar_label: EntitlementAttributeBulkUpdateFilterRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementAttributeBulkUpdateFilterRequest', 'V2025EntitlementAttributeBulkUpdateFilterRequest'] 
slug: /tools/sdk/powershell/v2025/models/entitlement-attribute-bulk-update-filter-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateFilterRequest', 'V2025EntitlementAttributeBulkUpdateFilterRequest']
---


# EntitlementAttributeBulkUpdateFilterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **String** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] 
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementAttributeBulkUpdateFilterRequest = Initialize-V2025EntitlementAttributeBulkUpdateFilterRequest  -Filters id eq 2c9180867817ac4d017817c491119a20 `
 -Operation add `
 -ReplaceScope attribute `
 -Values [{attribute=iscFederalClassifications, values=[topSecret]}]
```

- Convert the resource to JSON
```powershell
$EntitlementAttributeBulkUpdateFilterRequest | ConvertTo-JSON
```


[[Back to top]](#) 

