---
id: v2025-multi-host-integrations-before-provisioning-rule
title: MultiHostIntegrationsBeforeProvisioningRule
pagination_label: MultiHostIntegrationsBeforeProvisioningRule
sidebar_label: MultiHostIntegrationsBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsBeforeProvisioningRule', 'V2025MultiHostIntegrationsBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/v2025/models/multi-host-integrations-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsBeforeProvisioningRule', 'V2025MultiHostIntegrationsBeforeProvisioningRule']
---


# MultiHostIntegrationsBeforeProvisioningRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Rule ID. | [optional] 
**Name** | **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsBeforeProvisioningRule = Initialize-PSSailpoint.V2025MultiHostIntegrationsBeforeProvisioningRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

