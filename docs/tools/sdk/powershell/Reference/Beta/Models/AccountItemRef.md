---
id: beta-account-item-ref
title: AccountItemRef
pagination_label: AccountItemRef
sidebar_label: AccountItemRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountItemRef', 'BetaAccountItemRef'] 
slug: /tools/sdk/powershell/beta/models/account-item-ref
tags: ['SDK', 'Software Development Kit', 'AccountItemRef', 'BetaAccountItemRef']
---


# AccountItemRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountUuid** | **String** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**NativeIdentity** | **String** | The 'distinguishedName' attribute for the account | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountItemRef = Initialize-PSSailpoint.BetaAccountItemRef  -AccountUuid {fab7119e-004f-4822-9c33-b8d570d6c6a6} `
 -NativeIdentity CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local
```

- Convert the resource to JSON
```powershell
$AccountItemRef | ConvertTo-JSON
```


[[Back to top]](#) 

