---
id: v2024-base-segment
title: BaseSegment
pagination_label: BaseSegment
sidebar_label: BaseSegment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseSegment', 'V2024BaseSegment'] 
slug: /tools/sdk/powershell/v2024/models/base-segment
tags: ['SDK', 'Software Development Kit', 'BaseSegment', 'V2024BaseSegment']
---


# BaseSegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Segment's unique ID. | [optional] 
**Name** |  Pointer to **String** | Segment's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseSegment = Initialize-PSSailpoint.V2024BaseSegment  -Id b009b6e3-b56d-41d9-8735-cb532ea0b017 `
 -Name Test Segment
```

- Convert the resource to JSON
```powershell
$BaseSegment | ConvertTo-JSON
```


[[Back to top]](#) 

