---
id: beta-requested-account-ref
title: RequestedAccountRef
pagination_label: RequestedAccountRef
sidebar_label: RequestedAccountRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedAccountRef', 'BetaRequestedAccountRef'] 
slug: /tools/sdk/powershell/beta/models/requested-account-ref
tags: ['SDK', 'Software Development Kit', 'RequestedAccountRef', 'BetaRequestedAccountRef']
---


# RequestedAccountRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Display name of the account for the user | [optional] 
**Type** | [**DtoType**](dto-type) |  | [optional] 
**AccountUuid** | **String** | The uuid for the account | [optional] 
**AccountId** | **String** | The native identity for the account | [optional] 
**SourceName** | **String** | Display name of the source for the account | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedAccountRef = Initialize-BetaRequestedAccountRef  -Name Glen.067da3248e914 `
 -Type null `
 -AccountUuid {fab7119e-004f-4822-9c33-b8d570d6c6a6} `
 -AccountId CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local `
 -SourceName Multi Account AD source name
```

- Convert the resource to JSON
```powershell
$RequestedAccountRef | ConvertTo-JSON
```


[[Back to top]](#) 

