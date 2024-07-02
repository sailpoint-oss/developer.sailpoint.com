---
id: peer-group-member
title: PeerGroupMember
pagination_label: PeerGroupMember
sidebar_label: PeerGroupMember
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PeerGroupMember'] 
slug: /tools/sdk/powershell/beta/models/peer-group-member
tags: ['SDK', 'Software Development Kit', 'PeerGroupMember']
---


# PeerGroupMember

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | A unique identifier for the peer group member. | [optional] 
**Type** |  Pointer to **String** | The type of the peer group member. | [optional] 
**PeerGroupId** |  Pointer to **String** | The ID of the peer group. | [optional] 
**Attributes** |  Pointer to [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Arbitrary key-value pairs, belonging to the peer group member. | [optional] 

## Examples

- Prepare the resource
```powershell
$PeerGroupMember = Initialize-BetaPeerGroupMember  -Id null `
 -Type null `
 -PeerGroupId null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$PeerGroupMember | ConvertTo-JSON
```


[[Back to top]](#) 

