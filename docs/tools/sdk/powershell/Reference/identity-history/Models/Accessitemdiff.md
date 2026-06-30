---
id: accessitemdiff
title: Accessitemdiff
pagination_label: Accessitemdiff
sidebar_label: Accessitemdiff
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemdiff', 'Accessitemdiff'] 
slug: /tools/sdk/powershell/identityhistory/models/accessitemdiff
tags: ['SDK', 'Software Development Kit', 'Accessitemdiff', 'Accessitemdiff']
---


# Accessitemdiff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the id of the access item | [optional] 
**EventType** |  **Enum** [  "ADD",    "REMOVE" ] |  | [optional] 
**DisplayName** | **String** | the display name of the access item | [optional] 
**SourceName** | **String** | the source name of the access item | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemdiff = Initialize-Accessitemdiff  -Id null `
 -EventType null `
 -DisplayName null `
 -SourceName null
```

- Convert the resource to JSON
```powershell
$Accessitemdiff | ConvertTo-JSON
```


[[Back to top]](#) 

