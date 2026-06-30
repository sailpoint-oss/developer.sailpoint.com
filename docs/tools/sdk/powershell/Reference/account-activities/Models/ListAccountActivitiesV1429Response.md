---
id: list-account-activities-v1429-response
title: ListAccountActivitiesV1429Response
pagination_label: ListAccountActivitiesV1429Response
sidebar_label: ListAccountActivitiesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListAccountActivitiesV1429Response', 'ListAccountActivitiesV1429Response'] 
slug: /tools/sdk/powershell/accountactivities/models/list-account-activities-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListAccountActivitiesV1429Response', 'ListAccountActivitiesV1429Response']
---


# ListAccountActivitiesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccountActivitiesV1429Response = Initialize-ListAccountActivitiesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListAccountActivitiesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

