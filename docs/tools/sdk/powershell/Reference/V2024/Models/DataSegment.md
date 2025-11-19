---
id: v2024-data-segment
title: DataSegment
pagination_label: DataSegment
sidebar_label: DataSegment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataSegment', 'V2024DataSegment'] 
slug: /tools/sdk/powershell/v2024/models/data-segment
tags: ['SDK', 'Software Development Kit', 'DataSegment', 'V2024DataSegment']
---


# DataSegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The segment's ID. | [optional] 
**Name** | **String** | The segment's business name. | [optional] 
**Created** | **System.DateTime** | The time when the segment is created. | [optional] 
**Modified** | **System.DateTime** | The time when the segment is modified. | [optional] 
**Description** | **String** | The segment's optional description. | [optional] 
**Scopes** | [**[]Scope**](scope) | List of Scopes that are assigned to the segment | [optional] 
**MemberSelection** | [**[]Ref**](ref) | List of Identities that are assigned to the segment | [optional] 
**MemberFilter** | [**VisibilityCriteria**](visibility-criteria) |  | [optional] 
**Membership** | [**MembershipType**](membership-type) |  | [optional] 
**Enabled** | **Boolean** | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [optional] [default to $false]
**Published** | **Boolean** | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified to until published | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$DataSegment = Initialize-V2024DataSegment  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name segment-xyz `
 -Created 2020-01-01T00:00Z `
 -Modified 2020-01-01T00:00Z `
 -Description This segment represents xyz `
 -Scopes [{scope=ENTITLEMENT, visibility=SELECTION, scopeFilter=null, scopeSelection=[{type=ENTITLEMENT, id=34d73f611449463ea4fdcf02cda0c397}]}] `
 -MemberSelection [{type=IDENTITY, id=29cb6c061da843ea8be4b3125f248f2a}, {type=IDENTITY, id=f7b1b8a35fed4fd4ad2982014e137e19}] `
 -MemberFilter null `
 -Membership null `
 -Enabled true `
 -Published true
```

- Convert the resource to JSON
```powershell
$DataSegment | ConvertTo-JSON
```


[[Back to top]](#) 

