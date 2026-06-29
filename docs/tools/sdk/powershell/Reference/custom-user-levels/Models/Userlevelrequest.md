---
id: userlevelrequest
title: Userlevelrequest
pagination_label: Userlevelrequest
sidebar_label: Userlevelrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Userlevelrequest', 'Userlevelrequest'] 
slug: /tools/sdk/powershell/customuserlevels/models/userlevelrequest
tags: ['SDK', 'Software Development Kit', 'Userlevelrequest', 'Userlevelrequest']
---


# Userlevelrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the user level. | [required]
**Description** | **String** | A brief description of the user level. | [required]
**Owner** | [**Publicidentity**](publicidentity) |  | [required]
**RightSets** | **[]String** | A list of rights associated with the user level. | [optional] 

## Examples

- Prepare the resource
```powershell
$Userlevelrequest = Initialize-Userlevelrequest  -Name Custom User Level Name `
 -Description This is a description of the custom user level. `
 -Owner null `
 -RightSets ["idn:ui-right-set-list-read-example","idn:ui-right-set-write-example"]
```

- Convert the resource to JSON
```powershell
$Userlevelrequest | ConvertTo-JSON
```


[[Back to top]](#) 

