---
id: export-form-definitions-by-tenant-v1200-response-inner-self
title: ExportFormDefinitionsByTenantV1200ResponseInnerSelf
pagination_label: ExportFormDefinitionsByTenantV1200ResponseInnerSelf
sidebar_label: ExportFormDefinitionsByTenantV1200ResponseInnerSelf
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExportFormDefinitionsByTenantV1200ResponseInnerSelf', 'ExportFormDefinitionsByTenantV1200ResponseInnerSelf'] 
slug: /tools/sdk/python/custom-forms/models/export-form-definitions-by-tenant-v1200-response-inner-self
tags: ['SDK', 'Software Development Kit', 'ExportFormDefinitionsByTenantV1200ResponseInnerSelf', 'ExportFormDefinitionsByTenantV1200ResponseInnerSelf']
---

# ExportFormDefinitionsByTenantV1200ResponseInnerSelf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | [**Formdefinitionselfimportexportdto**](formdefinitionselfimportexportdto) |  | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.export_form_definitions_by_tenant_v1200_response_inner_self import ExportFormDefinitionsByTenantV1200ResponseInnerSelf

export_form_definitions_by_tenant_v1200_response_inner_self = ExportFormDefinitionsByTenantV1200ResponseInnerSelf(
object=sailpoint.custom_forms.models.formdefinitionselfimportexportdto.formdefinitionselfimportexportdto(
                    type = 'FORM_DEFINITION', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'Temporary User Level Permissions - Requester', )
)

```
[[Back to top]](#) 

