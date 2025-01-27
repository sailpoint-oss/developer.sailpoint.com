---
id: access-profile-approval-scheme
title: AccessProfileApprovalScheme
pagination_label: AccessProfileApprovalScheme
sidebar_label: AccessProfileApprovalScheme
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileApprovalScheme'] 
slug: /tools/sdk/powershell/beta/models/access-profile-approval-scheme
tags: ['SDK', 'Software Development Kit', 'AccessProfileApprovalScheme']
---


# AccessProfileApprovalScheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** |  Pointer to  **Enum** [  "APP_OWNER",    "OWNER",    "SOURCE_OWNER",    "MANAGER",    "GOVERNANCE_GROUP" ] | Describes the individual or group that is responsible for an approval step. Values are as follows. **APP_OWNER**: The owner of the Application  **OWNER**: Owner of the associated Access Profile or Role  **SOURCE_OWNER**: Owner of the Source associated with an Access Profile  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [optional] 
**ApproverId** |  Pointer to **String** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileApprovalScheme = Initialize-PSSailpoint.BetaAccessProfileApprovalScheme  -ApproverType GOVERNANCE_GROUP `
 -ApproverId 46c79819-a69f-49a2-becb-12c971ae66c6
```

- Convert the resource to JSON
```powershell
$AccessProfileApprovalScheme | ConvertTo-JSON
```


[[Back to top]](#) 

