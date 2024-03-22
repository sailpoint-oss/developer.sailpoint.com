---
id: source-cluster-dto
title: SourceClusterDto
pagination_label: SourceClusterDto
sidebar_label: SourceClusterDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourceClusterDto'] 
slug: /tools/sdk/powershell/v3/models/source-cluster-dto
tags: ['SDK', 'Software Development Kit', 'SourceClusterDto']
---


# SourceClusterDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "CLUSTER" ] | Source cluster DTO type. | [optional] 
**Id** |  Pointer to **String** | Source cluster ID. | [optional] 
**Name** |  Pointer to **String** | Source cluster display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceClusterDto = Initialize-PSSailpointSourceClusterDto  -Type CLUSTER `
 -Id 2c9180847a7fccdd017aa5896f9f4f6f `
 -Name Training VA
```

- Convert the resource to JSON
```powershell
$SourceClusterDto | ConvertTo-JSON
```


[[Back to top]](#) 

