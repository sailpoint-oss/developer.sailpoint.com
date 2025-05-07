---
id: v2024-accounts-selection-response
title: AccountsSelectionResponse
pagination_label: AccountsSelectionResponse
sidebar_label: AccountsSelectionResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountsSelectionResponse', 'V2024AccountsSelectionResponse'] 
slug: /tools/sdk/powershell/v2024/models/accounts-selection-response
tags: ['SDK', 'Software Development Kit', 'AccountsSelectionResponse', 'V2024AccountsSelectionResponse']
---


# AccountsSelectionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identities** | [**[]IdentityAccountSelections**](identity-account-selections) | A list of available account selections per identity in the request, for all the requested items | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountsSelectionResponse = Initialize-V2024AccountsSelectionResponse  -Identities null
```

- Convert the resource to JSON
```powershell
$AccountsSelectionResponse | ConvertTo-JSON
```


[[Back to top]](#) 

