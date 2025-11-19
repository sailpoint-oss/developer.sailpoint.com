---
id: v2024-branding-item-create
title: BrandingItemCreate
pagination_label: BrandingItemCreate
sidebar_label: BrandingItemCreate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BrandingItemCreate', 'V2024BrandingItemCreate'] 
slug: /tools/sdk/powershell/v2024/models/branding-item-create
tags: ['SDK', 'Software Development Kit', 'BrandingItemCreate', 'V2024BrandingItemCreate']
---


# BrandingItemCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | name of branding item | [required]
**ProductName** | **String** | product name | [required]
**ActionButtonColor** | **String** | hex value of color for action button | [optional] 
**ActiveLinkColor** | **String** | hex value of color for link | [optional] 
**NavigationColor** | **String** | hex value of color for navigation bar | [optional] 
**EmailFromAddress** | **String** | email from address | [optional] 
**LoginInformationalMessage** | **String** | login information message | [optional] 
**FileStandard** | **System.IO.FileInfo** | png file with logo | [optional] 

## Examples

- Prepare the resource
```powershell
$BrandingItemCreate = Initialize-V2024BrandingItemCreate  -Name custom-branding-item `
 -ProductName product name `
 -ActionButtonColor 0074D9 `
 -ActiveLinkColor 011E69 `
 -NavigationColor 011E69 `
 -EmailFromAddress no-reply@sailpoint.com `
 -LoginInformationalMessage  `
 -FileStandard \x00\x00\x00\x02
```

- Convert the resource to JSON
```powershell
$BrandingItemCreate | ConvertTo-JSON
```


[[Back to top]](#) 

