---
id: import-accounts-schema-v1-request
title: ImportAccountsSchemaV1Request
pagination_label: ImportAccountsSchemaV1Request
sidebar_label: ImportAccountsSchemaV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportAccountsSchemaV1Request', 'ImportAccountsSchemaV1Request'] 
slug: /tools/sdk/powershell/sources/models/import-accounts-schema-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsSchemaV1Request', 'ImportAccountsSchemaV1Request']
---


# ImportAccountsSchemaV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportAccountsSchemaV1Request = Initialize-ImportAccountsSchemaV1Request  -File null
```

- Convert the resource to JSON
```powershell
$ImportAccountsSchemaV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

