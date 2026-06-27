---
id: multihostintegrations-before-provisioning-rule
title: MultihostintegrationsBeforeProvisioningRule
pagination_label: MultihostintegrationsBeforeProvisioningRule
sidebar_label: MultihostintegrationsBeforeProvisioningRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsBeforeProvisioningRule', 'MultihostintegrationsBeforeProvisioningRule'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsBeforeProvisioningRule', 'MultihostintegrationsBeforeProvisioningRule']
---

# MultihostintegrationsBeforeProvisioningRule

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
from sailpoint.multi_host_integration.models.multihostintegrations_before_provisioning_rule import MultihostintegrationsBeforeProvisioningRule

multihostintegrations_before_provisioning_rule = MultihostintegrationsBeforeProvisioningRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

