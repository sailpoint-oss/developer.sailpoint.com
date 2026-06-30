---
id: accountrequest-result
title: AccountrequestResult
pagination_label: AccountrequestResult
sidebar_label: AccountrequestResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountrequestResult', 'AccountrequestResult'] 
slug: /tools/sdk/powershell/search/models/accountrequest-result
tags: ['SDK', 'Software Development Kit', 'AccountrequestResult', 'AccountrequestResult']
---


# AccountrequestResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | **[]String** | Error message. | [optional] 
**Status** | **String** | The status of the account request | [optional] 
**TicketId** | **String** | ID of associated ticket. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountrequestResult = Initialize-AccountrequestResult  -Errors null `
 -Status failed `
 -TicketId null
```

- Convert the resource to JSON
```powershell
$AccountrequestResult | ConvertTo-JSON
```


[[Back to top]](#) 

