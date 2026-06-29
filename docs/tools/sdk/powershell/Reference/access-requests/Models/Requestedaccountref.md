---
id: requestedaccountref
title: Requestedaccountref
pagination_label: Requestedaccountref
sidebar_label: Requestedaccountref
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requestedaccountref', 'Requestedaccountref'] 
slug: /tools/sdk/powershell/accessrequests/models/requestedaccountref
tags: ['SDK', 'Software Development Kit', 'Requestedaccountref', 'Requestedaccountref']
---


# Requestedaccountref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Display name of the account for the user | [optional] 
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**AccountUuid** | **String** | The uuid for the account | [optional] 
**AccountId** | **String** | The native identity for the account | [optional] 
**SourceName** | **String** | Display name of the source for the account | [optional] 

## Examples

- Prepare the resource
```powershell
$Requestedaccountref = Initialize-Requestedaccountref  -Name Glen.067da3248e914 `
 -Type null `
 -AccountUuid {fab7119e-004f-4822-9c33-b8d570d6c6a6} `
 -AccountId CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local `
 -SourceName Multi Account AD source name
```

- Convert the resource to JSON
```powershell
$Requestedaccountref | ConvertTo-JSON
```


[[Back to top]](#) 

