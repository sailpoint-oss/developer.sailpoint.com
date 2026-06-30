---
id: reviewableaccessprofile
title: Reviewableaccessprofile
pagination_label: Reviewableaccessprofile
sidebar_label: Reviewableaccessprofile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reviewableaccessprofile', 'Reviewableaccessprofile'] 
slug: /tools/sdk/powershell/certifications/models/reviewableaccessprofile
tags: ['SDK', 'Software Development Kit', 'Reviewableaccessprofile', 'Reviewableaccessprofile']
---


# Reviewableaccessprofile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id of the Access Profile | [optional] 
**Name** | **String** | Name of the Access Profile | [optional] 
**Description** | **String** | Information about the Access Profile | [optional] 
**Privileged** | **Boolean** | Indicates if the entitlement is a privileged entitlement | [optional] 
**CloudGoverned** | **Boolean** | True if the entitlement is cloud governed | [optional] 
**EndDate** | **System.DateTime** | The date at which a user's access expires | [optional] 
**Owner** | [**Identityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 
**Entitlements** | [**[]Reviewableentitlement**](reviewableentitlement) | A list of entitlements associated with this Access Profile | [optional] 
**Created** | **System.DateTime** | Date the Access Profile was created. | [optional] 
**Modified** | **System.DateTime** | Date the Access Profile was last modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reviewableaccessprofile = Initialize-Reviewableaccessprofile  -Id 2c91808a7190d06e01719938fcd20792 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database `
 -Privileged false `
 -CloudGoverned false `
 -EndDate 2021-12-25T00:00Z `
 -Owner null `
 -Entitlements null `
 -Created 2021-01-01T22:32:58.104Z `
 -Modified 2021-02-01T22:32:58.104Z
```

- Convert the resource to JSON
```powershell
$Reviewableaccessprofile | ConvertTo-JSON
```


[[Back to top]](#) 

