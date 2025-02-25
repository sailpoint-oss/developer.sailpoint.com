---
id: v2024-template-bulk-delete-dto
title: TemplateBulkDeleteDto
pagination_label: TemplateBulkDeleteDto
sidebar_label: TemplateBulkDeleteDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TemplateBulkDeleteDto', 'V2024TemplateBulkDeleteDto'] 
slug: /tools/sdk/python/v2024/models/template-bulk-delete-dto
tags: ['SDK', 'Software Development Kit', 'TemplateBulkDeleteDto', 'V2024TemplateBulkDeleteDto']
---

# TemplateBulkDeleteDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [required]
**medium** |  **Enum** [  'EMAIL',    'PHONE',    'SMS' ] |  | [optional] 
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.template_bulk_delete_dto import TemplateBulkDeleteDto

template_bulk_delete_dto = TemplateBulkDeleteDto(
key='cloud_manual_work_item_summary',
medium='EMAIL',
locale='en'
)

```
[[Back to top]](#) 

