---
id: objectimportresult2
title: Objectimportresult2
pagination_label: Objectimportresult2
sidebar_label: Objectimportresult2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Objectimportresult2', 'Objectimportresult2'] 
slug: /tools/sdk/powershell/spconfig/models/objectimportresult2
tags: ['SDK', 'Software Development Kit', 'Objectimportresult2', 'Objectimportresult2']
---


# Objectimportresult2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infos** | [**[]Spconfigmessage2**](spconfigmessage2) | Informational messages returned from the target service on import. | [required]
**Warnings** | [**[]Spconfigmessage2**](spconfigmessage2) | Warning messages returned from the target service on import. | [required]
**Errors** | [**[]Spconfigmessage2**](spconfigmessage2) | Error messages returned from the target service on import. | [required]
**ImportedObjects** | [**[]Importobject**](importobject) | References to objects that were created or updated by the import. | [required]

## Examples

- Prepare the resource
```powershell
$Objectimportresult2 = Initialize-Objectimportresult2  -Infos null `
 -Warnings null `
 -Errors null `
 -ImportedObjects null
```

- Convert the resource to JSON
```powershell
$Objectimportresult2 | ConvertTo-JSON
```


[[Back to top]](#) 

