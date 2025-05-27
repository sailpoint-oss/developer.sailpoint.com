---
id: v2025-approval-scheme-for-role
title: ApprovalSchemeForRole
pagination_label: ApprovalSchemeForRole
sidebar_label: ApprovalSchemeForRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalSchemeForRole', 'V2025ApprovalSchemeForRole'] 
slug: /tools/sdk/powershell/v2025/models/approval-scheme-for-role
tags: ['SDK', 'Software Development Kit', 'ApprovalSchemeForRole', 'V2025ApprovalSchemeForRole']
---


# ApprovalSchemeForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** |  **Enum** [  "OWNER",    "MANAGER",    "GOVERNANCE_GROUP" ] | Describes the individual or group that is responsible for an approval step. Values are as follows.  **OWNER**: Owner of the associated Role  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [optional] 
**ApproverId** | **String** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalSchemeForRole = Initialize-V2025ApprovalSchemeForRole  -ApproverType GOVERNANCE_GROUP `
 -ApproverId 46c79819-a69f-49a2-becb-12c971ae66c6
```

- Convert the resource to JSON
```powershell
$ApprovalSchemeForRole | ConvertTo-JSON
```


[[Back to top]](#) 

