---
id: beta-workgroup-dto
title: WorkgroupDto
pagination_label: WorkgroupDto
sidebar_label: WorkgroupDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkgroupDto', 'BetaWorkgroupDto'] 
slug: /tools/sdk/powershell/beta/models/workgroup-dto
tags: ['SDK', 'Software Development Kit', 'WorkgroupDto', 'BetaWorkgroupDto']
---


# WorkgroupDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Owner** | [**WorkgroupDtoOwner**](workgroup-dto-owner) |  | [optional] 
**Id** | **String** | Governance group ID. | [optional] [readonly] 
**Name** | **String** | Governance group name. | [optional] 
**Description** | **String** | Governance group description. | [optional] 
**MemberCount** | **Int64** | Number of members in the governance group. | [optional] [readonly] 
**ConnectionCount** | **Int64** | Number of connections in the governance group. | [optional] [readonly] 
**Created** | **System.DateTime** |  | [optional] 
**Modified** | **System.DateTime** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkgroupDto = Initialize-PSSailpoint.BetaWorkgroupDto  -Owner null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name DB Access Governance Group `
 -Description Description of the Governance Group `
 -MemberCount 1641498673000 `
 -ConnectionCount 1641498673000 `
 -Created 2022-01-06T19:51:13Z `
 -Modified 2022-01-06T19:51:13Z
```

- Convert the resource to JSON
```powershell
$WorkgroupDto | ConvertTo-JSON
```


[[Back to top]](#) 

