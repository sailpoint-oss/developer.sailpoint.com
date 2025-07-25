---
id: v2025-sp-config-export-results
title: SpConfigExportResults
pagination_label: SpConfigExportResults
sidebar_label: SpConfigExportResults
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigExportResults', 'V2025SpConfigExportResults'] 
slug: /tools/sdk/python/v2025/models/sp-config-export-results
tags: ['SDK', 'Software Development Kit', 'SpConfigExportResults', 'V2025SpConfigExportResults']
---

# SpConfigExportResults

Response model for config export download response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **int** | Current version of the export results object. | [optional] 
**timestamp** | **datetime** | Time the export was completed. | [optional] 
**tenant** | **str** | Name of the tenant where this export originated. | [optional] 
**description** | **str** | Optional user defined description/name for export job. | [optional] 
**options** | [**ExportOptions1**](export-options1) |  | [optional] 
**objects** | [**[]ConfigObject**](config-object) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.sp_config_export_results import SpConfigExportResults

sp_config_export_results = SpConfigExportResults(
version=1,
timestamp='2021-05-11T22:23:16Z',
tenant='sample-tenant',
description='Export Job 1 Test',
options=sailpoint.v2025.models.export_options.Export Options(
                    exclude_types = [
                        'SOURCE'
                        ], 
                    include_types = [
                        'TRIGGER_SUBSCRIPTION'
                        ], 
                    object_options = {TRIGGER_SUBSCRIPTION={includedIds=[be9e116d-08e1-49fc-ab7f-fa585e96c9e4], includedNames=[Test 2]}}, ),
objects=[
                    sailpoint.v2025.models.config_object_for_export_and_import.Config Object for Export and Import(
                        version = 1, 
                        self = sailpoint.v2025.models.self_import_export_dto.Self Import Export Dto(
                            type = 'SOURCE', 
                            id = '2c9180835d191a86015d28455b4b232a', 
                            name = 'HR Active Directory', ), 
                        object = { }, )
                    ]
)

```
[[Back to top]](#) 

