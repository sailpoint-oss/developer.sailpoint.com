---
id: bulk-workgroup-members-request-inner
title: BulkWorkgroupMembersRequestInner
pagination_label: BulkWorkgroupMembersRequestInner
sidebar_label: BulkWorkgroupMembersRequestInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BulkWorkgroupMembersRequestInner'] 
slug: /tools/sdk/powershell/beta/models/bulk-workgroup-members-request-inner
tags: ['SDK', 'Software Development Kit', 'BulkWorkgroupMembersRequestInner']
---


# BulkWorkgroupMembersRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Identity&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Identity ID. | [optional] 
**Name** |  Pointer to **String** | Identity&#39;s display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkWorkgroupMembersRequestInner = Initialize-PSSailpointBetaBulkWorkgroupMembersRequestInner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$BulkWorkgroupMembersRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

