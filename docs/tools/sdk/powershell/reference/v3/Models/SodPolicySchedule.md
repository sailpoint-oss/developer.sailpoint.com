---
id: sod-policy-schedule
title: SodPolicySchedule
pagination_label: SodPolicySchedule
sidebar_label: SodPolicySchedule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicySchedule'] 
slug: /tools/sdk/powershell/v3/models/sod-policy-schedule
tags: ['SDK', 'Software Development Kit', 'SodPolicySchedule']
---


# SodPolicySchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | SOD Policy schedule name | [optional] 
**Created** |  Pointer to **System.DateTime** | The time when this SOD policy schedule is created. | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | The time when this SOD policy schedule is modified. | [optional] [readonly] 
**Description** |  Pointer to **String** | SOD Policy schedule description | [optional] 
**Schedule** |  Pointer to [**Schedule1**](schedule1) |  | [optional] 
**Recipients** |  Pointer to [**[]SodRecipient**](sod-recipient) |  | [optional] 
**EmailEmptyResults** |  Pointer to **Boolean** | Indicates if empty results need to be emailed | [optional] [default to $false]
**CreatorId** |  Pointer to **String** | Policy's creator ID | [optional] [readonly] 
**ModifierId** |  Pointer to **String** | Policy's modifier ID | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$SodPolicySchedule = Initialize-PSSailpoint.V3SodPolicySchedule  -Name SCH-1584312283015 `
 -Created 2020-01-01T00:00Z `
 -Modified 2020-01-01T00:00Z `
 -Description Schedule for policy xyz `
 -Schedule null `
 -Recipients null `
 -EmailEmptyResults false `
 -CreatorId 0f11f2a47c944bf3a2bd742580fe3bde `
 -ModifierId 0f11f2a47c944bf3a2bd742580fe3bde
```

- Convert the resource to JSON
```powershell
$SodPolicySchedule | ConvertTo-JSON
```


[[Back to top]](#) 

