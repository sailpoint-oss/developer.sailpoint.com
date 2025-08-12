---
id: v2025-account-request-result
title: AccountRequestResult
pagination_label: AccountRequestResult
sidebar_label: AccountRequestResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountRequestResult', 'V2025AccountRequestResult'] 
slug: /tools/sdk/powershell/v2025/models/account-request-result
tags: ['SDK', 'Software Development Kit', 'AccountRequestResult', 'V2025AccountRequestResult']
---


# AccountRequestResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | **[]String** | Error message. | [optional] 
**Status** | **String** | The status of the account request | [optional] 
**TicketId** | **String** | ID of associated ticket. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountRequestResult = Initialize-V2025AccountRequestResult  -Errors null `
 -Status failed `
 -TicketId null
```

- Convert the resource to JSON
```powershell
$AccountRequestResult | ConvertTo-JSON
```


[[Back to top]](#) 

