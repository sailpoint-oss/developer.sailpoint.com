---
id: sourcecreationerrors
title: Sourcecreationerrors
pagination_label: Sourcecreationerrors
sidebar_label: Sourcecreationerrors
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourcecreationerrors', 'Sourcecreationerrors'] 
slug: /tools/sdk/powershell/multihostintegration/models/sourcecreationerrors
tags: ['SDK', 'Software Development Kit', 'Sourcecreationerrors', 'Sourcecreationerrors']
---


# Sourcecreationerrors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MultihostId** | **String** | Multi-Host Integration ID. | [optional] [readonly] 
**SourceName** | **String** | Source's human-readable name. | [optional] 
**SourceError** | **String** | Source's human-readable description. | [optional] 
**Created** | **System.DateTime** | Date-time when the source was created | [optional] 
**Modified** | **System.DateTime** | Date-time when the source was last modified. | [optional] 
**Operation** | **String** | operation category (e.g. DELETE). | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourcecreationerrors = Initialize-Sourcecreationerrors  -MultihostId 2c91808568c529c60168cca6f90c1324 `
 -SourceName My Source `
 -SourceError Source with internal name "My Source [source]" already exists. `
 -Created 2022-02-08T14:50:03.827Z `
 -Modified 2024-01-23T18:08:50.897Z `
 -Operation DELETE
```

- Convert the resource to JSON
```powershell
$Sourcecreationerrors | ConvertTo-JSON
```


[[Back to top]](#) 

