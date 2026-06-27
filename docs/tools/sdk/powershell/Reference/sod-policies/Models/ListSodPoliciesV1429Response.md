---
id: list-sod-policies-v1429-response
title: ListSodPoliciesV1429Response
pagination_label: ListSodPoliciesV1429Response
sidebar_label: ListSodPoliciesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListSodPoliciesV1429Response', 'ListSodPoliciesV1429Response'] 
slug: /tools/sdk/powershell/sodpolicies/models/list-sod-policies-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListSodPoliciesV1429Response', 'ListSodPoliciesV1429Response']
---


# ListSodPoliciesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListSodPoliciesV1429Response = Initialize-ListSodPoliciesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListSodPoliciesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

