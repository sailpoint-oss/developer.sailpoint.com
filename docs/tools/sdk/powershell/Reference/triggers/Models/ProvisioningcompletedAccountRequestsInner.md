---
id: provisioningcompleted-account-requests-inner
title: ProvisioningcompletedAccountRequestsInner
pagination_label: ProvisioningcompletedAccountRequestsInner
sidebar_label: ProvisioningcompletedAccountRequestsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningcompletedAccountRequestsInner', 'ProvisioningcompletedAccountRequestsInner'] 
slug: /tools/sdk/powershell/triggers/models/provisioningcompleted-account-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedAccountRequestsInner', 'ProvisioningcompletedAccountRequestsInner']
---


# ProvisioningcompletedAccountRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**ProvisioningcompletedAccountRequestsInnerSource**](provisioningcompleted-account-requests-inner-source) |  | [required]
**AccountId** | **String** | The unique idenfier of the account being provisioned. | [optional] 
**AccountOperation** | **String** | The provisioning operation; typically Create, Modify, Enable, Disable, Unlock, or Delete. | [required]
**ProvisioningResult** |  **Enum** [  "SUCCESS",    "PENDING",    "FAILED" ] | The overall result of the provisioning transaction; this could be success, pending, failed, etc. | [required]
**ProvisioningTarget** | **String** | The name of the provisioning channel selected; this could be the same as the source, or could be a Service Desk Integration Module (SDIM). | [required]
**TicketId** | **String** | A reference to a tracking number, if this is sent to a Service Desk Integration Module (SDIM). | [optional] 
**AttributeRequests** | [**[]ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner**](provisioningcompleted-account-requests-inner-attribute-requests-inner) | A list of attributes as part of the provisioning transaction. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningcompletedAccountRequestsInner = Initialize-ProvisioningcompletedAccountRequestsInner  -Source null `
 -AccountId CN=Chewy.Bacca,ou=hardcorefigter,ou=wookies,dc=starwars,dc=com `
 -AccountOperation Modify `
 -ProvisioningResult SUCCESS `
 -ProvisioningTarget Corp AD `
 -TicketId 72619262 `
 -AttributeRequests null
```

- Convert the resource to JSON
```powershell
$ProvisioningcompletedAccountRequestsInner | ConvertTo-JSON
```


[[Back to top]](#) 

