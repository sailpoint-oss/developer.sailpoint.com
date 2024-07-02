---
id: requestable-object
title: RequestableObject
pagination_label: RequestableObject
sidebar_label: RequestableObject
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RequestableObject'] 
slug: /tools/sdk/powershell/beta/models/requestable-object
tags: ['SDK', 'Software Development Kit', 'RequestableObject']
---


# RequestableObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the requestable object itself | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the requestable object | [optional] 
**Created** |  Pointer to **System.DateTime** | The time when the requestable object was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | The time when the requestable object was last modified | [optional] 
**Description** |  Pointer to **String** | Description of the requestable object. | [optional] 
**Type** |  Pointer to [**RequestableObjectType**](requestable-object-type) |  | [optional] 
**RequestStatus** |  Pointer to [**RequestableObjectRequestStatus**](requestable-object-request-status) |  | [optional] 
**IdentityRequestId** |  Pointer to **String** | If *requestStatus* is *PENDING*, indicates the id of the associated account activity. | [optional] 
**OwnerRef** |  Pointer to [**IdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
**RequestCommentsRequired** |  Pointer to **Boolean** | Whether the requester must provide comments when requesting the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestableObject = Initialize-BetaRequestableObject  -Id 2c9180835d2e5168015d32f890ca1581 `
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
$RequestableObject | ConvertTo-JSON
```


[[Back to top]](#) 

