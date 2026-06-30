---
id: objectexportimportoptions
title: Objectexportimportoptions
pagination_label: Objectexportimportoptions
sidebar_label: Objectexportimportoptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Objectexportimportoptions', 'Objectexportimportoptions'] 
slug: /tools/sdk/powershell/spconfig/models/objectexportimportoptions
tags: ['SDK', 'Software Development Kit', 'Objectexportimportoptions', 'Objectexportimportoptions']
---


# Objectexportimportoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedIds** | **[]String** | Object ids to be included in an import or export. | [optional] 
**IncludedNames** | **[]String** | Object names to be included in an import or export. | [optional] 

## Examples

- Prepare the resource
```powershell
$Objectexportimportoptions = Initialize-Objectexportimportoptions  -IncludedIds null `
 -IncludedNames null
```

- Convert the resource to JSON
```powershell
$Objectexportimportoptions | ConvertTo-JSON
```


[[Back to top]](#) 

