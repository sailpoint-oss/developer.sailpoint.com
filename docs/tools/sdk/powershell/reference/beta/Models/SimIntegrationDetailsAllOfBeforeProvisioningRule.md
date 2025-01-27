---
id: beta-sim-integration-details-all-of-before-provisioning-rule
title: SimIntegrationDetailsAllOfBeforeProvisioningRule
pagination_label: SimIntegrationDetailsAllOfBeforeProvisioningRule
sidebar_label: SimIntegrationDetailsAllOfBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SimIntegrationDetailsAllOfBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/beta/models/sim-integration-details-all-of-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'SimIntegrationDetailsAllOfBeforeProvisioningRule']
---


# SimIntegrationDetailsAllOfBeforeProvisioningRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** |  Pointer to **String** | ID of the rule | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the rule | [optional] 

## Examples

- Prepare the resource
```powershell
$SimIntegrationDetailsAllOfBeforeProvisioningRule = Initialize-PSSailpoint.BetaSimIntegrationDetailsAllOfBeforeProvisioningRule  -Type null `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SimIntegrationDetailsAllOfBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

