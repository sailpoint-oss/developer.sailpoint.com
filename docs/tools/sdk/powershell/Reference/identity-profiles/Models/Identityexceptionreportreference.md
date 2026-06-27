---
id: identityexceptionreportreference
title: Identityexceptionreportreference
pagination_label: Identityexceptionreportreference
sidebar_label: Identityexceptionreportreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityexceptionreportreference', 'Identityexceptionreportreference'] 
slug: /tools/sdk/powershell/identityprofiles/models/identityexceptionreportreference
tags: ['SDK', 'Software Development Kit', 'Identityexceptionreportreference', 'Identityexceptionreportreference']
---


# Identityexceptionreportreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskResultId** | **String** | Task result ID. | [optional] 
**ReportName** | **String** | Report name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityexceptionreportreference = Initialize-Identityexceptionreportreference  -TaskResultId 2b838de9-db9b-abcf-e646-d4f274ad4238 `
 -ReportName My annual report
```

- Convert the resource to JSON
```powershell
$Identityexceptionreportreference | ConvertTo-JSON
```


[[Back to top]](#) 

