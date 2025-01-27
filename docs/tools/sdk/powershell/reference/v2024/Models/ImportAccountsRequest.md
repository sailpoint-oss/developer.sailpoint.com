---
id: v2024-import-accounts-request
title: ImportAccountsRequest
pagination_label: ImportAccountsRequest
sidebar_label: ImportAccountsRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportAccountsRequest'] 
slug: /tools/sdk/powershell/v2024/models/import-accounts-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsRequest']
---


# ImportAccountsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  Pointer to **System.IO.FileInfo** | The CSV file containing the source accounts to aggregate. | [optional] 
**DisableOptimization** |  Pointer to **String** | Use this flag to reprocess every account whether or not the data has changed. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportAccountsRequest = Initialize-PSSailpoint.V2024ImportAccountsRequest  -File null `
 -DisableOptimization true
```

- Convert the resource to JSON
```powershell
$ImportAccountsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

