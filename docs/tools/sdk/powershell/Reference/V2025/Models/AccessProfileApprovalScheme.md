---
id: v2025-access-profile-approval-scheme
title: AccessProfileApprovalScheme
pagination_label: AccessProfileApprovalScheme
sidebar_label: AccessProfileApprovalScheme
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileApprovalScheme', 'V2025AccessProfileApprovalScheme'] 
slug: /tools/sdk/powershell/v2025/models/access-profile-approval-scheme
tags: ['SDK', 'Software Development Kit', 'AccessProfileApprovalScheme', 'V2025AccessProfileApprovalScheme']
---


# AccessProfileApprovalScheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** |  **Enum** [  "APP_OWNER",    "OWNER",    "SOURCE_OWNER",    "MANAGER",    "GOVERNANCE_GROUP" ] | Describes the individual or group that is responsible for an approval step. These are the possible values: **APP_OWNER**: The owner of the Application  **OWNER**: Owner of the associated Access Profile or Role  **SOURCE_OWNER**: Owner of the Source associated with an Access Profile  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [optional] 
**ApproverId** | **String** | Specific approver ID. Only use this when the `approverType` is `GOVERNANCE_GROUP`. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileApprovalScheme = Initialize-V2025AccessProfileApprovalScheme  -ApproverType GOVERNANCE_GROUP `
 -ApproverId 46c79819-a69f-49a2-becb-12c971ae66c6
```

- Convert the resource to JSON
```powershell
$AccessProfileApprovalScheme | ConvertTo-JSON
```


[[Back to top]](#) 

