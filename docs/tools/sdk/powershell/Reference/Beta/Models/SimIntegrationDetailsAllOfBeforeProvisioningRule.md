---
id: beta-sim-integration-details-all-of-before-provisioning-rule
title: SimIntegrationDetailsAllOfBeforeProvisioningRule
pagination_label: SimIntegrationDetailsAllOfBeforeProvisioningRule
sidebar_label: SimIntegrationDetailsAllOfBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SimIntegrationDetailsAllOfBeforeProvisioningRule', 'BetaSimIntegrationDetailsAllOfBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/beta/models/sim-integration-details-all-of-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'SimIntegrationDetailsAllOfBeforeProvisioningRule', 'BetaSimIntegrationDetailsAllOfBeforeProvisioningRule']
---


# SimIntegrationDetailsAllOfBeforeProvisioningRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | ID of the rule | [optional] 
**Name** | **String** | Human-readable display name of the rule | [optional] 

## Examples

- Prepare the resource
```powershell
$SimIntegrationDetailsAllOfBeforeProvisioningRule = Initialize-BetaSimIntegrationDetailsAllOfBeforeProvisioningRule  -Type null `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SimIntegrationDetailsAllOfBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

