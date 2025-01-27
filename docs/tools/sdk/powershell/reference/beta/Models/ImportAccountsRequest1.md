---
id: beta-import-accounts-request1
title: ImportAccountsRequest1
pagination_label: ImportAccountsRequest1
sidebar_label: ImportAccountsRequest1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportAccountsRequest1'] 
slug: /tools/sdk/powershell/beta/models/import-accounts-request1
tags: ['SDK', 'Software Development Kit', 'ImportAccountsRequest1']
---


# ImportAccountsRequest1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisableOptimization** |  Pointer to  **Enum** [  "true",    "false" ] | Use this flag to reprocess every account whether or not the data has changed. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportAccountsRequest1 = Initialize-PSSailpoint.BetaImportAccountsRequest1  -DisableOptimization true
```

- Convert the resource to JSON
```powershell
$ImportAccountsRequest1 | ConvertTo-JSON
```


[[Back to top]](#) 

