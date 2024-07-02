---
id: violation-owner-assignment-config
title: ViolationOwnerAssignmentConfig
pagination_label: ViolationOwnerAssignmentConfig
sidebar_label: ViolationOwnerAssignmentConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ViolationOwnerAssignmentConfig'] 
slug: /tools/sdk/powershell/beta/models/violation-owner-assignment-config
tags: ['SDK', 'Software Development Kit', 'ViolationOwnerAssignmentConfig']
---


# ViolationOwnerAssignmentConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignmentRule** |  Pointer to  **Enum** [  "MANAGER",    "STATIC",    "null" ] | Details about the violations owner. MANAGER - identity&#39;s manager STATIC - Governance Group or Identity | [optional] 
**OwnerRef** |  Pointer to [**ViolationOwnerAssignmentConfigOwnerRef**](violation-owner-assignment-config-owner-ref) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationOwnerAssignmentConfig = Initialize-BetaViolationOwnerAssignmentConfig  -AssignmentRule MANAGER `
 -OwnerRef null
```

- Convert the resource to JSON
```powershell
$ViolationOwnerAssignmentConfig | ConvertTo-JSON
```


[[Back to top]](#) 

