---
id: v2025-account-info-ref
title: AccountInfoRef
pagination_label: AccountInfoRef
sidebar_label: AccountInfoRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountInfoRef', 'V2025AccountInfoRef'] 
slug: /tools/sdk/powershell/v2025/models/account-info-ref
tags: ['SDK', 'Software Development Kit', 'AccountInfoRef', 'V2025AccountInfoRef']
---


# AccountInfoRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **String** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**NativeIdentity** | **String** | The 'distinguishedName' attribute for the account | [optional] 
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | The account id | [optional] 
**Name** | **String** | The account display name | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountInfoRef = Initialize-V2025AccountInfoRef  -Uuid {fab7119e-004f-4822-9c33-b8d570d6c6a6} `
 -NativeIdentity CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local `
 -Type null `
 -Id f19d168c27374fd1aff3b483573f997f `
 -Name UserAccount.761a2248b
```

- Convert the resource to JSON
```powershell
$AccountInfoRef | ConvertTo-JSON
```


[[Back to top]](#) 

