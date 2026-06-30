---
id: roleassignmentdto-assigner
title: RoleassignmentdtoAssigner
pagination_label: RoleassignmentdtoAssigner
sidebar_label: RoleassignmentdtoAssigner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleassignmentdtoAssigner', 'RoleassignmentdtoAssigner'] 
slug: /tools/sdk/powershell/identities/models/roleassignmentdto-assigner
tags: ['SDK', 'Software Development Kit', 'RoleassignmentdtoAssigner', 'RoleassignmentdtoAssigner']
---


# RoleassignmentdtoAssigner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "UNKNOWN" ] | Object type | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleassignmentdtoAssigner = Initialize-RoleassignmentdtoAssigner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$RoleassignmentdtoAssigner | ConvertTo-JSON
```


[[Back to top]](#) 

