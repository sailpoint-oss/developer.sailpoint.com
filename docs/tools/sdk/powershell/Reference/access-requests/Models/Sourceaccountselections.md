---
id: sourceaccountselections
title: Sourceaccountselections
pagination_label: Sourceaccountselections
sidebar_label: Sourceaccountselections
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceaccountselections', 'Sourceaccountselections'] 
slug: /tools/sdk/powershell/accessrequests/models/sourceaccountselections
tags: ['SDK', 'Software Development Kit', 'Sourceaccountselections', 'Sourceaccountselections']
---


# Sourceaccountselections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | The source id | [optional] 
**Name** | **String** | The source name | [optional] 
**Accounts** | [**[]Accountinforef**](accountinforef) | The accounts information for a particular source in the requested item | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourceaccountselections = Initialize-Sourceaccountselections  -Type null `
 -Id 3ac3c43785a845fa9820b0c1ac767cd5 `
 -Name Test Source_Name `
 -Accounts null
```

- Convert the resource to JSON
```powershell
$Sourceaccountselections | ConvertTo-JSON
```


[[Back to top]](#) 

