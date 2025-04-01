---
id: v2025-role-metadata-bulk-update-by-id-request
title: RoleMetadataBulkUpdateByIdRequest
pagination_label: RoleMetadataBulkUpdateByIdRequest
sidebar_label: RoleMetadataBulkUpdateByIdRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMetadataBulkUpdateByIdRequest', 'V2025RoleMetadataBulkUpdateByIdRequest'] 
slug: /tools/sdk/powershell/v2025/models/role-metadata-bulk-update-by-id-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByIdRequest', 'V2025RoleMetadataBulkUpdateByIdRequest']
---


# RoleMetadataBulkUpdateByIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Roles** | **[]String** | Roles' Id to be updated | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByIdRequest = Initialize-PSSailpoint.V2025RoleMetadataBulkUpdateByIdRequest  -Roles [b1db89554cfa431cb8b9921ea38d9367] `
 -Operation REPLACE `
 -ReplaceScope ALL `
 -Values [{attribute=iscFederalClassifications, values=[topSecret]}]
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByIdRequest | ConvertTo-JSON
```


[[Back to top]](#) 

