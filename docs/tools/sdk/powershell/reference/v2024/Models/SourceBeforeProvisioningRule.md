---
id: v2024-source-before-provisioning-rule
title: SourceBeforeProvisioningRule
pagination_label: SourceBeforeProvisioningRule
sidebar_label: SourceBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/v2024/models/source-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'SourceBeforeProvisioningRule']
---


# SourceBeforeProvisioningRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** |  Pointer to **String** | Rule ID. | [optional] 
**Name** |  Pointer to **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceBeforeProvisioningRule = Initialize-PSSailpoint.V2024SourceBeforeProvisioningRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SourceBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

