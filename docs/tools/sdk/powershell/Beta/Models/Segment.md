---
id: segment
title: Segment
pagination_label: Segment
sidebar_label: Segment
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Segment'] 
slug: /tools/sdk/powershell/beta/models/segment
tags: ['SDK', 'Software Development Kit', 'Segment']
---


# Segment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The segment&#39;s ID. | [optional] 
**Name** |  Pointer to **String** | The segment&#39;s business name. | [optional] 
**Created** |  Pointer to **System.DateTime** | The time when the segment is created. | [optional] 
**Modified** |  Pointer to **System.DateTime** | The time when the segment is modified. | [optional] 
**Description** |  Pointer to **String** | The segment&#39;s optional description. | [optional] 
**Owner** |  Pointer to [**OwnerReferenceSegments**](owner-reference-segments) |  | [optional] 
**VisibilityCriteria** |  Pointer to [**VisibilityCriteria**](visibility-criteria) |  | [optional] 
**Active** |  Pointer to **Boolean** | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Segment = Initialize-BetaSegment  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
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

