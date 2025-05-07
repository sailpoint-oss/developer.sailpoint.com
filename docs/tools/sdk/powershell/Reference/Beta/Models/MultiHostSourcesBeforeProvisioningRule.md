---
id: beta-multi-host-sources-before-provisioning-rule
title: MultiHostSourcesBeforeProvisioningRule
pagination_label: MultiHostSourcesBeforeProvisioningRule
sidebar_label: MultiHostSourcesBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostSourcesBeforeProvisioningRule', 'BetaMultiHostSourcesBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/beta/models/multi-host-sources-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesBeforeProvisioningRule', 'BetaMultiHostSourcesBeforeProvisioningRule']
---


# MultiHostSourcesBeforeProvisioningRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Rule ID. | [optional] 
**Name** | **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostSourcesBeforeProvisioningRule = Initialize-BetaMultiHostSourcesBeforeProvisioningRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$MultiHostSourcesBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

