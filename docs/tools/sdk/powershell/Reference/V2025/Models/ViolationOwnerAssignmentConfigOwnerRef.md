---
id: v2025-violation-owner-assignment-config-owner-ref
title: ViolationOwnerAssignmentConfigOwnerRef
pagination_label: ViolationOwnerAssignmentConfigOwnerRef
sidebar_label: ViolationOwnerAssignmentConfigOwnerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationOwnerAssignmentConfigOwnerRef', 'V2025ViolationOwnerAssignmentConfigOwnerRef'] 
slug: /tools/sdk/powershell/v2025/models/violation-owner-assignment-config-owner-ref
tags: ['SDK', 'Software Development Kit', 'ViolationOwnerAssignmentConfigOwnerRef', 'V2025ViolationOwnerAssignmentConfigOwnerRef']
---


# ViolationOwnerAssignmentConfigOwnerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP",    "MANAGER" ] | Owner type. | [optional] 
**Id** | **String** | Owner's ID. | [optional] 
**Name** | **String** | Owner's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationOwnerAssignmentConfigOwnerRef = Initialize-V2025ViolationOwnerAssignmentConfigOwnerRef  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$ViolationOwnerAssignmentConfigOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

