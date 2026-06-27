---
id: provisioningcompleted
title: Provisioningcompleted
pagination_label: Provisioningcompleted
sidebar_label: Provisioningcompleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Provisioningcompleted', 'Provisioningcompleted'] 
slug: /tools/sdk/powershell/triggers/models/provisioningcompleted
tags: ['SDK', 'Software Development Kit', 'Provisioningcompleted', 'Provisioningcompleted']
---


# Provisioningcompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackingNumber** | **String** | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | [required]
**Sources** | **String** | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | [required]
**Action** | **String** | Origin of where the provisioning request came from. | [optional] 
**Errors** | **[]String** | A list of any accumulated error messages that occurred during provisioning. | [optional] 
**Warnings** | **[]String** | A list of any accumulated warning messages that occurred during provisioning. | [optional] 
**Recipient** | [**ProvisioningcompletedRecipient**](provisioningcompleted-recipient) |  | [required]
**Requester** | [**ProvisioningcompletedRequester**](provisioningcompleted-requester) |  | [optional] 
**AccountRequests** | [**[]ProvisioningcompletedAccountRequestsInner**](provisioningcompleted-account-requests-inner) | A list of provisioning instructions to be executed on a per-account basis. The order in which operations are executed may not always be predictable. | [required]

## Examples

- Prepare the resource
```powershell
$Provisioningcompleted = Initialize-Provisioningcompleted  -TrackingNumber 4b4d982dddff4267ab12f0f1e72b5a6d `
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
$Provisioningcompleted | ConvertTo-JSON
```


[[Back to top]](#) 

