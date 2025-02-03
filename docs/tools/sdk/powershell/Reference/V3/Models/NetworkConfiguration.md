---
id: network-configuration
title: NetworkConfiguration
pagination_label: NetworkConfiguration
sidebar_label: NetworkConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NetworkConfiguration', 'NetworkConfiguration'] 
slug: /tools/sdk/powershell/v3/models/network-configuration
tags: ['SDK', 'Software Development Kit', 'NetworkConfiguration', 'NetworkConfiguration']
---


# NetworkConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Range** | **[]String** | The collection of ip ranges. | [optional] 
**Geolocation** | **[]String** | The collection of country codes. | [optional] 
**Whitelisted** | **Boolean** | Denotes whether the provided lists are whitelisted or blacklisted for geo location. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$NetworkConfiguration = Initialize-PSSailpoint.V3NetworkConfiguration  -Range [1.3.7.2, 255.255.255.252/30] `
 -Geolocation [CA, FR, HT] `
 -Whitelisted true
```

- Convert the resource to JSON
```powershell
$NetworkConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

