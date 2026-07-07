---
id: basesegment
title: Basesegment
pagination_label: Basesegment
sidebar_label: Basesegment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Basesegment', 'Basesegment'] 
slug: /tools/sdk/powershell/search/models/basesegment
tags: ['SDK', 'Software Development Kit', 'Basesegment', 'Basesegment']
---


# Basesegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Segment's unique ID. | [optional] 
**Name** | **String** | Segment's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Basesegment = Initialize-Basesegment  -Id b009b6e3-b56d-41d9-8735-cb532ea0b017 `
 -Name Test Segment
```

- Convert the resource to JSON
```powershell
$Basesegment | ConvertTo-JSON
```


[[Back to top]](#) 

