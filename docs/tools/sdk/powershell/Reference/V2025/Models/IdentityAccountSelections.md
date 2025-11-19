---
id: v2025-identity-account-selections
title: IdentityAccountSelections
pagination_label: IdentityAccountSelections
sidebar_label: IdentityAccountSelections
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAccountSelections', 'V2025IdentityAccountSelections'] 
slug: /tools/sdk/powershell/v2025/models/identity-account-selections
tags: ['SDK', 'Software Development Kit', 'IdentityAccountSelections', 'V2025IdentityAccountSelections']
---


# IdentityAccountSelections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedItems** | [**[]RequestedItemAccountSelections**](requested-item-account-selections) | Available account selections for the identity, per requested item | [optional] 
**AccountsSelectionRequired** | **Boolean** | A boolean indicating whether any account selections will be required for the user to raise an access request | [optional] [default to $false]
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | The identity id for the user | [optional] 
**Name** | **String** | The name of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAccountSelections = Initialize-V2025IdentityAccountSelections  -RequestedItems null `
 -AccountsSelectionRequired false `
 -Type null `
 -Id 70016590f2df4b879bdb1313a9e4e19e `
 -Name User name
```

- Convert the resource to JSON
```powershell
$IdentityAccountSelections | ConvertTo-JSON
```


[[Back to top]](#) 

