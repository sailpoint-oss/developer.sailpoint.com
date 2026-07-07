---
id: list-privilege-criteria-v1429-response
title: ListPrivilegeCriteriaV1429Response
pagination_label: ListPrivilegeCriteriaV1429Response
sidebar_label: ListPrivilegeCriteriaV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListPrivilegeCriteriaV1429Response', 'ListPrivilegeCriteriaV1429Response'] 
slug: /tools/sdk/powershell/privilegecriteria/models/list-privilege-criteria-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListPrivilegeCriteriaV1429Response', 'ListPrivilegeCriteriaV1429Response']
---


# ListPrivilegeCriteriaV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListPrivilegeCriteriaV1429Response = Initialize-ListPrivilegeCriteriaV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListPrivilegeCriteriaV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

