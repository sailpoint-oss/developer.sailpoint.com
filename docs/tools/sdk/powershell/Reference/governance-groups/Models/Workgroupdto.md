---
id: workgroupdto
title: Workgroupdto
pagination_label: Workgroupdto
sidebar_label: Workgroupdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workgroupdto', 'Workgroupdto'] 
slug: /tools/sdk/powershell/governancegroups/models/workgroupdto
tags: ['SDK', 'Software Development Kit', 'Workgroupdto', 'Workgroupdto']
---


# Workgroupdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Owner** | [**WorkgroupdtoOwner**](workgroupdto-owner) |  | [optional] 
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
$Workgroupdto = Initialize-Workgroupdto  -Owner null `
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
$Workgroupdto | ConvertTo-JSON
```


[[Back to top]](#) 

