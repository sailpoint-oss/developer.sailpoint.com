---
id: beta-provisioning-completed
title: ProvisioningCompleted
pagination_label: ProvisioningCompleted
sidebar_label: ProvisioningCompleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompleted', 'BetaProvisioningCompleted'] 
slug: /tools/sdk/powershell/beta/models/provisioning-completed
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompleted', 'BetaProvisioningCompleted']
---


# ProvisioningCompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackingNumber** | **String** | Provisioning request's reference number. Useful for tracking status in the 'Account Activity' search interface. | [required]
**Sources** | **String** | Sources the provisioning transactions were performed on. Sources are comma separated. | [required]
**Action** | **String** | Origin of the provisioning request. | [optional] 
**Errors** | **[]String** | List of any accumulated error messages that occurred during provisioning. | [optional] 
**Warnings** | **[]String** | List of any accumulated warning messages that occurred during provisioning. | [optional] 
**Recipient** | [**ProvisioningCompletedRecipient**](provisioning-completed-recipient) |  | [required]
**Requester** | [**ProvisioningCompletedRequester**](provisioning-completed-requester) |  | [optional] 
**AccountRequests** | [**[]ProvisioningCompletedAccountRequestsInner**](provisioning-completed-account-requests-inner) | List of provisioning instructions to perform on an account-by-account basis. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningCompleted = Initialize-BetaProvisioningCompleted  -TrackingNumber 4b4d982dddff4267ab12f0f1e72b5a6d `
 -Sources Corp AD, Corp LDAP, Corp Salesforce `
 -Action IdentityRefresh `
 -Errors null `
 -Warnings null `
 -Recipient null `
 -Requester null `
 -AccountRequests null
```

- Convert the resource to JSON
```powershell
$ProvisioningCompleted | ConvertTo-JSON
```


[[Back to top]](#) 

