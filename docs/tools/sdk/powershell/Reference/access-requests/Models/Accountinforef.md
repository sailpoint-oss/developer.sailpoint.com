---
id: accountinforef
title: Accountinforef
pagination_label: Accountinforef
sidebar_label: Accountinforef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountinforef', 'Accountinforef'] 
slug: /tools/sdk/powershell/accessrequests/models/accountinforef
tags: ['SDK', 'Software Development Kit', 'Accountinforef', 'Accountinforef']
---


# Accountinforef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **String** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**NativeIdentity** | **String** | The 'distinguishedName' attribute for the account | [optional] 
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | The account id | [optional] 
**Name** | **String** | The account display name | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountinforef = Initialize-Accountinforef  -Uuid {fab7119e-004f-4822-9c33-b8d570d6c6a6} `
 -NativeIdentity CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local `
 -Type null `
 -Id f19d168c27374fd1aff3b483573f997f `
 -Name UserAccount.761a2248b
```

- Convert the resource to JSON
```powershell
$Accountinforef | ConvertTo-JSON
```


[[Back to top]](#) 

