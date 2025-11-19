---
id: v2025-export-form-definitions-by-tenant200-response-inner-self
title: ExportFormDefinitionsByTenant200ResponseInnerSelf
pagination_label: ExportFormDefinitionsByTenant200ResponseInnerSelf
sidebar_label: ExportFormDefinitionsByTenant200ResponseInnerSelf
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExportFormDefinitionsByTenant200ResponseInnerSelf', 'V2025ExportFormDefinitionsByTenant200ResponseInnerSelf'] 
slug: /tools/sdk/python/v2025/models/export-form-definitions-by-tenant200-response-inner-self
tags: ['SDK', 'Software Development Kit', 'ExportFormDefinitionsByTenant200ResponseInnerSelf', 'V2025ExportFormDefinitionsByTenant200ResponseInnerSelf']
---

# ExportFormDefinitionsByTenant200ResponseInnerSelf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | [**FormDefinitionSelfImportExportDto**](form-definition-self-import-export-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.export_form_definitions_by_tenant200_response_inner_self import ExportFormDefinitionsByTenant200ResponseInnerSelf

export_form_definitions_by_tenant200_response_inner_self = ExportFormDefinitionsByTenant200ResponseInnerSelf(
object=sailpoint.v2025.models.form_definition_self_import_export_dto.FormDefinitionSelfImportExportDto(
                    type = 'FORM_DEFINITION', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'Temporary User Level Permissions - Requester', )
)

```
[[Back to top]](#) 

