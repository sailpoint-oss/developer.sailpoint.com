---
id: v2025-import-entitlements-request
title: ImportEntitlementsRequest
pagination_label: ImportEntitlementsRequest
sidebar_label: ImportEntitlementsRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportEntitlementsRequest', 'V2025ImportEntitlementsRequest'] 
slug: /tools/sdk/powershell/v2025/models/import-entitlements-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsRequest', 'V2025ImportEntitlementsRequest']
---


# ImportEntitlementsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportEntitlementsRequest = Initialize-V2025ImportEntitlementsRequest  -File null
```

- Convert the resource to JSON
```powershell
$ImportEntitlementsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

