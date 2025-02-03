---
id: v2024-role-metadata-bulk-update-by-filter-request
title: RoleMetadataBulkUpdateByFilterRequest
pagination_label: RoleMetadataBulkUpdateByFilterRequest
sidebar_label: RoleMetadataBulkUpdateByFilterRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMetadataBulkUpdateByFilterRequest', 'V2024RoleMetadataBulkUpdateByFilterRequest'] 
slug: /tools/sdk/powershell/v2024/models/role-metadata-bulk-update-by-filter-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByFilterRequest', 'V2024RoleMetadataBulkUpdateByFilterRequest']
---


# RoleMetadataBulkUpdateByFilterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **String** | Filtering is supported for the following fields and operators:  **id** : *eq, in*  **name** : *eq, sw*  **created** : *gt, lt, ge, le*  **modified** : *gt, lt, ge, le*  **owner.id** : *eq, in*  **requestable** : *eq* | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RoleMetadataBulkUpdateByFilterRequestValuesInner**](role-metadata-bulk-update-by-filter-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByFilterRequest = Initialize-PSSailpoint.V2024RoleMetadataBulkUpdateByFilterRequest  -Filters  requestable eq false `
 -Operation REPLACE `
 -ReplaceScope ALL `
 -Values [{attribute&#x3D;iscFederalClassifications, values&#x3D;[topSecret]}]
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByFilterRequest | ConvertTo-JSON
```


[[Back to top]](#) 

