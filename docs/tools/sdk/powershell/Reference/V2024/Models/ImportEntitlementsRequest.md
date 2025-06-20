---
id: v2024-import-entitlements-request
title: ImportEntitlementsRequest
pagination_label: ImportEntitlementsRequest
sidebar_label: ImportEntitlementsRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportEntitlementsRequest', 'V2024ImportEntitlementsRequest'] 
slug: /tools/sdk/powershell/v2024/models/import-entitlements-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsRequest', 'V2024ImportEntitlementsRequest']
---


# ImportEntitlementsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportEntitlementsRequest = Initialize-V2024ImportEntitlementsRequest  -File null
```

- Convert the resource to JSON
```powershell
$ImportEntitlementsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

