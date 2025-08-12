---
id: beta-sod-policy-owner-ref
title: SodPolicyOwnerRef
pagination_label: SodPolicyOwnerRef
sidebar_label: SodPolicyOwnerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicyOwnerRef', 'BetaSodPolicyOwnerRef'] 
slug: /tools/sdk/powershell/beta/models/sod-policy-owner-ref
tags: ['SDK', 'Software Development Kit', 'SodPolicyOwnerRef', 'BetaSodPolicyOwnerRef']
---


# SodPolicyOwnerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | Owner type. | [optional] 
**Id** | **String** | Owner's ID. | [optional] 
**Name** | **String** | Owner's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyOwnerRef = Initialize-BetaSodPolicyOwnerRef  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$SodPolicyOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

