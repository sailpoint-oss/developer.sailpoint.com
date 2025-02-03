---
id: v2024-provisioning-completed-account-requests-inner
title: ProvisioningCompletedAccountRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompletedAccountRequestsInner', 'V2024ProvisioningCompletedAccountRequestsInner'] 
slug: /tools/sdk/powershell/v2024/models/provisioning-completed-account-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInner', 'V2024ProvisioningCompletedAccountRequestsInner']
---


# ProvisioningCompletedAccountRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**ProvisioningCompletedAccountRequestsInnerSource**](provisioning-completed-account-requests-inner-source) |  | [required]
**AccountId** | **String** | The unique idenfier of the account being provisioned. | [optional] 
**AccountOperation** | **String** | The provisioning operation; typically Create, Modify, Enable, Disable, Unlock, or Delete. | [required]
**ProvisioningResult** |  **Enum** [  "SUCCESS",    "PENDING",    "FAILED" ] | The overall result of the provisioning transaction; this could be success, pending, failed, etc. | [required]
**ProvisioningTarget** | **String** | The name of the provisioning channel selected; this could be the same as the source, or could be a Service Desk Integration Module (SDIM). | [required]
**TicketId** | **String** | A reference to a tracking number, if this is sent to a Service Desk Integration Module (SDIM). | [optional] 
**AttributeRequests** | [**[]ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner**](provisioning-completed-account-requests-inner-attribute-requests-inner) | A list of attributes as part of the provisioning transaction. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedAccountRequestsInner = Initialize-PSSailpoint.V2024ProvisioningCompletedAccountRequestsInner  -Source null `
 -AccountId CN&#x3D;Chewy.Bacca,ou&#x3D;hardcorefigter,ou&#x3D;wookies,dc&#x3D;starwars,dc&#x3D;com `
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

