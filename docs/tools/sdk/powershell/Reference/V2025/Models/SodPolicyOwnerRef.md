---
id: v2025-sod-policy-owner-ref
title: SodPolicyOwnerRef
pagination_label: SodPolicyOwnerRef
sidebar_label: SodPolicyOwnerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicyOwnerRef', 'V2025SodPolicyOwnerRef'] 
slug: /tools/sdk/powershell/v2025/models/sod-policy-owner-ref
tags: ['SDK', 'Software Development Kit', 'SodPolicyOwnerRef', 'V2025SodPolicyOwnerRef']
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
$SodPolicyOwnerRef = Initialize-PSSailpoint.V2025SodPolicyOwnerRef  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$SodPolicyOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

