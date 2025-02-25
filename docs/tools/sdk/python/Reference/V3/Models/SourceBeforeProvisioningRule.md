---
id: source-before-provisioning-rule
title: SourceBeforeProvisioningRule
pagination_label: SourceBeforeProvisioningRule
sidebar_label: SourceBeforeProvisioningRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceBeforeProvisioningRule', 'SourceBeforeProvisioningRule'] 
slug: /tools/sdk/python/v3/models/source-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'SourceBeforeProvisioningRule', 'SourceBeforeProvisioningRule']
---

# SourceBeforeProvisioningRule

Rule that runs on the CCG and allows for customization of provisioning plans before the API calls the connector. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'RULE' ] | Type of object being referenced. | [optional] 
**id** | **str** | Rule ID. | [optional] 
**name** | **str** | Rule's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.source_before_provisioning_rule import SourceBeforeProvisioningRule

source_before_provisioning_rule = SourceBeforeProvisioningRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

