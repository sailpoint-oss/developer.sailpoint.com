---
id: beta-workgroup-dto-owner
title: WorkgroupDtoOwner
pagination_label: WorkgroupDtoOwner
sidebar_label: WorkgroupDtoOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkgroupDtoOwner', 'BetaWorkgroupDtoOwner'] 
slug: /tools/sdk/powershell/beta/models/workgroup-dto-owner
tags: ['SDK', 'Software Development Kit', 'WorkgroupDtoOwner', 'BetaWorkgroupDtoOwner']
---


# WorkgroupDtoOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner's DTO type. | [optional] 
**Id** | **String** | Owner's identity ID. | [optional] 
**Name** | **String** | Owner's name. | [optional] 
**DisplayName** | **String** | The display name of the identity | [optional] [readonly] 
**EmailAddress** | **String** | The primary email address of the identity | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$WorkgroupDtoOwner = Initialize-BetaWorkgroupDtoOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support `
 -DisplayName Support `
 -EmailAddress support@sailpoint.com
```

- Convert the resource to JSON
```powershell
$WorkgroupDtoOwner | ConvertTo-JSON
```


[[Back to top]](#) 

