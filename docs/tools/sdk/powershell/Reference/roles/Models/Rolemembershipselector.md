---
id: rolemembershipselector
title: Rolemembershipselector
pagination_label: Rolemembershipselector
sidebar_label: Rolemembershipselector
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolemembershipselector', 'Rolemembershipselector'] 
slug: /tools/sdk/powershell/roles/models/rolemembershipselector
tags: ['SDK', 'Software Development Kit', 'Rolemembershipselector', 'Rolemembershipselector']
---


# Rolemembershipselector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Rolemembershipselectortype**](rolemembershipselectortype) |  | [optional] 
**Criteria** | [**Rolecriterialevel1**](rolecriterialevel1) |  | [optional] 
**Identities** | [**[]Rolemembershipidentity**](rolemembershipidentity) | Defines role membership as being exclusive to the specified Identities, when type is IDENTITY_LIST. | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolemembershipselector = Initialize-Rolemembershipselector  -Type null `
 -Criteria null `
 -Identities null
```

- Convert the resource to JSON
```powershell
$Rolemembershipselector | ConvertTo-JSON
```


[[Back to top]](#) 

