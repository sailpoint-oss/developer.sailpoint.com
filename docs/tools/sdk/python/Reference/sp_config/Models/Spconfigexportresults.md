---
id: spconfigexportresults
title: Spconfigexportresults
pagination_label: Spconfigexportresults
sidebar_label: Spconfigexportresults
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Spconfigexportresults', 'Spconfigexportresults'] 
slug: /tools/sdk/python/sp-config/models/spconfigexportresults
tags: ['SDK', 'Software Development Kit', 'Spconfigexportresults', 'Spconfigexportresults']
---

# Spconfigexportresults

Response model for config export download response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **int** | Current version of the export results object. | [optional] 
**timestamp** | **datetime** | Time the export was completed. | [optional] 
**tenant** | **str** | Name of the tenant where this export originated. | [optional] 
**description** | **str** | Optional user defined description/name for export job. | [optional] 
**options** | [**Exportoptions**](exportoptions) |  | [optional] 
**objects** | [**[]Configobject**](configobject) |  | [optional] 
}

## Example

```python
from sailpoint.sp_config.models.spconfigexportresults import Spconfigexportresults

spconfigexportresults = Spconfigexportresults(
version=1,
timestamp='2021-05-11T22:23:16Z',
tenant='sample-tenant',
description='Export Job 1 Test',
options=sailpoint.sp_config.models.export_options.Export Options(
                    exclude_types = [
                        'SOURCE'
                        ], 
                    include_types = [
                        'TRIGGER_SUBSCRIPTION'
                        ], 
                    object_options = {"TRIGGER_SUBSCRIPTION":{"includedIds":["be9e116d-08e1-49fc-ab7f-fa585e96c9e4"],"includedNames":["Test 2"]}}, ),
objects=[
                    sailpoint.sp_config.models.config_object_for_export_and_import.Config Object for Export and Import(
                        version = 1, 
                        self = sailpoint.sp_config.models.self_import_export_dto.Self Import Export Dto(
                            type = 'SOURCE', 
                            id = '2c9180835d191a86015d28455b4b232a', 
                            name = 'HR Active Directory', ), 
                        object = { }, )
                    ]
)

```
[[Back to top]](#) 

