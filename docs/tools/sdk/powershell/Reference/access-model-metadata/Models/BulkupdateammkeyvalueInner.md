---
id: bulkupdateammkeyvalue-inner
title: BulkupdateammkeyvalueInner
pagination_label: BulkupdateammkeyvalueInner
sidebar_label: BulkupdateammkeyvalueInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkupdateammkeyvalueInner', 'BulkupdateammkeyvalueInner'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/bulkupdateammkeyvalue-inner
tags: ['SDK', 'Software Development Kit', 'BulkupdateammkeyvalueInner', 'BulkupdateammkeyvalueInner']
---


# BulkupdateammkeyvalueInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | the key of metadata attribute | [required]
**Values** | **[]String** | the values of attribute to be updated | [required]

## Examples

- Prepare the resource
```powershell
$BulkupdateammkeyvalueInner = Initialize-BulkupdateammkeyvalueInner  -Attribute iscFederalClassifications `
 -Values ["secret"]
```

- Convert the resource to JSON
```powershell
$BulkupdateammkeyvalueInner | ConvertTo-JSON
```


[[Back to top]](#) 

