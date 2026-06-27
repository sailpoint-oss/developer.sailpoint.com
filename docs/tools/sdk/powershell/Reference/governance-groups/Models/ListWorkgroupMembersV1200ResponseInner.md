---
id: list-workgroup-members-v1200-response-inner
title: ListWorkgroupMembersV1200ResponseInner
pagination_label: ListWorkgroupMembersV1200ResponseInner
sidebar_label: ListWorkgroupMembersV1200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListWorkgroupMembersV1200ResponseInner', 'ListWorkgroupMembersV1200ResponseInner'] 
slug: /tools/sdk/powershell/governancegroups/models/list-workgroup-members-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListWorkgroupMembersV1200ResponseInner', 'ListWorkgroupMembersV1200ResponseInner']
---


# ListWorkgroupMembersV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Workgroup member identity DTO type. | [optional] 
**Id** | **String** | Workgroup member identity ID. | [optional] 
**Name** | **String** | Workgroup member identity display name. | [optional] 
**Email** | **String** | Workgroup member identity email. | [optional] 

## Examples

- Prepare the resource
```powershell
$ListWorkgroupMembersV1200ResponseInner = Initialize-ListWorkgroupMembersV1200ResponseInner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels `
 -Email michael.michaels@sailpoint.com
```

- Convert the resource to JSON
```powershell
$ListWorkgroupMembersV1200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

