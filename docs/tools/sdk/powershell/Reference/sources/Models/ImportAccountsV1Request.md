---
id: import-accounts-v1-request
title: ImportAccountsV1Request
pagination_label: ImportAccountsV1Request
sidebar_label: ImportAccountsV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportAccountsV1Request', 'ImportAccountsV1Request'] 
slug: /tools/sdk/powershell/sources/models/import-accounts-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsV1Request', 'ImportAccountsV1Request']
---


# ImportAccountsV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | The CSV file containing the source accounts to aggregate. | [optional] 
**DisableOptimization** | **String** | Use this flag to reprocess every account whether or not the data has changed. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportAccountsV1Request = Initialize-ImportAccountsV1Request  -File null `
 -DisableOptimization true
```

- Convert the resource to JSON
```powershell
$ImportAccountsV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

