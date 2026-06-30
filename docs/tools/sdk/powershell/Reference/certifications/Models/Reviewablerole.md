---
id: reviewablerole
title: Reviewablerole
pagination_label: Reviewablerole
sidebar_label: Reviewablerole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reviewablerole', 'Reviewablerole'] 
slug: /tools/sdk/powershell/certifications/models/reviewablerole
tags: ['SDK', 'Software Development Kit', 'Reviewablerole', 'Reviewablerole']
---


# Reviewablerole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id for the Role | [optional] 
**Name** | **String** | The name of the Role | [optional] 
**Description** | **String** | Information about the Role | [optional] 
**Privileged** | **Boolean** | Indicates if the entitlement is a privileged entitlement | [optional] 
**Owner** | [**Identityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 
**Revocable** | **Boolean** | Indicates whether the Role can be revoked or requested | [optional] 
**EndDate** | **System.DateTime** | The date when a user's access expires. | [optional] 
**AccessProfiles** | [**[]Reviewableaccessprofile**](reviewableaccessprofile) | The list of Access Profiles associated with this Role | [optional] 
**Entitlements** | [**[]Reviewableentitlement**](reviewableentitlement) | The list of entitlements associated with this Role | [optional] 

## Examples

- Prepare the resource
```powershell
$Reviewablerole = Initialize-Reviewablerole  -Id 2c91808a7190d06e0171993907fd0794 `
 -Name Accounting-Employees `
 -Description Role for members of the accounting department with the necessary Access Profiles `
 -Privileged false `
 -Owner null `
 -Revocable false `
 -EndDate 2021-12-25T00:00Z `
 -AccessProfiles null `
 -Entitlements null
```

- Convert the resource to JSON
```powershell
$Reviewablerole | ConvertTo-JSON
```


[[Back to top]](#) 

