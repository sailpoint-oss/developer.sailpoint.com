---
id: identity-list-item
title: IdentityListItem
pagination_label: IdentityListItem
sidebar_label: IdentityListItem
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityListItem'] 
slug: /tools/sdk/powershell/beta/models/identity-list-item
tags: ['SDK', 'Software Development Kit', 'IdentityListItem']
---


# IdentityListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the identity ID | [optional] 
**DisplayName** |  Pointer to **String** | the display name of the identity | [optional] 
**FirstName** |  Pointer to **String** | the first name of the identity | [optional] 
**LastName** |  Pointer to **String** | the last name of the identity | [optional] 
**Active** |  Pointer to **Boolean** | indicates if an identity is active or not | [optional] [default to $true]
**DeletedDate** |  Pointer to **String** | the date when the identity was deleted | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityListItem = Initialize-PSSailpointBetaIdentityListItem  -Id bc693f07e7b645539626c25954c58554 `
 -DisplayName Adam Zampa `
 -FirstName Adam `
 -LastName Zampa `
 -Active true `
 -DeletedDate 2007-03-01T13:00:00.000Z
```

- Convert the resource to JSON
```powershell
$IdentityListItem | ConvertTo-JSON
```


[[Back to top]](#) 

