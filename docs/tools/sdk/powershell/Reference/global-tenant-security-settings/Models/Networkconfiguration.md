---
id: networkconfiguration
title: Networkconfiguration
pagination_label: Networkconfiguration
sidebar_label: Networkconfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Networkconfiguration', 'Networkconfiguration'] 
slug: /tools/sdk/powershell/globaltenantsecuritysettings/models/networkconfiguration
tags: ['SDK', 'Software Development Kit', 'Networkconfiguration', 'Networkconfiguration']
---


# Networkconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Range** | **[]String** | The collection of ip ranges. | [optional] 
**Geolocation** | **[]String** | The collection of country codes. | [optional] 
**Whitelisted** | **Boolean** | Denotes whether the provided lists are whitelisted or blacklisted for geo location. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Networkconfiguration = Initialize-Networkconfiguration  -Range ["1.3.7.2","255.255.255.252/30"] `
 -Geolocation ["CA","FR","HT"] `
 -Whitelisted true
```

- Convert the resource to JSON
```powershell
$Networkconfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

