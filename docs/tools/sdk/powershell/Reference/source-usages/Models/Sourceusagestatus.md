---
id: sourceusagestatus
title: Sourceusagestatus
pagination_label: Sourceusagestatus
sidebar_label: Sourceusagestatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceusagestatus', 'Sourceusagestatus'] 
slug: /tools/sdk/powershell/sourceusages/models/sourceusagestatus
tags: ['SDK', 'Software Development Kit', 'Sourceusagestatus', 'Sourceusagestatus']
---


# Sourceusagestatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  **Enum** [  "COMPLETE",    "INCOMPLETE" ] | Source Usage Status. Acceptable values are:   - COMPLETE       - This status means that an activity data source has been setup and usage insights are available for the source.   - INCOMPLETE       - This status means that an activity data source has not been setup and usage insights are not available for the source. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourceusagestatus = Initialize-Sourceusagestatus  -Status COMPLETE
```

- Convert the resource to JSON
```powershell
$Sourceusagestatus | ConvertTo-JSON
```


[[Back to top]](#) 

