---
id: external-attributes
title: ExternalAttributes
pagination_label: ExternalAttributes
sidebar_label: ExternalAttributes
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ExternalAttributes'] 
slug: /tools/sdk/powershell/beta/models/external-attributes
tags: ['SDK', 'Software Development Kit', 'ExternalAttributes']
---


# ExternalAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | A unique name for the external trigger | 
**Description** |  Pointer to **String** | Additonal context about the external trigger | [optional] 

## Examples

- Prepare the resource
```powershell
$ExternalAttributes = Initialize-PSSailpointBetaExternalAttributes  -Name search-and-notify `
 -Description Run a search and notify the results
```

- Convert the resource to JSON
```powershell
$ExternalAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

