---
id: identityaccountselections
title: Identityaccountselections
pagination_label: Identityaccountselections
sidebar_label: Identityaccountselections
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityaccountselections', 'Identityaccountselections'] 
slug: /tools/sdk/powershell/accessrequests/models/identityaccountselections
tags: ['SDK', 'Software Development Kit', 'Identityaccountselections', 'Identityaccountselections']
---


# Identityaccountselections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedItems** | [**[]Requesteditemaccountselections**](requesteditemaccountselections) | Available account selections for the identity, per requested item | [optional] 
**AccountsSelectionRequired** | **Boolean** | A boolean indicating whether any account selections will be required for the user to raise an access request | [optional] [default to $false]
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | The identity id for the user | [optional] 
**Name** | **String** | The name of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityaccountselections = Initialize-Identityaccountselections  -RequestedItems null `
 -AccountsSelectionRequired false `
 -Type null `
 -Id 70016590f2df4b879bdb1313a9e4e19e `
 -Name User name
```

- Convert the resource to JSON
```powershell
$Identityaccountselections | ConvertTo-JSON
```


[[Back to top]](#) 

