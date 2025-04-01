---
id: v2025-role-metadata-bulk-update-by-query-request-values-inner
title: RoleMetadataBulkUpdateByQueryRequestValuesInner
pagination_label: RoleMetadataBulkUpdateByQueryRequestValuesInner
sidebar_label: RoleMetadataBulkUpdateByQueryRequestValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMetadataBulkUpdateByQueryRequestValuesInner', 'V2025RoleMetadataBulkUpdateByQueryRequestValuesInner'] 
slug: /tools/sdk/powershell/v2025/models/role-metadata-bulk-update-by-query-request-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByQueryRequestValuesInner', 'V2025RoleMetadataBulkUpdateByQueryRequestValuesInner']
---


# RoleMetadataBulkUpdateByQueryRequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeKey** | **String** | the key of metadata attribute | [optional] 
**AttributeValue** | **[]String** | the values of attribute to be updated | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByQueryRequestValuesInner = Initialize-PSSailpoint.V2025RoleMetadataBulkUpdateByQueryRequestValuesInner  -AttributeKey iscFederalClassifications `
 -AttributeValue [topSecret]
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByQueryRequestValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

