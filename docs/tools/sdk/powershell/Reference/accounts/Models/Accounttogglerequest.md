---
id: accounttogglerequest
title: Accounttogglerequest
pagination_label: Accounttogglerequest
sidebar_label: Accounttogglerequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accounttogglerequest', 'Accounttogglerequest'] 
slug: /tools/sdk/powershell/accounts/models/accounttogglerequest
tags: ['SDK', 'Software Development Kit', 'Accounttogglerequest', 'Accounttogglerequest']
---


# Accounttogglerequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalVerificationId** | **String** | If set, an external process validates that the user wants to proceed with this request. | [optional] 
**ForceProvisioning** | **Boolean** | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. Providing 'true' for an unlocked account will add and process 'Unlock' operation by the workflow. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accounttogglerequest = Initialize-Accounttogglerequest  -ExternalVerificationId 3f9180835d2e5168015d32f890ca1581 `
 -ForceProvisioning false
```

- Convert the resource to JSON
```powershell
$Accounttogglerequest | ConvertTo-JSON
```


[[Back to top]](#) 

