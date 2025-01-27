---
id: account-request-result
title: AccountRequestResult
pagination_label: AccountRequestResult
sidebar_label: AccountRequestResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountRequestResult'] 
slug: /tools/sdk/powershell/v3/models/account-request-result
tags: ['SDK', 'Software Development Kit', 'AccountRequestResult']
---


# AccountRequestResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** |  Pointer to **[]String** |  | [optional] 
**Status** |  Pointer to **String** | The status of the account request | [optional] 
**TicketId** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountRequestResult = Initialize-PSSailpoint.V3AccountRequestResult  -Errors null `
 -Status failed `
 -TicketId null
```

- Convert the resource to JSON
```powershell
$AccountRequestResult | ConvertTo-JSON
```


[[Back to top]](#) 

