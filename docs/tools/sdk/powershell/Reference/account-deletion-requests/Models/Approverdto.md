---
id: approverdto
title: Approverdto
pagination_label: Approverdto
sidebar_label: Approverdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approverdto', 'Approverdto'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/approverdto
tags: ['SDK', 'Software Development Kit', 'Approverdto', 'Approverdto']
---


# Approverdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | **String** | Identity ID and it cannot be null. | [optional] 
**Id** | **String** | Optional id | [optional] 
**Name** | **String** | Identity display name | [optional] 
**Email** | **String** | Email address of identity | [optional] 
**Type** | **String** | Used to mention type of data transfer object in this case it is used to transfer IDENTITY data. | [optional] 
**OwnerOf** | [**[]Approverreference**](approverreference) | List of reference of identity type dto for account owner identities | [optional] 
**ActionedAs** | [**[]Approverreference**](approverreference) | List of reference of identity type dto who acted on behalf of other identities. | [optional] 
**Members** | [**[]Approverreference**](approverreference) | List of reference of identity type dto for member identities. | [optional] 

## Examples

- Prepare the resource
```powershell
$Approverdto = Initialize-Approverdto  -IdentityID 22efd140d88a4ceeab32c8829973244c `
 -Id null `
 -Name SailPoint Support `
 -Email support@testmail.identitysoon.com `
 -Type IDENTITY `
 -OwnerOf null `
 -ActionedAs null `
 -Members null
```

- Convert the resource to JSON
```powershell
$Approverdto | ConvertTo-JSON
```


[[Back to top]](#) 

