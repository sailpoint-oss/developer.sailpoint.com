# HumanAccountSubtype

# HumanAccountSubtype

A human account subtype of a source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the subtype. | [optional] [readonly] 
**source_id** | **str** | The ID of the source the subtype belongs to. | [optional] [readonly] 
**technical_name** | **str** | Technical name of the subtype. | [optional] 
**display_name** | **str** | Display name of the subtype. | [optional] 
**description** | **str** | Description of the subtype. | [optional] 
**entity_type** | **str** | Entity type the subtype applies to. Human account subtypes apply to accounts. | [optional] [readonly] 
**default** | **bool** | Whether this subtype is the default human account subtype of the source. | [optional] [default to False]
**system_managed** | **bool** | Indicates if the subtype is managed by the system. Read-only. | [optional] [readonly] [default to False]
**created** | **datetime** | Creation timestamp. | [optional] [readonly] 
**modified** | **datetime** | Last modified timestamp. | [optional] [readonly] 
\}

## Example

```python
from sailpoint.human_account_subtypes.models.human_account_subtype import HumanAccountSubtype

human_account_subtype = HumanAccountSubtype(
id='38453251-6be2-5f8f-df93-5ce19e295838',
source_id='6d0458373bec4b4b80460992b76016da',
technical_name='contractor',
display_name='Contractor',
description='Contractors with a limited account lifecycle',
entity_type='ACCOUNT',
default=False,
system_managed=False,
created='2026-11-20T10:15:30.123Z',
modified='2026-11-20T10:15:30.123Z'
)

```
[[Back to top]](#) 

