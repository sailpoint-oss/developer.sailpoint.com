---
id: segmentmembership
title: Segmentmembership
pagination_label: Segmentmembership
sidebar_label: Segmentmembership
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Segmentmembership', 'Segmentmembership'] 
slug: /tools/sdk/powershell/datasegmentation/models/segmentmembership
tags: ['SDK', 'Software Development Kit', 'Segmentmembership', 'Segmentmembership']
---


# Segmentmembership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Segments** | **[]String** | List of segment ids that the identity is associated with. | [optional] 
**AllAccessScopes** | [**[]Scopetype**](scopetype) | They type of scopes that are assigned to the identity. | [optional] 
**RefreshBy** | **System.DateTime** | Date time string that lets you know when the membership data is going to be refreshed. | [optional] 

## Examples

- Prepare the resource
```powershell
$Segmentmembership = Initialize-Segmentmembership  -Segments null `
 -AllAccessScopes null `
 -RefreshBy 2020-01-01T00:00Z
```

- Convert the resource to JSON
```powershell
$Segmentmembership | ConvertTo-JSON
```


[[Back to top]](#) 

