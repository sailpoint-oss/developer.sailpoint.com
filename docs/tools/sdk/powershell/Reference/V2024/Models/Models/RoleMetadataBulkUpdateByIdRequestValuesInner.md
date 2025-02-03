---
id: v2024-role-metadata-bulk-update-by-id-request-values-inner
title: RoleMetadataBulkUpdateByIdRequestValuesInner
pagination_label: RoleMetadataBulkUpdateByIdRequestValuesInner
sidebar_label: RoleMetadataBulkUpdateByIdRequestValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMetadataBulkUpdateByIdRequestValuesInner', 'V2024RoleMetadataBulkUpdateByIdRequestValuesInner'] 
slug: /tools/sdk/powershell/v2024/models/role-metadata-bulk-update-by-id-request-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByIdRequestValuesInner', 'V2024RoleMetadataBulkUpdateByIdRequestValuesInner']
---


# RoleMetadataBulkUpdateByIdRequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** |  **String** | the key of metadata attribute | [required]
**Values** |  **[]String** | the values of attribute to be updated | [required]

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByIdRequestValuesInner = Initialize-PSSailpoint.V2024RoleMetadataBulkUpdateByIdRequestValuesInner  -Attribute iscFederalClassifications `
 -Values [secret]
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByIdRequestValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

