---
id: beta-sp-config-import-results
title: SpConfigImportResults
pagination_label: SpConfigImportResults
sidebar_label: SpConfigImportResults
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigImportResults'] 
slug: /tools/sdk/powershell/beta/models/sp-config-import-results
tags: ['SDK', 'Software Development Kit', 'SpConfigImportResults']
---


# SpConfigImportResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** |  [**map[string]ObjectImportResult**](object-import-result) | The results of an object configuration import job. | [required]
**ExportJobId** |  Pointer to **String** | If a backup was performed before the import, this will contain the jobId of the backup job. This id can be used to retrieve the json file of the backup export. | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigImportResults = Initialize-PSSailpoint.BetaSpConfigImportResults  -Results {results&#x3D;{TRIGGER_SUBSCRIPTION&#x3D;{infos&#x3D;[{key&#x3D;IMPORT_PREVIEW, text&#x3D;Object to be imported: [c953134c-2224-42f2-a84e-fa5cbb395904, Test 2], detail&#x3D;null}, {key&#x3D;IMPORT_PREVIEW, text&#x3D;Object to be imported: [be9e116d-08e1-49fc-ab7f-fa585e96c9e4, Test 1], detail&#x3D;null}], warnings&#x3D;[], errors&#x3D;[], importedObjects&#x3D;[]}}} `
 -ExportJobId be9e116d-08e1-49fc-ab7f-fa585e96c9e4
```

- Convert the resource to JSON
```powershell
$SpConfigImportResults | ConvertTo-JSON
```


[[Back to top]](#) 

