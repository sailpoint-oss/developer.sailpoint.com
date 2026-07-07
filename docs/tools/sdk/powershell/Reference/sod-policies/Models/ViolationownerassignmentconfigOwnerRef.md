---
id: violationownerassignmentconfig-owner-ref
title: ViolationownerassignmentconfigOwnerRef
pagination_label: ViolationownerassignmentconfigOwnerRef
sidebar_label: ViolationownerassignmentconfigOwnerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationownerassignmentconfigOwnerRef', 'ViolationownerassignmentconfigOwnerRef'] 
slug: /tools/sdk/powershell/sodpolicies/models/violationownerassignmentconfig-owner-ref
tags: ['SDK', 'Software Development Kit', 'ViolationownerassignmentconfigOwnerRef', 'ViolationownerassignmentconfigOwnerRef']
---


# ViolationownerassignmentconfigOwnerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP",    "MANAGER" ] | Owner type. | [optional] 
**Id** | **String** | Owner's ID. | [optional] 
**Name** | **String** | Owner's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationownerassignmentconfigOwnerRef = Initialize-ViolationownerassignmentconfigOwnerRef  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$ViolationownerassignmentconfigOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

