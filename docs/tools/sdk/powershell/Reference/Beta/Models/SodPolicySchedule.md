---
id: beta-sod-policy-schedule
title: SodPolicySchedule
pagination_label: SodPolicySchedule
sidebar_label: SodPolicySchedule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicySchedule', 'BetaSodPolicySchedule'] 
slug: /tools/sdk/powershell/beta/models/sod-policy-schedule
tags: ['SDK', 'Software Development Kit', 'SodPolicySchedule', 'BetaSodPolicySchedule']
---


# SodPolicySchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | SOD Policy schedule name | [optional] 
**Created** | **System.DateTime** | The time when this SOD policy schedule is created. | [optional] 
**Modified** | **System.DateTime** | The time when this SOD policy schedule is modified. | [optional] 
**Description** | **String** | SOD Policy schedule description | [optional] 
**Schedule** | [**Schedule1**](schedule1) |  | [optional] 
**Recipients** | [**[]SodRecipient**](sod-recipient) |  | [optional] 
**EmailEmptyResults** | **Boolean** | Indicates if empty results need to be emailed | [optional] 
**CreatorId** | **String** | Policy's creator ID | [optional] 
**ModifierId** | **String** | Policy's modifier ID | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicySchedule = Initialize-BetaSodPolicySchedule  -Name SCH-1584312283015 `
 -Created 2020-01-01T00:00Z `
 -Modified 2020-01-01T00:00Z `
 -Description Schedule for policy xyz `
 -Schedule null `
 -Recipients null `
 -EmailEmptyResults false `
 -CreatorId 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -ModifierId 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
```

- Convert the resource to JSON
```powershell
$SodPolicySchedule | ConvertTo-JSON
```


[[Back to top]](#) 

