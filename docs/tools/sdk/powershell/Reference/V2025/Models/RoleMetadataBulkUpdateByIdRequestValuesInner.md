---
id: v2025-role-metadata-bulk-update-by-id-request-values-inner
title: RoleMetadataBulkUpdateByIdRequestValuesInner
pagination_label: RoleMetadataBulkUpdateByIdRequestValuesInner
sidebar_label: RoleMetadataBulkUpdateByIdRequestValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMetadataBulkUpdateByIdRequestValuesInner', 'V2025RoleMetadataBulkUpdateByIdRequestValuesInner'] 
slug: /tools/sdk/powershell/v2025/models/role-metadata-bulk-update-by-id-request-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByIdRequestValuesInner', 'V2025RoleMetadataBulkUpdateByIdRequestValuesInner']
---


# RoleMetadataBulkUpdateByIdRequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | the key of metadata attribute | [required]
**Values** | **[]String** | the values of attribute to be updated | [required]

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByIdRequestValuesInner = Initialize-V2025RoleMetadataBulkUpdateByIdRequestValuesInner  -Attribute iscFederalClassifications `
 -Values [secret]
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByIdRequestValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

