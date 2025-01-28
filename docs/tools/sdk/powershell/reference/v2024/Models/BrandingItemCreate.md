---
id: v2024-branding-item-create
title: BrandingItemCreate
pagination_label: BrandingItemCreate
sidebar_label: BrandingItemCreate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BrandingItemCreate'] 
slug: /tools/sdk/powershell/v2024/models/branding-item-create
tags: ['SDK', 'Software Development Kit', 'BrandingItemCreate']
---


# BrandingItemCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | name of branding item | [required]
**ProductName** |  **String** | product name | [required]
**ActionButtonColor** |  Pointer to **String** | hex value of color for action button | [optional] 
**ActiveLinkColor** |  Pointer to **String** | hex value of color for link | [optional] 
**NavigationColor** |  Pointer to **String** | hex value of color for navigation bar | [optional] 
**EmailFromAddress** |  Pointer to **String** | email from address | [optional] 
**LoginInformationalMessage** |  Pointer to **String** | login information message | [optional] 
**FileStandard** |  Pointer to **System.IO.FileInfo** | png file with logo | [optional] 

## Examples

- Prepare the resource
```powershell
$BrandingItemCreate = Initialize-PSSailpoint.V2024BrandingItemCreate  -Name custom-branding-item `
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

