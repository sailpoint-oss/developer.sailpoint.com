---
id: v2024-violation-owner-assignment-config
title: ViolationOwnerAssignmentConfig
pagination_label: ViolationOwnerAssignmentConfig
sidebar_label: ViolationOwnerAssignmentConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationOwnerAssignmentConfig', 'V2024ViolationOwnerAssignmentConfig'] 
slug: /tools/sdk/powershell/v2024/models/violation-owner-assignment-config
tags: ['SDK', 'Software Development Kit', 'ViolationOwnerAssignmentConfig', 'V2024ViolationOwnerAssignmentConfig']
---


# ViolationOwnerAssignmentConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignmentRule** |  **Enum** [  "MANAGER",    "STATIC" ] | Details about the violations owner. MANAGER - identity's manager STATIC - Governance Group or Identity | [optional] 
**OwnerRef** | [**ViolationOwnerAssignmentConfigOwnerRef**](violation-owner-assignment-config-owner-ref) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationOwnerAssignmentConfig = Initialize-PSSailpoint.V2024ViolationOwnerAssignmentConfig  -AssignmentRule MANAGER `
 -OwnerRef null
```

- Convert the resource to JSON
```powershell
$ViolationOwnerAssignmentConfig | ConvertTo-JSON
```


[[Back to top]](#) 

