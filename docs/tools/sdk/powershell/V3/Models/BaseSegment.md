---
id: base-segment
title: BaseSegment
pagination_label: BaseSegment
sidebar_label: BaseSegment
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BaseSegment'] 
slug: /tools/sdk/powershell/v3/models/base-segment
tags: ['SDK', 'Software Development Kit', 'BaseSegment']
---


# BaseSegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Segment&#39;s unique ID. | [optional] 
**Name** |  Pointer to **String** | Segment&#39;s display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseSegment = Initialize-PSSailpointBaseSegment  -Id b009b6e3-b56d-41d9-8735-cb532ea0b017 `
 -Name Test Segment
```

- Convert the resource to JSON
```powershell
$BaseSegment | ConvertTo-JSON
```


[[Back to top]](#) 

