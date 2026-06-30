---
id: workgroupdto-owner
title: WorkgroupdtoOwner
pagination_label: WorkgroupdtoOwner
sidebar_label: WorkgroupdtoOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkgroupdtoOwner', 'WorkgroupdtoOwner'] 
slug: /tools/sdk/powershell/governancegroups/models/workgroupdto-owner
tags: ['SDK', 'Software Development Kit', 'WorkgroupdtoOwner', 'WorkgroupdtoOwner']
---


# WorkgroupdtoOwner

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
$WorkgroupdtoOwner = Initialize-WorkgroupdtoOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support `
 -DisplayName Support `
 -EmailAddress support@sailpoint.com
```

- Convert the resource to JSON
```powershell
$WorkgroupdtoOwner | ConvertTo-JSON
```


[[Back to top]](#) 

