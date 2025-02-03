---
id: beta-import-accounts-request
title: ImportAccountsRequest
pagination_label: ImportAccountsRequest
sidebar_label: ImportAccountsRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportAccountsRequest', 'BetaImportAccountsRequest'] 
slug: /tools/sdk/powershell/beta/models/import-accounts-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsRequest', 'BetaImportAccountsRequest']
---


# ImportAccountsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | The CSV file containing the source accounts to aggregate. | [optional] 
**DisableOptimization** |  **Enum** [  "true",    "false" ] | Use this flag to reprocess every account whether or not the data has changed. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportAccountsRequest = Initialize-PSSailpoint.BetaImportAccountsRequest  -File null `
 -DisableOptimization true
```

- Convert the resource to JSON
```powershell
$ImportAccountsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

