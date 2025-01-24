---
id: before-provisioning-rule-dto
title: BeforeProvisioningRuleDto
pagination_label: BeforeProvisioningRuleDto
sidebar_label: BeforeProvisioningRuleDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BeforeProvisioningRuleDto'] 
slug: /tools/sdk/powershell/beta/models/before-provisioning-rule-dto
tags: ['SDK', 'Software Development Kit', 'BeforeProvisioningRuleDto']
---


# BeforeProvisioningRuleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "RULE" ] | Before Provisioning Rule DTO type. | [optional] 
**Id** |  Pointer to **String** | Before Provisioning Rule ID. | [optional] 
**Name** |  Pointer to **String** | Rule display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BeforeProvisioningRuleDto = Initialize-PSSailpoint.BetaBeforeProvisioningRuleDto  -Type RULE `
 -Id 048eb3d55c5a4758bd07dccb87741c78 `
 -Name Before Provisioning Airtable Rule
```

- Convert the resource to JSON
```powershell
$BeforeProvisioningRuleDto | ConvertTo-JSON
```


[[Back to top]](#) 

