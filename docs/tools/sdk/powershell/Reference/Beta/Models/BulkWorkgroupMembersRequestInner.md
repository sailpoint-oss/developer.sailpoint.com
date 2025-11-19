---
id: beta-bulk-workgroup-members-request-inner
title: BulkWorkgroupMembersRequestInner
pagination_label: BulkWorkgroupMembersRequestInner
sidebar_label: BulkWorkgroupMembersRequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkWorkgroupMembersRequestInner', 'BetaBulkWorkgroupMembersRequestInner'] 
slug: /tools/sdk/powershell/beta/models/bulk-workgroup-members-request-inner
tags: ['SDK', 'Software Development Kit', 'BulkWorkgroupMembersRequestInner', 'BetaBulkWorkgroupMembersRequestInner']
---


# BulkWorkgroupMembersRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Identity's DTO type. | [optional] 
**Id** | **String** | Identity ID. | [optional] 
**Name** | **String** | Identity's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkWorkgroupMembersRequestInner = Initialize-BetaBulkWorkgroupMembersRequestInner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$BulkWorkgroupMembersRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

