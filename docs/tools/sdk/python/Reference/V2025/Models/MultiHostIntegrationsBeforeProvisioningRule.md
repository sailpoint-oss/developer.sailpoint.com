---
id: v2025-multi-host-integrations-before-provisioning-rule
title: MultiHostIntegrationsBeforeProvisioningRule
pagination_label: MultiHostIntegrationsBeforeProvisioningRule
sidebar_label: MultiHostIntegrationsBeforeProvisioningRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrationsBeforeProvisioningRule', 'V2025MultiHostIntegrationsBeforeProvisioningRule'] 
slug: /tools/sdk/python/v2025/models/multi-host-integrations-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsBeforeProvisioningRule', 'V2025MultiHostIntegrationsBeforeProvisioningRule']
---

# MultiHostIntegrationsBeforeProvisioningRule

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
from sailpoint.v2025.models.multi_host_integrations_before_provisioning_rule import MultiHostIntegrationsBeforeProvisioningRule

multi_host_integrations_before_provisioning_rule = MultiHostIntegrationsBeforeProvisioningRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

