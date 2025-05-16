---
id: beta-provisioning-completed-account-requests-inner
title: ProvisioningCompletedAccountRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompletedAccountRequestsInner', 'BetaProvisioningCompletedAccountRequestsInner'] 
slug: /tools/sdk/powershell/beta/models/provisioning-completed-account-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInner', 'BetaProvisioningCompletedAccountRequestsInner']
---


# ProvisioningCompletedAccountRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**ProvisioningCompletedAccountRequestsInnerSource**](provisioning-completed-account-requests-inner-source) |  | [required]
**AccountId** | **String** | Unique idenfier of the account being provisioned. | [optional] 
**AccountOperation** |  **Enum** [  "Create",    "Modify",    "Enable",    "Disable",    "Unlock",    "Delete" ] | Provisioning operation. | [required]
**ProvisioningResult** |  **Enum** [  "SUCCESS",    "PENDING",    "FAILED" ] | Overall result of the provisioning transaction. | [required]
**ProvisioningTarget** | **String** | Nme of the selected provisioning channel selected. This could be the same as the source, or it could be a Service Desk Integration Module (SDIM). | [required]
**TicketId** | **String** | Reference to a tracking number for if this is sent to a SDIM. | [optional] 
**AttributeRequests** | [**[]ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner**](provisioning-completed-account-requests-inner-attribute-requests-inner) | List of attributes to include in the provisioning transaction. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedAccountRequestsInner = Initialize-BetaProvisioningCompletedAccountRequestsInner  -Source null `
 -AccountId CN=Rob.Robertson,ou=csm,ou=sales,dc=helpco,dc=com `
 -AccountOperation Modify `
 -ProvisioningResult SUCCESS `
 -ProvisioningTarget Corp AD `
 -TicketId 72619262 `
 -AttributeRequests null
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedAccountRequestsInner | ConvertTo-JSON
```


[[Back to top]](#) 

