---
id: peergroupmember
title: Peergroupmember
pagination_label: Peergroupmember
sidebar_label: Peergroupmember
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Peergroupmember', 'Peergroupmember'] 
slug: /tools/sdk/powershell/iaipeergroupstrategies/models/peergroupmember
tags: ['SDK', 'Software Development Kit', 'Peergroupmember', 'Peergroupmember']
---


# Peergroupmember

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
$Peergroupmember = Initialize-Peergroupmember  -Id null `
 -Type null `
 -PeerGroupId null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$Peergroupmember | ConvertTo-JSON
```


[[Back to top]](#) 

