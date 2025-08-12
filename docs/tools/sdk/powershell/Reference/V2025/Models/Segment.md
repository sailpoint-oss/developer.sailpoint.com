---
id: v2025-segment
title: Segment
pagination_label: Segment
sidebar_label: Segment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Segment', 'V2025Segment'] 
slug: /tools/sdk/powershell/v2025/models/segment
tags: ['SDK', 'Software Development Kit', 'Segment', 'V2025Segment']
---


# Segment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The segment's ID. | [optional] 
**Name** | **String** | The segment's business name. | [optional] 
**Created** | **System.DateTime** | The time when the segment is created. | [optional] 
**Modified** | **System.DateTime** | The time when the segment is modified. | [optional] 
**Description** | **String** | The segment's optional description. | [optional] 
**Owner** | [**OwnerReferenceSegments**](owner-reference-segments) |  | [optional] 
**VisibilityCriteria** | [**SegmentVisibilityCriteria**](segment-visibility-criteria) |  | [optional] 
**Active** | **Boolean** | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Segment = Initialize-V2025Segment  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name segment-xyz `
 -Created 2020-01-01T00:00Z `
 -Modified 2020-01-01T00:00Z `
 -Description This segment represents xyz `
 -Owner null `
 -VisibilityCriteria null `
 -Active true
```

- Convert the resource to JSON
```powershell
$Segment | ConvertTo-JSON
```


[[Back to top]](#) 

