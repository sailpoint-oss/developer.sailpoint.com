---
id: list-account-activities-v1401-response
title: ListAccountActivitiesV1401Response
pagination_label: ListAccountActivitiesV1401Response
sidebar_label: ListAccountActivitiesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListAccountActivitiesV1401Response', 'ListAccountActivitiesV1401Response'] 
slug: /tools/sdk/powershell/accountactivities/models/list-account-activities-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListAccountActivitiesV1401Response', 'ListAccountActivitiesV1401Response']
---


# ListAccountActivitiesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccountActivitiesV1401Response = Initialize-ListAccountActivitiesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListAccountActivitiesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

