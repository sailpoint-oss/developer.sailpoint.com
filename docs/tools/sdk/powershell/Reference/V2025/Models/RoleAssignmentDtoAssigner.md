---
id: v2025-role-assignment-dto-assigner
title: RoleAssignmentDtoAssigner
pagination_label: RoleAssignmentDtoAssigner
sidebar_label: RoleAssignmentDtoAssigner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleAssignmentDtoAssigner', 'V2025RoleAssignmentDtoAssigner'] 
slug: /tools/sdk/powershell/v2025/models/role-assignment-dto-assigner
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDtoAssigner', 'V2025RoleAssignmentDtoAssigner']
---


# RoleAssignmentDtoAssigner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "UNKNOWN" ] | Object type | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleAssignmentDtoAssigner = Initialize-V2025RoleAssignmentDtoAssigner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$RoleAssignmentDtoAssigner | ConvertTo-JSON
```


[[Back to top]](#) 

