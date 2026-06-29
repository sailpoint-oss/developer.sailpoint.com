---
id: sodpolicyschedule
title: Sodpolicyschedule
pagination_label: Sodpolicyschedule
sidebar_label: Sodpolicyschedule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sodpolicyschedule', 'Sodpolicyschedule'] 
slug: /tools/sdk/powershell/sodpolicies/models/sodpolicyschedule
tags: ['SDK', 'Software Development Kit', 'Sodpolicyschedule', 'Sodpolicyschedule']
---


# Sodpolicyschedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | SOD Policy schedule name | [optional] 
**Created** | **System.DateTime** | The time when this SOD policy schedule is created. | [optional] [readonly] 
**Modified** | **System.DateTime** | The time when this SOD policy schedule is modified. | [optional] [readonly] 
**Description** | **String** | SOD Policy schedule description | [optional] 
**Schedule** | [**Schedule**](schedule) |  | [optional] 
**Recipients** | [**[]Sodrecipient**](sodrecipient) |  | [optional] 
**EmailEmptyResults** | **Boolean** | Indicates if empty results need to be emailed | [optional] [default to $false]
**CreatorId** | **String** | Policy's creator ID | [optional] [readonly] 
**ModifierId** | **String** | Policy's modifier ID | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Sodpolicyschedule = Initialize-Sodpolicyschedule  -Name SCH-1584312283015 `
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
$Sodpolicyschedule | ConvertTo-JSON
```


[[Back to top]](#) 

