---
id: activatecampaignoptions
title: Activatecampaignoptions
pagination_label: Activatecampaignoptions
sidebar_label: Activatecampaignoptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Activatecampaignoptions', 'Activatecampaignoptions'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/activatecampaignoptions
tags: ['SDK', 'Software Development Kit', 'Activatecampaignoptions', 'Activatecampaignoptions']
---


# Activatecampaignoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeZone** | **String** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] [default to "Z"]

## Examples

- Prepare the resource
```powershell
$Activatecampaignoptions = Initialize-Activatecampaignoptions  -TimeZone -05:00
```

- Convert the resource to JSON
```powershell
$Activatecampaignoptions | ConvertTo-JSON
```


[[Back to top]](#) 

