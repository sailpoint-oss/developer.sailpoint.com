---
id: approvalconfig-fallback-approver
title: ApprovalconfigFallbackApprover
pagination_label: ApprovalconfigFallbackApprover
sidebar_label: ApprovalconfigFallbackApprover
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalconfigFallbackApprover', 'ApprovalconfigFallbackApprover'] 
slug: /tools/sdk/powershell/sources/models/approvalconfig-fallback-approver
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigFallbackApprover', 'ApprovalconfigFallbackApprover']
---


# ApprovalconfigFallbackApprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | **String** | Optional Identity ID of the type of identity defined in the 'type' field. | [optional] 
**Type** |  **Enum** [  "IDENTITY",    "MANAGER_OF",    "ACCOUNT_OWNER",    "MACHINE_ACCOUNT_OWNER",    "MACHINE_IDENTITY_OWNER",    "MANAGER_OF_REQUESTED_TARGET_OWNER",    "MANAGER_OF_MACHINE_IDENTITY_OWNER",    "MANAGER_OF_ACCOUNT_OWNER",    "MANAGER_OF_MACHINE_ACCOUNT_OWNER",    "MANAGER_OF_REQUESTER",    "MANAGER_OF_REQUESTER_OWNER",    "MANAGER_OF_OWNER",    "ACCESS_PROFILE_OWNER",    "APPLICATION_OWNER",    "ENTITLEMENT_OWNER",    "ROLE_OWNER",    "SOURCE_OWNER",    "REQUESTED_TARGET_OWNER",    "ACCESS_PROFILE_PRIMARY_OWNER",    "APPLICATION_PRIMARY_OWNER",    "ENTITLEMENT_PRIMARY_OWNER",    "ROLE_PRIMARY_OWNER",    "SOURCE_PRIMARY_OWNER",    "REQUESTED_TARGET_PRIMARY_OWNER" ] | Type of identityID for the fallback approver. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalconfigFallbackApprover = Initialize-ApprovalconfigFallbackApprover  -IdentityID fdfda352157d4cc79bb749953131b457 `
 -Type MANAGER_OF
```

- Convert the resource to JSON
```powershell
$ApprovalconfigFallbackApprover | ConvertTo-JSON
```


[[Back to top]](#) 

