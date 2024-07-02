---
id: import-accounts-request
title: ImportAccountsRequest
pagination_label: ImportAccountsRequest
sidebar_label: ImportAccountsRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ImportAccountsRequest'] 
slug: /tools/sdk/powershell/beta/models/import-accounts-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsRequest']
---


# ImportAccountsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  Pointer to **System.IO.FileInfo** |  | [optional] 
**DisableOptimization** |  Pointer to **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportAccountsRequest = Initialize-BetaImportAccountsRequest  -File null `
 -DisableOptimization true
```

- Convert the resource to JSON
```powershell
$ImportAccountsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

