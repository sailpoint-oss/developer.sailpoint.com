---
id: v2025-provisioning-completed
title: ProvisioningCompleted
pagination_label: ProvisioningCompleted
sidebar_label: ProvisioningCompleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompleted', 'V2025ProvisioningCompleted'] 
slug: /tools/sdk/powershell/v2025/models/provisioning-completed
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompleted', 'V2025ProvisioningCompleted']
---


# ProvisioningCompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackingNumber** | **String** | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | [required]
**Sources** | **String** | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | [required]
**Action** | **String** | Origin of where the provisioning request came from. | [optional] 
**Errors** | **[]String** | A list of any accumulated error messages that occurred during provisioning. | [optional] 
**Warnings** | **[]String** | A list of any accumulated warning messages that occurred during provisioning. | [optional] 
**Recipient** | [**ProvisioningCompletedRecipient**](provisioning-completed-recipient) |  | [required]
**Requester** | [**ProvisioningCompletedRequester**](provisioning-completed-requester) |  | [optional] 
**AccountRequests** | [**[]ProvisioningCompletedAccountRequestsInner**](provisioning-completed-account-requests-inner) | A list of provisioning instructions to perform on an account-by-account basis. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningCompleted = Initialize-V2025ProvisioningCompleted  -TrackingNumber 4b4d982dddff4267ab12f0f1e72b5a6d `
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

