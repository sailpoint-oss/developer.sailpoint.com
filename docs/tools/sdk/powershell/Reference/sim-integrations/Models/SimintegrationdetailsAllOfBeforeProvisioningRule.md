---
id: simintegrationdetails-all-of-before-provisioning-rule
title: SimintegrationdetailsAllOfBeforeProvisioningRule
pagination_label: SimintegrationdetailsAllOfBeforeProvisioningRule
sidebar_label: SimintegrationdetailsAllOfBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SimintegrationdetailsAllOfBeforeProvisioningRule', 'SimintegrationdetailsAllOfBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/simintegrations/models/simintegrationdetails-all-of-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'SimintegrationdetailsAllOfBeforeProvisioningRule', 'SimintegrationdetailsAllOfBeforeProvisioningRule']
---


# SimintegrationdetailsAllOfBeforeProvisioningRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | ID of the rule | [optional] 
**Name** | **String** | Human-readable display name of the rule | [optional] 

## Examples

- Prepare the resource
```powershell
$SimintegrationdetailsAllOfBeforeProvisioningRule = Initialize-SimintegrationdetailsAllOfBeforeProvisioningRule  -Type null `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SimintegrationdetailsAllOfBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

