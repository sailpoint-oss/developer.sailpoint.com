---
id: beta-import-entitlements-by-source-request
title: ImportEntitlementsBySourceRequest
pagination_label: ImportEntitlementsBySourceRequest
sidebar_label: ImportEntitlementsBySourceRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportEntitlementsBySourceRequest', 'BetaImportEntitlementsBySourceRequest'] 
slug: /tools/sdk/powershell/beta/models/import-entitlements-by-source-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsBySourceRequest', 'BetaImportEntitlementsBySourceRequest']
---


# ImportEntitlementsBySourceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CsvFile** | **System.IO.FileInfo** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportEntitlementsBySourceRequest = Initialize-BetaImportEntitlementsBySourceRequest  -CsvFile null
```

- Convert the resource to JSON
```powershell
$ImportEntitlementsBySourceRequest | ConvertTo-JSON
```


[[Back to top]](#) 

