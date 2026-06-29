---
id: accessprofiledocuments
title: Accessprofiledocuments
pagination_label: Accessprofiledocuments
sidebar_label: Accessprofiledocuments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessprofiledocuments', 'Accessprofiledocuments'] 
slug: /tools/sdk/powershell/search/models/accessprofiledocuments
tags: ['SDK', 'Software Development Kit', 'Accessprofiledocuments', 'Accessprofiledocuments']
---


# Accessprofiledocuments

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
**Id** | **String** | Access profile's ID. | [required]
**Name** | **String** | Access profile's name. | [required]
**Source** | [**AccessprofiledocumentAllOfSource**](accessprofiledocument-all-of-source) |  | [optional] 
**Entitlements** | [**[]Baseentitlement**](baseentitlement) | Entitlements the access profile has access to. | [optional] 
**EntitlementCount** | **Int32** | Number of entitlements. | [optional] 
**Segments** | [**[]Basesegment**](basesegment) | Segments with the access profile. | [optional] 
**SegmentCount** | **Int32** | Number of segments with the access profile. | [optional] 
**Tags** | **[]String** | Tags that have been applied to the object. | [optional] 
**Apps** | [**[]Accessapps**](accessapps) | Applications with the access profile | [optional] 
**Pod** | **String** | Name of the pod. | [optional] 
**Org** | **String** | Name of the tenant. | [optional] 
**Type** | [**Documenttype**](documenttype) |  | [optional] 
**Type** | [**Documenttype**](documenttype) |  | [optional] 
**Version** | **String** | Version number. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessprofiledocuments = Initialize-Accessprofiledocuments  -Description Admin access `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Synced 2018-06-25T20:22:33.104Z `
 -Enabled true `
 -Requestable true `
 -RequestCommentsRequired false `
 -Owner null `
 -Id 2c9180825a6c1adc015a71c9023f0818 `
 -Name Cloud Eng `
 -Source null `
 -Entitlements null `
 -EntitlementCount 5 `
 -Segments null `
 -SegmentCount 1 `
 -Tags ["TAG_1","TAG_2"] `
 -Apps null `
 -Pod pod01-useast1 `
 -Org org-name `
 -Type null `
 -Type null `
 -Version v2
```

- Convert the resource to JSON
```powershell
$Accessprofiledocuments | ConvertTo-JSON
```


[[Back to top]](#) 

