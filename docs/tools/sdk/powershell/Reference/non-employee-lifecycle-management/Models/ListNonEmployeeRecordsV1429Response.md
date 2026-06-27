---
id: list-non-employee-records-v1429-response
title: ListNonEmployeeRecordsV1429Response
pagination_label: ListNonEmployeeRecordsV1429Response
sidebar_label: ListNonEmployeeRecordsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListNonEmployeeRecordsV1429Response', 'ListNonEmployeeRecordsV1429Response'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/list-non-employee-records-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListNonEmployeeRecordsV1429Response', 'ListNonEmployeeRecordsV1429Response']
---


# ListNonEmployeeRecordsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListNonEmployeeRecordsV1429Response = Initialize-ListNonEmployeeRecordsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListNonEmployeeRecordsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

