---
id: segment
title: Segment
pagination_label: Segment
sidebar_label: Segment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Segment'] 
slug: /tools/sdk/powershell/v3/models/segment
tags: ['SDK', 'Software Development Kit', 'Segment']
---


# Segment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The segment's ID. | [optional] 
**Name** |  Pointer to **String** | The segment's business name. | [optional] 
**Created** |  Pointer to **System.DateTime** | The time when the segment is created. | [optional] 
**Modified** |  Pointer to **System.DateTime** | The time when the segment is modified. | [optional] 
**Description** |  Pointer to **String** | The segment's optional description. | [optional] 
**Owner** |  Pointer to [**OwnerReferenceSegments**](owner-reference-segments) |  | [optional] 
**VisibilityCriteria** |  Pointer to [**SegmentVisibilityCriteria**](segment-visibility-criteria) |  | [optional] 
**Active** |  Pointer to **Boolean** | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Segment = Initialize-PSSailpoint.V3Segment  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
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

