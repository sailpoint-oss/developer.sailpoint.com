---
id: v2024-branding-item
title: BrandingItem
pagination_label: BrandingItem
sidebar_label: BrandingItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BrandingItem'] 
slug: /tools/sdk/powershell/v2024/models/branding-item
tags: ['SDK', 'Software Development Kit', 'BrandingItem']
---


# BrandingItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | name of branding item | [optional] 
**ProductName** |  Pointer to **String** | product name | [optional] 
**ActionButtonColor** |  Pointer to **String** | hex value of color for action button | [optional] 
**ActiveLinkColor** |  Pointer to **String** | hex value of color for link | [optional] 
**NavigationColor** |  Pointer to **String** | hex value of color for navigation bar | [optional] 
**EmailFromAddress** |  Pointer to **String** | email from address | [optional] 
**StandardLogoURL** |  Pointer to **String** | url to standard logo | [optional] 
**LoginInformationalMessage** |  Pointer to **String** | login information message | [optional] 

## Examples

- Prepare the resource
```powershell
$BrandingItem = Initialize-PSSailpoint.V2024BrandingItem  -Name default `
 -ProductName product name `
 -ActionButtonColor 0074D9 `
 -ActiveLinkColor 011E69 `
 -NavigationColor 011E69 `
 -EmailFromAddress no-reply@sailpoint.com `
 -StandardLogoURL  `
 -LoginInformationalMessage 
```

- Convert the resource to JSON
```powershell
$BrandingItem | ConvertTo-JSON
```


[[Back to top]](#) 

