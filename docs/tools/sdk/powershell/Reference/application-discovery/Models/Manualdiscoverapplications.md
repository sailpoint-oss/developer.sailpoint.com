---
id: manualdiscoverapplications
title: Manualdiscoverapplications
pagination_label: Manualdiscoverapplications
sidebar_label: Manualdiscoverapplications
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Manualdiscoverapplications', 'Manualdiscoverapplications'] 
slug: /tools/sdk/powershell/applicationdiscovery/models/manualdiscoverapplications
tags: ['SDK', 'Software Development Kit', 'Manualdiscoverapplications', 'Manualdiscoverapplications']
---


# Manualdiscoverapplications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. | [required]

## Examples

- Prepare the resource
```powershell
$Manualdiscoverapplications = Initialize-Manualdiscoverapplications  -File [B@5e8cda75
```

- Convert the resource to JSON
```powershell
$Manualdiscoverapplications | ConvertTo-JSON
```


[[Back to top]](#) 

