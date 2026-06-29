---
id: multihostintegrations-before-provisioning-rule
title: MultihostintegrationsBeforeProvisioningRule
pagination_label: MultihostintegrationsBeforeProvisioningRule
sidebar_label: MultihostintegrationsBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsBeforeProvisioningRule', 'MultihostintegrationsBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsBeforeProvisioningRule', 'MultihostintegrationsBeforeProvisioningRule']
---


# MultihostintegrationsBeforeProvisioningRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Rule ID. | [optional] 
**Name** | **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsBeforeProvisioningRule = Initialize-MultihostintegrationsBeforeProvisioningRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

