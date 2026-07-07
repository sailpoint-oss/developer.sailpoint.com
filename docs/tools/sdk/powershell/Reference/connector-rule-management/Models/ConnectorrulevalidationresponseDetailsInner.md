---
id: connectorrulevalidationresponse-details-inner
title: ConnectorrulevalidationresponseDetailsInner
pagination_label: ConnectorrulevalidationresponseDetailsInner
sidebar_label: ConnectorrulevalidationresponseDetailsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorrulevalidationresponseDetailsInner', 'ConnectorrulevalidationresponseDetailsInner'] 
slug: /tools/sdk/powershell/connectorrulemanagement/models/connectorrulevalidationresponse-details-inner
tags: ['SDK', 'Software Development Kit', 'ConnectorrulevalidationresponseDetailsInner', 'ConnectorrulevalidationresponseDetailsInner']
---


# ConnectorrulevalidationresponseDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Line** | **Int32** | The line number where the issue occurred | [required]
**Column** | **Int32** | the column number where the issue occurred | [required]
**Messsage** | **String** | a description of the issue in the code | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorrulevalidationresponseDetailsInner = Initialize-ConnectorrulevalidationresponseDetailsInner  -Line 2 `
 -Column 5 `
 -Messsage Remove reference to .decrypt(
```

- Convert the resource to JSON
```powershell
$ConnectorrulevalidationresponseDetailsInner | ConvertTo-JSON
```


[[Back to top]](#) 

