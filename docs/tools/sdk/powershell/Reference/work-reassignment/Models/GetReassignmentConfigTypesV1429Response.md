---
id: get-reassignment-config-types-v1429-response
title: GetReassignmentConfigTypesV1429Response
pagination_label: GetReassignmentConfigTypesV1429Response
sidebar_label: GetReassignmentConfigTypesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetReassignmentConfigTypesV1429Response', 'GetReassignmentConfigTypesV1429Response'] 
slug: /tools/sdk/powershell/workreassignment/models/get-reassignment-config-types-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetReassignmentConfigTypesV1429Response', 'GetReassignmentConfigTypesV1429Response']
---


# GetReassignmentConfigTypesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetReassignmentConfigTypesV1429Response = Initialize-GetReassignmentConfigTypesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetReassignmentConfigTypesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

