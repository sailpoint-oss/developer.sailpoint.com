---
id: spconfigimportresults
title: Spconfigimportresults
pagination_label: Spconfigimportresults
sidebar_label: Spconfigimportresults
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Spconfigimportresults', 'Spconfigimportresults'] 
slug: /tools/sdk/powershell/spconfig/models/spconfigimportresults
tags: ['SDK', 'Software Development Kit', 'Spconfigimportresults', 'Spconfigimportresults']
---


# Spconfigimportresults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | [**map[string]Objectimportresult2**](objectimportresult2) | The results of an object configuration import job. | [required]
**ExportJobId** | **String** | If a backup was performed before the import, this will contain the jobId of the backup job. This id can be used to retrieve the json file of the backup export. | [optional] 

## Examples

- Prepare the resource
```powershell
$Spconfigimportresults = Initialize-Spconfigimportresults  -Results {"results":{"TRIGGER_SUBSCRIPTION":{"infos":[{"key":"IMPORT_PREVIEW","text":"Object to be imported: [c953134c-2224-42f2-a84e-fa5cbb395904, Test 2]","detail":null},{"key":"IMPORT_PREVIEW","text":"Object to be imported: [be9e116d-08e1-49fc-ab7f-fa585e96c9e4, Test 1]","detail":null}],"warnings":[],"errors":[],"importedObjects":[]}}} `
 -ExportJobId be9e116d-08e1-49fc-ab7f-fa585e96c9e4
```

- Convert the resource to JSON
```powershell
$Spconfigimportresults | ConvertTo-JSON
```


[[Back to top]](#) 

