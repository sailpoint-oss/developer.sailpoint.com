---
id: v2025-role-metadata-bulk-update-by-query-request
title: RoleMetadataBulkUpdateByQueryRequest
pagination_label: RoleMetadataBulkUpdateByQueryRequest
sidebar_label: RoleMetadataBulkUpdateByQueryRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMetadataBulkUpdateByQueryRequest', 'V2025RoleMetadataBulkUpdateByQueryRequest'] 
slug: /tools/sdk/powershell/v2025/models/role-metadata-bulk-update-by-query-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByQueryRequest', 'V2025RoleMetadataBulkUpdateByQueryRequest']
---


# RoleMetadataBulkUpdateByQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | query the identities to be updated | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RoleMetadataBulkUpdateByQueryRequestValuesInner**](role-metadata-bulk-update-by-query-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByQueryRequest = Initialize-PSSailpoint.V2025RoleMetadataBulkUpdateByQueryRequest  -Query {query"={indices=[roles], queryType=TEXT, textQuery={terms=[test123], fields=[id], matchAny=false, contains=true}, includeNested=false}} `
 -Operation REPLACE `
 -ReplaceScope ALL `
 -Values null
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByQueryRequest | ConvertTo-JSON
```


[[Back to top]](#) 

