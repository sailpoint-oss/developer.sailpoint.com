---
id: identitylistitem
title: Identitylistitem
pagination_label: Identitylistitem
sidebar_label: Identitylistitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitylistitem', 'Identitylistitem'] 
slug: /tools/sdk/powershell/identityhistory/models/identitylistitem
tags: ['SDK', 'Software Development Kit', 'Identitylistitem', 'Identitylistitem']
---


# Identitylistitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the identity ID | [optional] 
**DisplayName** | **String** | the display name of the identity | [optional] 
**FirstName** | **String** | the first name of the identity | [optional] 
**LastName** | **String** | the last name of the identity | [optional] 
**Active** | **Boolean** | indicates if an identity is active or not | [optional] [default to $true]
**DeletedDate** | **String** | the date when the identity was deleted | [optional] 

## Examples

- Prepare the resource
```powershell
$Identitylistitem = Initialize-Identitylistitem  -Id bc693f07e7b645539626c25954c58554 `
 -DisplayName Adam Zampa `
 -FirstName Adam `
 -LastName Zampa `
 -Active true `
 -DeletedDate 2007-03-01T13:00:00.000Z
```

- Convert the resource to JSON
```powershell
$Identitylistitem | ConvertTo-JSON
```


[[Back to top]](#) 

