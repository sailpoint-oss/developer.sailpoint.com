---
id: import-entitlements-v1-request
title: ImportEntitlementsV1Request
pagination_label: ImportEntitlementsV1Request
sidebar_label: ImportEntitlementsV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportEntitlementsV1Request', 'ImportEntitlementsV1Request'] 
slug: /tools/sdk/powershell/sources/models/import-entitlements-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsV1Request', 'ImportEntitlementsV1Request']
---


# ImportEntitlementsV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportEntitlementsV1Request = Initialize-ImportEntitlementsV1Request  -File null
```

- Convert the resource to JSON
```powershell
$ImportEntitlementsV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

