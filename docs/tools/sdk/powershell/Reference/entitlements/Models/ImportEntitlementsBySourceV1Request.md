---
id: import-entitlements-by-source-v1-request
title: ImportEntitlementsBySourceV1Request
pagination_label: ImportEntitlementsBySourceV1Request
sidebar_label: ImportEntitlementsBySourceV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportEntitlementsBySourceV1Request', 'ImportEntitlementsBySourceV1Request'] 
slug: /tools/sdk/powershell/entitlements/models/import-entitlements-by-source-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsBySourceV1Request', 'ImportEntitlementsBySourceV1Request']
---


# ImportEntitlementsBySourceV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CsvFile** | **System.IO.FileInfo** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportEntitlementsBySourceV1Request = Initialize-ImportEntitlementsBySourceV1Request  -CsvFile null
```

- Convert the resource to JSON
```powershell
$ImportEntitlementsBySourceV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

