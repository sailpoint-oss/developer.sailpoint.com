---
id: sourcesubtypewithsource-source
title: SourcesubtypewithsourceSource
pagination_label: SourcesubtypewithsourceSource
sidebar_label: SourcesubtypewithsourceSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourcesubtypewithsourceSource', 'SourcesubtypewithsourceSource'] 
slug: /tools/sdk/powershell/machineaccountsubtypes/models/sourcesubtypewithsource-source
tags: ['SDK', 'Software Development Kit', 'SourcesubtypewithsourceSource', 'SourcesubtypewithsourceSource']
---


# SourcesubtypewithsourceSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | Type of the reference object. | [optional] 
**Id** | **String** | Unique identifier for the source. | [optional] 
**Name** | **String** | Name of the source. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourcesubtypewithsourceSource = Initialize-SourcesubtypewithsourceSource  -Type SOURCE `
 -Id 6d0458373bec4b4b80460992b76016da `
 -Name Test Source
```

- Convert the resource to JSON
```powershell
$SourcesubtypewithsourceSource | ConvertTo-JSON
```


[[Back to top]](#) 

