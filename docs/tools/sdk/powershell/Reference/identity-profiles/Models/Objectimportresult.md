---
id: objectimportresult
title: Objectimportresult
pagination_label: Objectimportresult
sidebar_label: Objectimportresult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Objectimportresult', 'Objectimportresult'] 
slug: /tools/sdk/powershell/identityprofiles/models/objectimportresult
tags: ['SDK', 'Software Development Kit', 'Objectimportresult', 'Objectimportresult']
---


# Objectimportresult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infos** | [**[]Spconfigmessage**](spconfigmessage) | Informational messages returned from the target service on import. | [required]
**Warnings** | [**[]Spconfigmessage**](spconfigmessage) | Warning messages returned from the target service on import. | [required]
**Errors** | [**[]Spconfigmessage**](spconfigmessage) | Error messages returned from the target service on import. | [required]
**ImportedObjects** | [**[]Importobject**](importobject) | References to objects that were created or updated by the import. | [required]

## Examples

- Prepare the resource
```powershell
$Objectimportresult = Initialize-Objectimportresult  -Infos null `
 -Warnings null `
 -Errors null `
 -ImportedObjects null
```

- Convert the resource to JSON
```powershell
$Objectimportresult | ConvertTo-JSON
```


[[Back to top]](#) 

