---
id: brandingitemcreate
title: Brandingitemcreate
pagination_label: Brandingitemcreate
sidebar_label: Brandingitemcreate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Brandingitemcreate', 'Brandingitemcreate'] 
slug: /tools/sdk/powershell/branding/models/brandingitemcreate
tags: ['SDK', 'Software Development Kit', 'Brandingitemcreate', 'Brandingitemcreate']
---


# Brandingitemcreate

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
$Brandingitemcreate = Initialize-Brandingitemcreate  -Name custom-branding-item `
 -ProductName product name `
 -ActionButtonColor 0074D9 `
 -ActiveLinkColor 011E69 `
 -NavigationColor 011E69 `
 -EmailFromAddress no-reply@sailpoint.com `
 -LoginInformationalMessage  `
 -FileStandard [B@41aaedaa
```

- Convert the resource to JSON
```powershell
$Brandingitemcreate | ConvertTo-JSON
```


[[Back to top]](#) 

