---
id: provisioning-completed-account-requests-inner
title: ProvisioningCompletedAccountRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningCompletedAccountRequestsInner'] 
slug: /tools/sdk/powershell/beta/models/provisioning-completed-account-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInner']
---


# ProvisioningCompletedAccountRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** |  [**ProvisioningCompletedAccountRequestsInnerSource**](provisioning-completed-account-requests-inner-source) |  | 
**AccountId** |  Pointer to **String** | The unique idenfier of the account being provisioned. | [optional] 
**AccountOperation** |  **String** | The provisioning operation; typically Create, Modify, Enable, Disable, Unlock, or Delete. | 
**ProvisioningResult** |   **Enum** [  "SUCCESS",    "PENDING",    "FAILED" ] | The overall result of the provisioning transaction; this could be success, pending, failed, etc. | 
**ProvisioningTarget** |  **String** | The name of the provisioning channel selected; this could be the same as the source, or could be a Service Desk Integration Module (SDIM). | 
**TicketId** |  Pointer to **String** | A reference to a tracking number, if this is sent to a Service Desk Integration Module (SDIM). | [optional] 
**AttributeRequests** |  Pointer to [**[]ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner**](provisioning-completed-account-requests-inner-attribute-requests-inner) | A list of attributes as part of the provisioning transaction. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedAccountRequestsInner = Initialize-BetaProvisioningCompletedAccountRequestsInner  -Source null `
 -AccountId CN=Chewy.Bacca,ou=hardcorefigter,ou=wookies,dc=starwars,dc=com `
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

