---
id: sedapproval
title: Sedapproval
pagination_label: Sedapproval
sidebar_label: Sedapproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sedapproval', 'Sedapproval'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/sedapproval
tags: ['SDK', 'Software Development Kit', 'Sedapproval', 'Sedapproval']
---


# Sedapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]String** | List of SED id's | [optional] 

## Examples

- Prepare the resource
```powershell
$Sedapproval = Initialize-Sedapproval  -Items 016629d1-1d25-463f-97f3-c6686846650
```

- Convert the resource to JSON
```powershell
$Sedapproval | ConvertTo-JSON
```


[[Back to top]](#) 

