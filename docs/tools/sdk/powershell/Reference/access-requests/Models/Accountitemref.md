---
id: accountitemref
title: Accountitemref
pagination_label: Accountitemref
sidebar_label: Accountitemref
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountitemref', 'Accountitemref'] 
slug: /tools/sdk/powershell/accessrequests/models/accountitemref
tags: ['SDK', 'Software Development Kit', 'Accountitemref', 'Accountitemref']
---


# Accountitemref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountUuid** | **String** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**NativeIdentity** | **String** | The 'distinguishedName' attribute for the account | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountitemref = Initialize-Accountitemref  -AccountUuid {fab7119e-004f-4822-9c33-b8d570d6c6a6} `
 -NativeIdentity CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local
```

- Convert the resource to JSON
```powershell
$Accountitemref | ConvertTo-JSON
```


[[Back to top]](#) 

