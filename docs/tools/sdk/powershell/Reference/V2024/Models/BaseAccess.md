---
id: v2024-base-access
title: BaseAccess
pagination_label: BaseAccess
sidebar_label: BaseAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseAccess', 'V2024BaseAccess'] 
slug: /tools/sdk/powershell/v2024/models/base-access
tags: ['SDK', 'Software Development Kit', 'BaseAccess', 'V2024BaseAccess']
---


# BaseAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**Description** | **String** | Access item's description. | [optional] 
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** | **System.DateTime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Enabled** | **Boolean** | Indicates whether the access item is currently enabled. | [optional] [default to $false]
**Requestable** | **Boolean** | Indicates whether the access item can be requested. | [optional] [default to $true]
**RequestCommentsRequired** | **Boolean** | Indicates whether comments are required for requests to access the item. | [optional] [default to $false]
**Owner** | [**BaseAccessAllOfOwner**](base-access-all-of-owner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseAccess = Initialize-PSSailpoint.V2024BaseAccess  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -Description The admin role `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Synced 2018-06-25T20:22:33.104Z `
 -Enabled true `
 -Requestable true `
 -RequestCommentsRequired false `
 -Owner null
```

- Convert the resource to JSON
```powershell
$BaseAccess | ConvertTo-JSON
```


[[Back to top]](#) 

