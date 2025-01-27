---
id: workgroup-dto
title: WorkgroupDto
pagination_label: WorkgroupDto
sidebar_label: WorkgroupDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkgroupDto'] 
slug: /tools/sdk/powershell/v2024/models/workgroup-dto
tags: ['SDK', 'Software Development Kit', 'WorkgroupDto']
---


# WorkgroupDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Owner** |  Pointer to [**WorkgroupDtoOwner**](workgroup-dto-owner) |  | [optional] 
**Id** |  Pointer to **String** | Governance group ID. | [optional] [readonly] 
**Name** |  Pointer to **String** | Governance group name. | [optional] 
**Description** |  Pointer to **String** | Governance group description. | [optional] 
**MemberCount** |  Pointer to **Int64** | Number of members in the governance group. | [optional] [readonly] 
**ConnectionCount** |  Pointer to **Int64** | Number of connections in the governance group. | [optional] [readonly] 
**Created** |  Pointer to **System.DateTime** |  | [optional] 
**Modified** |  Pointer to **System.DateTime** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkgroupDto = Initialize-PSSailpoint.V2024WorkgroupDto  -Owner null `
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

