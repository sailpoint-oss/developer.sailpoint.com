---
id: v2025-sp-config-import-results
title: SpConfigImportResults
pagination_label: SpConfigImportResults
sidebar_label: SpConfigImportResults
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigImportResults', 'V2025SpConfigImportResults'] 
slug: /tools/sdk/python/v2025/models/sp-config-import-results
tags: ['SDK', 'Software Development Kit', 'SpConfigImportResults', 'V2025SpConfigImportResults']
---

# SpConfigImportResults

Response Body for Config Import command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**map[string]ObjectImportResult1**](object-import-result1) | The results of an object configuration import job. | [required]
**export_job_id** | **str** | If a backup was performed before the import, this will contain the jobId of the backup job. This id can be used to retrieve the json file of the backup export. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.sp_config_import_results import SpConfigImportResults

sp_config_import_results = SpConfigImportResults(
results={results={TRIGGER_SUBSCRIPTION={infos=[{key=IMPORT_PREVIEW, text=Object to be imported: [c953134c-2224-42f2-a84e-fa5cbb395904, Test 2], detail=null}, {key=IMPORT_PREVIEW, text=Object to be imported: [be9e116d-08e1-49fc-ab7f-fa585e96c9e4, Test 1], detail=null}], warnings=[], errors=[], importedObjects=[]}}},
export_job_id='be9e116d-08e1-49fc-ab7f-fa585e96c9e4'
)

```
[[Back to top]](#) 

