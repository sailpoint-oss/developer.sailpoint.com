---
id: multihostsources-before-provisioning-rule
title: MultihostsourcesBeforeProvisioningRule
pagination_label: MultihostsourcesBeforeProvisioningRule
sidebar_label: MultihostsourcesBeforeProvisioningRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostsourcesBeforeProvisioningRule', 'MultihostsourcesBeforeProvisioningRule'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostsources-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'MultihostsourcesBeforeProvisioningRule', 'MultihostsourcesBeforeProvisioningRule']
---

# MultihostsourcesBeforeProvisioningRule

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
from sailpoint.multi_host_integration.models.multihostsources_before_provisioning_rule import MultihostsourcesBeforeProvisioningRule

multihostsources_before_provisioning_rule = MultihostsourcesBeforeProvisioningRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

