---
id: sodpolicy-owner-ref
title: SodpolicyOwnerRef
pagination_label: SodpolicyOwnerRef
sidebar_label: SodpolicyOwnerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodpolicyOwnerRef', 'SodpolicyOwnerRef'] 
slug: /tools/sdk/powershell/sodpolicies/models/sodpolicy-owner-ref
tags: ['SDK', 'Software Development Kit', 'SodpolicyOwnerRef', 'SodpolicyOwnerRef']
---


# SodpolicyOwnerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | Owner type. | [optional] 
**Id** | **String** | Owner's ID. | [optional] 
**Name** | **String** | Owner's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodpolicyOwnerRef = Initialize-SodpolicyOwnerRef  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$SodpolicyOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

