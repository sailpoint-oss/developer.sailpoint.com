---
id: v2024-role-metadata-bulk-update-by-id-request
title: RoleMetadataBulkUpdateByIdRequest
pagination_label: RoleMetadataBulkUpdateByIdRequest
sidebar_label: RoleMetadataBulkUpdateByIdRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMetadataBulkUpdateByIdRequest'] 
slug: /tools/sdk/powershell/v2024/models/role-metadata-bulk-update-by-id-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByIdRequest']
---


# RoleMetadataBulkUpdateByIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Roles** |  **[]String** | Roles' Id to be updated | [required]
**Operation** |   **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  Pointer to  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** |  [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByIdRequest = Initialize-PSSailpoint.V2024RoleMetadataBulkUpdateByIdRequest  -Roles [b1db89554cfa431cb8b9921ea38d9367] `
 -Operation REPLACE `
 -ReplaceScope ALL `
 -Values [{attribute&#x3D;iscFederalClassifications, values&#x3D;[topSecret]}]
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByIdRequest | ConvertTo-JSON
```


[[Back to top]](#) 

