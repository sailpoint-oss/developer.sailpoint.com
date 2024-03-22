---
id: source-before-provisioning-rule
title: SourceBeforeProvisioningRule
pagination_label: SourceBeforeProvisioningRule
sidebar_label: SourceBeforeProvisioningRule
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourceBeforeProvisioningRule'] 
slug: /tools/sdk/powershell/beta/models/source-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'SourceBeforeProvisioningRule']
---


# SourceBeforeProvisioningRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "RULE" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to **String** | ID of the rule | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the rule | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceBeforeProvisioningRule = Initialize-PSSailpointBetaSourceBeforeProvisioningRule  -Type RULE `
 -Id 2c918085708c274401708c2a8a760001 `
 -Name Example Rule
```

- Convert the resource to JSON
```powershell
$SourceBeforeProvisioningRule | ConvertTo-JSON
```


[[Back to top]](#) 

