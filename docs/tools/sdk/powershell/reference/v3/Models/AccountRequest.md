---
id: account-request
title: AccountRequest
pagination_label: AccountRequest
sidebar_label: AccountRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountRequest'] 
slug: /tools/sdk/powershell/v3/models/account-request
tags: ['SDK', 'Software Development Kit', 'AccountRequest']
---


# AccountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** |  Pointer to **String** | Unique ID of the account | [optional] 
**AttributeRequests** |  Pointer to [**[]AttributeRequest**](attribute-request) |  | [optional] 
**Op** |  Pointer to **String** | The operation that was performed | [optional] 
**ProvisioningTarget** |  Pointer to [**AccountSource**](account-source) |  | [optional] 
**Result** |  Pointer to [**AccountRequestResult**](account-request-result) |  | [optional] 
**Source** |  Pointer to [**AccountSource**](account-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountRequest = Initialize-PSSailpoint.V3AccountRequest  -AccountId John.Doe `
 -AttributeRequests null `
 -Op Modify `
 -ProvisioningTarget null `
 -Result null `
 -Source null
```

- Convert the resource to JSON
```powershell
$AccountRequest | ConvertTo-JSON
```


[[Back to top]](#) 

