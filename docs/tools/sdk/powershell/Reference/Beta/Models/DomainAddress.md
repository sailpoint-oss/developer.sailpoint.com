---
id: beta-domain-address
title: DomainAddress
pagination_label: DomainAddress
sidebar_label: DomainAddress
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DomainAddress', 'BetaDomainAddress'] 
slug: /tools/sdk/powershell/beta/models/domain-address
tags: ['SDK', 'Software Development Kit', 'DomainAddress', 'BetaDomainAddress']
---


# DomainAddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | **String** | A domain address | [optional] 

## Examples

- Prepare the resource
```powershell
$DomainAddress = Initialize-PSSailpoint.BetaDomainAddress  -Domain sailpoint.com
```

- Convert the resource to JSON
```powershell
$DomainAddress | ConvertTo-JSON
```


[[Back to top]](#) 

