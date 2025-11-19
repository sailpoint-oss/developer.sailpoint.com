---
id: v2025-approval-identity-record
title: ApprovalIdentityRecord
pagination_label: ApprovalIdentityRecord
sidebar_label: ApprovalIdentityRecord
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalIdentityRecord', 'V2025ApprovalIdentityRecord'] 
slug: /tools/sdk/powershell/v2025/models/approval-identity-record
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentityRecord', 'V2025ApprovalIdentityRecord']
---


# ApprovalIdentityRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | **String** | Identity ID. | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | Type of identity. | [optional] 
**Name** | **String** | Name of the identity. | [optional] 
**ActionedAs** | [**[]ApprovalReference**](approval-reference) | List of references representing actions taken by the identity. | [optional] 
**Members** | [**[]ApprovalReference**](approval-reference) | List of references representing members of the identity. | [optional] 
**DecisionDate** | **System.DateTime** | Date when the decision was made. | [optional] 
**Email** | **String** | Email associated with the identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalIdentityRecord = Initialize-V2025ApprovalIdentityRecord  -IdentityID 17e633e7d57e481569df76323169deb6a `
 -Type IDENTITY `
 -Name Jim Bob `
 -ActionedAs null `
 -Members null `
 -DecisionDate 2023-04-12T23:20:50.520Z `
 -Email user@example.com
```

- Convert the resource to JSON
```powershell
$ApprovalIdentityRecord | ConvertTo-JSON
```


[[Back to top]](#) 

