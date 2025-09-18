---
id: v2024-approval-scheme-for-role
title: ApprovalSchemeForRole
pagination_label: ApprovalSchemeForRole
sidebar_label: ApprovalSchemeForRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalSchemeForRole', 'V2024ApprovalSchemeForRole'] 
slug: /tools/sdk/powershell/v2024/models/approval-scheme-for-role
tags: ['SDK', 'Software Development Kit', 'ApprovalSchemeForRole', 'V2024ApprovalSchemeForRole']
---


# ApprovalSchemeForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** |  **Enum** [  "OWNER",    "MANAGER",    "GOVERNANCE_GROUP",    "WORKFLOW" ] | Describes the individual or group that is responsible for an approval step. Values are as follows.  **OWNER**: Owner of the associated Role  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.      | [optional] 
**ApproverId** | **String** | Id of the specific approver, used when approverType is GOVERNANCE_GROUP or WORKFLOW. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalSchemeForRole = Initialize-V2024ApprovalSchemeForRole  -ApproverType GOVERNANCE_GROUP `
 -ApproverId 46c79819-a69f-49a2-becb-12c971ae66c6
```

- Convert the resource to JSON
```powershell
$ApprovalSchemeForRole | ConvertTo-JSON
```


[[Back to top]](#) 

