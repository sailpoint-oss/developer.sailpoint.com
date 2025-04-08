---
id: beta-sp-config-object
title: SpConfigObject
pagination_label: SpConfigObject
sidebar_label: SpConfigObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigObject', 'BetaSpConfigObject'] 
slug: /tools/sdk/python/beta/models/sp-config-object
tags: ['SDK', 'Software Development Kit', 'SpConfigObject', 'BetaSpConfigObject']
---

# SpConfigObject

Response model for object configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** | Object type the configuration is for. | [optional] 
**reference_extractors** | **[]str** | List of JSON paths within an exported object of this type, representing references that must be resolved. | [optional] 
**signature_required** | **bool** | Indicates whether this type of object will be JWS signed and cannot be modified before import. | [optional] [default to False]
**always_resolve_by_id** | **bool** | Indicates whether this object type must be always be resolved by ID. | [optional] [default to False]
**legacy_object** | **bool** | Indicates whether this is a legacy object. | [optional] [default to False]
**one_per_tenant** | **bool** | Indicates whether there is only one object of this type. | [optional] [default to False]
**exportable** | **bool** | Indicates whether the object can be exported or is just a reference object. | [optional] [default to False]
**rules** | [**SpConfigRules**](sp-config-rules) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.sp_config_object import SpConfigObject

sp_config_object = SpConfigObject(
object_type='TRIGGER_SUBSCRIPTION',
reference_extractors=[$.owner],
signature_required=False,
always_resolve_by_id=True,
legacy_object=False,
one_per_tenant=False,
exportable=True,
rules=sailpoint.beta.models.config_object_rules.Config Object Rules(
                    take_from_target_rules = [
                        sailpoint.beta.models.config_object_rule.Config Object Rule(
                            path = '$.enabled', 
                            value = null, 
                            modes = [RESTORE, PROMOTE], )
                        ], 
                    default_rules = [
                        sailpoint.beta.models.config_object_rule.Config Object Rule(
                            path = '$.enabled', 
                            modes = [RESTORE, PROMOTE], )
                        ], 
                    editable = True, )
)

```
[[Back to top]](#) 

