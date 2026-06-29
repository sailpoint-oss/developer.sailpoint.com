---
id: multihostsources-before-provisioning-rule
title: MultihostsourcesBeforeProvisioningRule
pagination_label: MultihostsourcesBeforeProvisioningRule
sidebar_label: MultihostsourcesBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostsourcesBeforeProvisioningRule', 'MultihostsourcesBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostsources-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'MultihostsourcesBeforeProvisioningRule', 'MultihostsourcesBeforeProvisioningRule']
---


# MultihostsourcesBeforeProvisioningRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Rule ID. | [optional] 
**Name** | **String** | Rule's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostsourcesBeforeProvisioningRule = Initialize-MultihostsourcesBeforeProvisioningRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$MultihostsourcesBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

