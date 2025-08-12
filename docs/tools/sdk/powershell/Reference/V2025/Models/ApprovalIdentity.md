---
id: v2025-approval-identity
title: ApprovalIdentity
pagination_label: ApprovalIdentity
sidebar_label: ApprovalIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalIdentity', 'V2025ApprovalIdentity'] 
slug: /tools/sdk/powershell/v2025/models/approval-identity
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentity', 'V2025ApprovalIdentity']
---


# ApprovalIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **String** | Email address. | [optional] 
**IdentityID** | **String** | Identity ID. | [optional] 
**Members** | [**[]ApprovalIdentityMembersInner**](approval-identity-members-inner) | List of members of a governance group. Will be omitted if the identity is not a governance group. | [optional] 
**Name** | **String** | Name of the identity. | [optional] 
**OwnerOf** | [**[]ApprovalIdentityOwnerOfInner**](approval-identity-owner-of-inner) | List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything. | [optional] 
**SerialOrder** | **Int64** | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
**Type** |  **Enum** [  "IDENTITY",    "MANAGER_OF",    "GOVERNANCE_GROUP",    "SOURCE_OWNER",    "ROLE_OWNER",    "ACCESS_PROFILE_OWNER",    "ENTITLEMENT_OWNER",    "APPLICATION_OWNER" ] | Type of identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalIdentity = Initialize-V2025ApprovalIdentity  -Email mail@mail.com `
 -IdentityID 17e633e7d57e481569df76323169deb6a `
 -Members null `
 -Name Jim Bob `
 -OwnerOf null `
 -SerialOrder 0 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$ApprovalIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

