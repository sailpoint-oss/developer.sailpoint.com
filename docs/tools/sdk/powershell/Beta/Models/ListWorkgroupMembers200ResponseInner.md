---
id: list-workgroup-members200-response-inner
title: ListWorkgroupMembers200ResponseInner
pagination_label: ListWorkgroupMembers200ResponseInner
sidebar_label: ListWorkgroupMembers200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ListWorkgroupMembers200ResponseInner'] 
slug: /tools/sdk/powershell/beta/models/list-workgroup-members200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListWorkgroupMembers200ResponseInner']
---


# ListWorkgroupMembers200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Workgroup member identity DTO type. | [optional] 
**Id** |  Pointer to **String** | Workgroup member identity ID. | [optional] 
**Name** |  Pointer to **String** | Workgroup member identity display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$ListWorkgroupMembers200ResponseInner = Initialize-PSSailpointBetaListWorkgroupMembers200ResponseInner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$ListWorkgroupMembers200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

