---
id: get-privilege-criteria-config-v1429-response
title: GetPrivilegeCriteriaConfigV1429Response
pagination_label: GetPrivilegeCriteriaConfigV1429Response
sidebar_label: GetPrivilegeCriteriaConfigV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPrivilegeCriteriaConfigV1429Response', 'GetPrivilegeCriteriaConfigV1429Response'] 
slug: /tools/sdk/powershell/privilegecriteriaconfiguration/models/get-privilege-criteria-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPrivilegeCriteriaConfigV1429Response', 'GetPrivilegeCriteriaConfigV1429Response']
---


# GetPrivilegeCriteriaConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPrivilegeCriteriaConfigV1429Response = Initialize-GetPrivilegeCriteriaConfigV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetPrivilegeCriteriaConfigV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

