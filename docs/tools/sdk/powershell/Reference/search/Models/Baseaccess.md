---
id: baseaccess
title: Baseaccess
pagination_label: Baseaccess
sidebar_label: Baseaccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Baseaccess', 'Baseaccess'] 
slug: /tools/sdk/powershell/search/models/baseaccess
tags: ['SDK', 'Software Development Kit', 'Baseaccess', 'Baseaccess']
---


# Baseaccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **String** | Access item's description. | [optional] 
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** | **System.DateTime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Enabled** | **Boolean** | Indicates whether the access item is currently enabled. | [optional] [default to $false]
**Requestable** | **Boolean** | Indicates whether the access item can be requested. | [optional] [default to $true]
**RequestCommentsRequired** | **Boolean** | Indicates whether comments are required for requests to access the item. | [optional] [default to $false]
**Owner** | [**BaseaccessOwner**](baseaccess-owner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Baseaccess = Initialize-Baseaccess  -Description Admin access `
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
$Baseaccess | ConvertTo-JSON
```


[[Back to top]](#) 

