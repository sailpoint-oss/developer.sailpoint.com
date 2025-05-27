---
id: beta-violation-owner-assignment-config-owner-ref
title: ViolationOwnerAssignmentConfigOwnerRef
pagination_label: ViolationOwnerAssignmentConfigOwnerRef
sidebar_label: ViolationOwnerAssignmentConfigOwnerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationOwnerAssignmentConfigOwnerRef', 'BetaViolationOwnerAssignmentConfigOwnerRef'] 
slug: /tools/sdk/powershell/beta/models/violation-owner-assignment-config-owner-ref
tags: ['SDK', 'Software Development Kit', 'ViolationOwnerAssignmentConfigOwnerRef', 'BetaViolationOwnerAssignmentConfigOwnerRef']
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
$ViolationOwnerAssignmentConfigOwnerRef = Initialize-BetaViolationOwnerAssignmentConfigOwnerRef  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$ViolationOwnerAssignmentConfigOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

