---
id: account-unlock-request
title: AccountUnlockRequest
pagination_label: AccountUnlockRequest
sidebar_label: AccountUnlockRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountUnlockRequest'] 
slug: /tools/sdk/powershell/beta/models/account-unlock-request
tags: ['SDK', 'Software Development Kit', 'AccountUnlockRequest']
---


# AccountUnlockRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalVerificationId** |  Pointer to **String** | If set, an external process validates that the user wants to proceed with this request. | [optional] 
**UnlockIDNAccount** |  Pointer to **Boolean** | If set, the IDN account is unlocked after the workflow completes. | [optional] 
**ForceProvisioning** |  Pointer to **Boolean** | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountUnlockRequest = Initialize-PSSailpoint.BetaAccountUnlockRequest  -ExternalVerificationId 3f9180835d2e5168015d32f890ca1581 `
 -UnlockIDNAccount false `
 -ForceProvisioning false
```

- Convert the resource to JSON
```powershell
$AccountUnlockRequest | ConvertTo-JSON
```


[[Back to top]](#) 

