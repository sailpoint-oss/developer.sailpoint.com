---
id: v2024-approval-identity
title: ApprovalIdentity
pagination_label: ApprovalIdentity
sidebar_label: ApprovalIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalIdentity'] 
slug: /tools/sdk/powershell/v2024/models/approval-identity
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentity']
---


# ApprovalIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The identity ID | [optional] 
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Indication of what group the identity belongs to. Ie, IDENTITY, GOVERNANCE_GROUP, etc | [optional] 
**Name** |  Pointer to **String** | Name of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalIdentity = Initialize-PSSailpoint.V2024ApprovalIdentity  -Id 85d173e7d57e496569df763231d6deb6a `
 -Type IDENTITY `
 -Name John Doe
```

- Convert the resource to JSON
```powershell
$ApprovalIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

