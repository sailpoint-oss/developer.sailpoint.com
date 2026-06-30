---
id: tenantuimetadataitemupdaterequest
title: Tenantuimetadataitemupdaterequest
pagination_label: Tenantuimetadataitemupdaterequest
sidebar_label: Tenantuimetadataitemupdaterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Tenantuimetadataitemupdaterequest', 'Tenantuimetadataitemupdaterequest'] 
slug: /tools/sdk/powershell/uimetadata/models/tenantuimetadataitemupdaterequest
tags: ['SDK', 'Software Development Kit', 'Tenantuimetadataitemupdaterequest', 'Tenantuimetadataitemupdaterequest']
---


# Tenantuimetadataitemupdaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IframeWhiteList** | **String** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use ""null"". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**UsernameLabel** | **String** | Descriptor for the username input field. If you would like to reset the value use ""null"". | [optional] 
**UsernameEmptyText** | **String** | Placeholder text displayed in the username input field. If you would like to reset the value use ""null"". | [optional] 

## Examples

- Prepare the resource
```powershell
$Tenantuimetadataitemupdaterequest = Initialize-Tenantuimetadataitemupdaterequest  -IframeWhiteList http://example.com http://example2.com `
 -UsernameLabel Email `
 -UsernameEmptyText Please provide your work email address...
```

- Convert the resource to JSON
```powershell
$Tenantuimetadataitemupdaterequest | ConvertTo-JSON
```


[[Back to top]](#) 

