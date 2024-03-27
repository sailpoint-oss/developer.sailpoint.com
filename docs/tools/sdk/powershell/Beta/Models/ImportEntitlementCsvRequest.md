---
id: import-entitlement-csv-request
title: ImportEntitlementCsvRequest
pagination_label: ImportEntitlementCsvRequest
sidebar_label: ImportEntitlementCsvRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ImportEntitlementCsvRequest'] 
slug: /tools/sdk/powershell/beta/models/import-entitlement-csv-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementCsvRequest']
---


# ImportEntitlementCsvRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CsvFile** |  **System.IO.FileInfo** |  | 

## Examples

- Prepare the resource
```powershell
$ImportEntitlementCsvRequest = Initialize-PSSailpointBetaImportEntitlementCsvRequest  -CsvFile null
```

- Convert the resource to JSON
```powershell
$ImportEntitlementCsvRequest | ConvertTo-JSON
```


[[Back to top]](#) 

