---
id: bulkworkgroupmembersrequest-inner
title: BulkworkgroupmembersrequestInner
pagination_label: BulkworkgroupmembersrequestInner
sidebar_label: BulkworkgroupmembersrequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkworkgroupmembersrequestInner', 'BulkworkgroupmembersrequestInner'] 
slug: /tools/sdk/powershell/governancegroups/models/bulkworkgroupmembersrequest-inner
tags: ['SDK', 'Software Development Kit', 'BulkworkgroupmembersrequestInner', 'BulkworkgroupmembersrequestInner']
---


# BulkworkgroupmembersrequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Identity's DTO type. | [optional] 
**Id** | **String** | Identity ID. | [optional] 
**Name** | **String** | Identity's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkworkgroupmembersrequestInner = Initialize-BulkworkgroupmembersrequestInner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$BulkworkgroupmembersrequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

