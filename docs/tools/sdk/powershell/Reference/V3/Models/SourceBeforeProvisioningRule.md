---
id: source-before-provisioning-rule
title: SourceBeforeProvisioningRule
pagination_label: SourceBeforeProvisioningRule
sidebar_label: SourceBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceBeforeProvisioningRule', 'SourceBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/v3/models/source-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'SourceBeforeProvisioningRule', 'SourceBeforeProvisioningRule']
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
$SourceBeforeProvisioningRule = Initialize-SourceBeforeProvisioningRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SourceBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

