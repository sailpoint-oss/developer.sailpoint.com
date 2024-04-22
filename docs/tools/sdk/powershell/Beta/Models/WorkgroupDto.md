---
id: workgroup-dto
title: WorkgroupDto
pagination_label: WorkgroupDto
sidebar_label: WorkgroupDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkgroupDto'] 
slug: /tools/sdk/powershell/beta/models/workgroup-dto
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

## Examples

- Prepare the resource
```powershell
$WorkgroupDto = Initialize-BetaWorkgroupDto  -Owner null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name DB Access Governance Group `
 -Description Description of the Governance Group `
 -MemberCount 1641498673000 `
 -ConnectionCount 1641498673000
```

- Convert the resource to JSON
```powershell
$WorkgroupDto | ConvertTo-JSON
```


[[Back to top]](#) 

