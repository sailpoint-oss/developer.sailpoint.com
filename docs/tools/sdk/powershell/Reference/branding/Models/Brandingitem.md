---
id: brandingitem
title: Brandingitem
pagination_label: Brandingitem
sidebar_label: Brandingitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Brandingitem', 'Brandingitem'] 
slug: /tools/sdk/powershell/branding/models/brandingitem
tags: ['SDK', 'Software Development Kit', 'Brandingitem', 'Brandingitem']
---


# Brandingitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | name of branding item | [optional] 
**ProductName** | **String** | product name | [optional] 
**ActionButtonColor** | **String** | hex value of color for action button | [optional] 
**ActiveLinkColor** | **String** | hex value of color for link | [optional] 
**NavigationColor** | **String** | hex value of color for navigation bar | [optional] 
**EmailFromAddress** | **String** | email from address | [optional] 
**StandardLogoURL** | **String** | url to standard logo | [optional] 
**LoginInformationalMessage** | **String** | login information message | [optional] 

## Examples

- Prepare the resource
```powershell
$Brandingitem = Initialize-Brandingitem  -Name default `
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
$Brandingitem | ConvertTo-JSON
```


[[Back to top]](#) 

