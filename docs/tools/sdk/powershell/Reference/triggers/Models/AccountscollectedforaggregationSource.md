---
id: accountscollectedforaggregation-source
title: AccountscollectedforaggregationSource
pagination_label: AccountscollectedforaggregationSource
sidebar_label: AccountscollectedforaggregationSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountscollectedforaggregationSource', 'AccountscollectedforaggregationSource'] 
slug: /tools/sdk/powershell/triggers/models/accountscollectedforaggregation-source
tags: ['SDK', 'Software Development Kit', 'AccountscollectedforaggregationSource', 'AccountscollectedforaggregationSource']
---


# AccountscollectedforaggregationSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the object to which this reference applies | [required]
**Type** |  **Enum** [  "SOURCE" ] | The type of object that is referenced | [required]
**Name** | **String** | Human-readable display name of the object to which this reference applies | [required]

## Examples

- Prepare the resource
```powershell
$AccountscollectedforaggregationSource = Initialize-AccountscollectedforaggregationSource  -Id 4e4d982dddff4267ab12f0f1e72b5a6d `
 -Type SOURCE `
 -Name Corporate Active Directory
```

- Convert the resource to JSON
```powershell
$AccountscollectedforaggregationSource | ConvertTo-JSON
```


[[Back to top]](#) 

