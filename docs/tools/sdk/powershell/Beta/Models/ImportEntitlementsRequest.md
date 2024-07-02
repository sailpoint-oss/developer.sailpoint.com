---
id: import-entitlements-request
title: ImportEntitlementsRequest
pagination_label: ImportEntitlementsRequest
sidebar_label: ImportEntitlementsRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ImportEntitlementsRequest'] 
slug: /tools/sdk/powershell/beta/models/import-entitlements-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsRequest']
---


# ImportEntitlementsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CsvFile** |  **System.IO.FileInfo** |  | 

## Examples

- Prepare the resource
```powershell
$ImportEntitlementsRequest = Initialize-BetaImportEntitlementsRequest  -CsvFile null
```

- Convert the resource to JSON
```powershell
$ImportEntitlementsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

