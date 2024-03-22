---
id: violation-owner-assignment-config-owner-ref
title: ViolationOwnerAssignmentConfigOwnerRef
pagination_label: ViolationOwnerAssignmentConfigOwnerRef
sidebar_label: ViolationOwnerAssignmentConfigOwnerRef
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ViolationOwnerAssignmentConfigOwnerRef'] 
slug: /tools/sdk/powershell/beta/models/violation-owner-assignment-config-owner-ref
tags: ['SDK', 'Software Development Kit', 'ViolationOwnerAssignmentConfigOwnerRef']
---


# ViolationOwnerAssignmentConfigOwnerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Owner&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Owner&#39;s identity ID. | [optional] 
**Name** |  Pointer to **String** | Owner&#39;s display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationOwnerAssignmentConfigOwnerRef = Initialize-PSSailpointBetaViolationOwnerAssignmentConfigOwnerRef  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$ViolationOwnerAssignmentConfigOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

