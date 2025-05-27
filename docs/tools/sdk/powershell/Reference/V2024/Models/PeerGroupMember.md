---
id: v2024-peer-group-member
title: PeerGroupMember
pagination_label: PeerGroupMember
sidebar_label: PeerGroupMember
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PeerGroupMember', 'V2024PeerGroupMember'] 
slug: /tools/sdk/powershell/v2024/models/peer-group-member
tags: ['SDK', 'Software Development Kit', 'PeerGroupMember', 'V2024PeerGroupMember']
---


# PeerGroupMember

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | A unique identifier for the peer group member. | [optional] 
**Type** | **String** | The type of the peer group member. | [optional] 
**PeerGroupId** | **String** | The ID of the peer group. | [optional] 
**Attributes** | [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Arbitrary key-value pairs, belonging to the peer group member. | [optional] 

## Examples

- Prepare the resource
```powershell
$PeerGroupMember = Initialize-V2024PeerGroupMember  -Id null `
 -Type null `
 -PeerGroupId null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$PeerGroupMember | ConvertTo-JSON
```


[[Back to top]](#) 

