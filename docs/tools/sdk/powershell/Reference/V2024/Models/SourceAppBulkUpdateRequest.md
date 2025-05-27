---
id: v2024-source-app-bulk-update-request
title: SourceAppBulkUpdateRequest
pagination_label: SourceAppBulkUpdateRequest
sidebar_label: SourceAppBulkUpdateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAppBulkUpdateRequest', 'V2024SourceAppBulkUpdateRequest'] 
slug: /tools/sdk/powershell/v2024/models/source-app-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'SourceAppBulkUpdateRequest', 'V2024SourceAppBulkUpdateRequest']
---


# SourceAppBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppIds** | **[]String** | List of source app ids to update | [required]
**JsonPatch** | [**[]JsonPatchOperation**](json-patch-operation) | The JSONPatch payload used to update the source app. | [required]

## Examples

- Prepare the resource
```powershell
$SourceAppBulkUpdateRequest = Initialize-V2024SourceAppBulkUpdateRequest  -AppIds [2c91808a7624751a01762f19d665220d, 2c91808a7624751a01762f19d67c220e, 2c91808a7624751a01762f19d692220f] `
 -JsonPatch [{op=replace, path=/enabled, value=false}, {op=replace, path=/matchAllAccounts, value=false}]
```

- Convert the resource to JSON
```powershell
$SourceAppBulkUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

