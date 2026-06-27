---
id: spconfigimportresults
title: Spconfigimportresults
pagination_label: Spconfigimportresults
sidebar_label: Spconfigimportresults
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Spconfigimportresults', 'Spconfigimportresults'] 
slug: /tools/sdk/python/sp-config/models/spconfigimportresults
tags: ['SDK', 'Software Development Kit', 'Spconfigimportresults', 'Spconfigimportresults']
---

# Spconfigimportresults

Response Body for Config Import command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**map[string]Objectimportresult2**](objectimportresult2) | The results of an object configuration import job. | [required]
**export_job_id** | **str** | If a backup was performed before the import, this will contain the jobId of the backup job. This id can be used to retrieve the json file of the backup export. | [optional] 
}

## Example

```python
from sailpoint.sp_config.models.spconfigimportresults import Spconfigimportresults

spconfigimportresults = Spconfigimportresults(
results={"results":{"TRIGGER_SUBSCRIPTION":{"infos":[{"key":"IMPORT_PREVIEW","text":"Object to be imported: [c953134c-2224-42f2-a84e-fa5cbb395904, Test 2]","detail":null},{"key":"IMPORT_PREVIEW","text":"Object to be imported: [be9e116d-08e1-49fc-ab7f-fa585e96c9e4, Test 1]","detail":null}],"warnings":[],"errors":[],"importedObjects":[]}}},
export_job_id='be9e116d-08e1-49fc-ab7f-fa585e96c9e4'
)

```
[[Back to top]](#) 

