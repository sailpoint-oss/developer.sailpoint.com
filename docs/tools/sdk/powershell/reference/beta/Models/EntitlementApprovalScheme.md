---
id: beta-entitlement-approval-scheme
title: EntitlementApprovalScheme
pagination_label: EntitlementApprovalScheme
sidebar_label: EntitlementApprovalScheme
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementApprovalScheme'] 
slug: /tools/sdk/powershell/beta/models/entitlement-approval-scheme
tags: ['SDK', 'Software Development Kit', 'EntitlementApprovalScheme']
---


# EntitlementApprovalScheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** |  Pointer to  **Enum** [  "ENTITLEMENT_OWNER",    "SOURCE_OWNER",    "MANAGER",    "GOVERNANCE_GROUP" ] | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [optional] 
**ApproverId** |  Pointer to **String** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementApprovalScheme = Initialize-PSSailpoint.BetaEntitlementApprovalScheme  -ApproverType GOVERNANCE_GROUP `
 -ApproverId e3eab852-8315-467f-9de7-70eda97f63c8
```

- Convert the resource to JSON
```powershell
$EntitlementApprovalScheme | ConvertTo-JSON
```


[[Back to top]](#) 

