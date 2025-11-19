---
id: v2024-domain-address
title: DomainAddress
pagination_label: DomainAddress
sidebar_label: DomainAddress
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DomainAddress', 'V2024DomainAddress'] 
slug: /tools/sdk/powershell/v2024/models/domain-address
tags: ['SDK', 'Software Development Kit', 'DomainAddress', 'V2024DomainAddress']
---


# DomainAddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | **String** | A domain address | [optional] 

## Examples

- Prepare the resource
```powershell
$DomainAddress = Initialize-V2024DomainAddress  -Domain sailpoint.com
```

- Convert the resource to JSON
```powershell
$DomainAddress | ConvertTo-JSON
```


[[Back to top]](#) 

