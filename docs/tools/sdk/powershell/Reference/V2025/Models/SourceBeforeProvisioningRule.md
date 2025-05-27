---
id: v2025-source-before-provisioning-rule
title: SourceBeforeProvisioningRule
pagination_label: SourceBeforeProvisioningRule
sidebar_label: SourceBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceBeforeProvisioningRule', 'V2025SourceBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/v2025/models/source-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'SourceBeforeProvisioningRule', 'V2025SourceBeforeProvisioningRule']
---


# SourceBeforeProvisioningRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Rule ID. | [optional] 
**Name** | **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceBeforeProvisioningRule = Initialize-V2025SourceBeforeProvisioningRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SourceBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

