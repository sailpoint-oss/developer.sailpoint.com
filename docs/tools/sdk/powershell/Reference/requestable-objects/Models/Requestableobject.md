---
id: requestableobject
title: Requestableobject
pagination_label: Requestableobject
sidebar_label: Requestableobject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requestableobject', 'Requestableobject'] 
slug: /tools/sdk/powershell/requestableobjects/models/requestableobject
tags: ['SDK', 'Software Development Kit', 'Requestableobject', 'Requestableobject']
---


# Requestableobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the requestable object itself | [optional] 
**Name** | **String** | Human-readable display name of the requestable object | [optional] 
**Created** | **System.DateTime** | The time when the requestable object was created | [optional] 
**Modified** | **System.DateTime** | The time when the requestable object was last modified | [optional] 
**Description** | **String** | Description of the requestable object. | [optional] 
**Type** | [**Requestableobjecttype**](requestableobjecttype) |  | [optional] 
**RequestStatus** | [**Requestableobjectrequeststatus**](requestableobjectrequeststatus) |  | [optional] 
**IdentityRequestId** | **String** | If *requestStatus* is *PENDING*, indicates the id of the associated account activity. | [optional] 
**OwnerRef** | [**Identityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 
**RequestCommentsRequired** | **Boolean** | Whether the requester must provide comments when requesting the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$Requestableobject = Initialize-Requestableobject  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name Applied Research Access `
 -Created 2017-07-11T18:45:37.098Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Description Access to research information, lab results, and schematics. `
 -Type null `
 -RequestStatus null `
 -IdentityRequestId null `
 -OwnerRef null `
 -RequestCommentsRequired false
```

- Convert the resource to JSON
```powershell
$Requestableobject | ConvertTo-JSON
```


[[Back to top]](#) 

