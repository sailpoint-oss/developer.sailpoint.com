---
id: resourceobjectsrequest
title: Resourceobjectsrequest
pagination_label: Resourceobjectsrequest
sidebar_label: Resourceobjectsrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Resourceobjectsrequest', 'Resourceobjectsrequest'] 
slug: /tools/sdk/powershell/sources/models/resourceobjectsrequest
tags: ['SDK', 'Software Development Kit', 'Resourceobjectsrequest', 'Resourceobjectsrequest']
---


# Resourceobjectsrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** | **String** | The type of resource objects to iterate over. | [optional] [default to "account"]
**MaxCount** | **Int32** | The maximum number of resource objects to iterate over and return. | [optional] [default to 25]

## Examples

- Prepare the resource
```powershell
$Resourceobjectsrequest = Initialize-Resourceobjectsrequest  -ObjectType group `
 -MaxCount 100
```

- Convert the resource to JSON
```powershell
$Resourceobjectsrequest | ConvertTo-JSON
```


[[Back to top]](#) 

