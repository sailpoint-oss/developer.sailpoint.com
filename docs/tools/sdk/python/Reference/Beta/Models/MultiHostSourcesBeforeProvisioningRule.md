---
id: beta-multi-host-sources-before-provisioning-rule
title: MultiHostSourcesBeforeProvisioningRule
pagination_label: MultiHostSourcesBeforeProvisioningRule
sidebar_label: MultiHostSourcesBeforeProvisioningRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostSourcesBeforeProvisioningRule', 'BetaMultiHostSourcesBeforeProvisioningRule'] 
slug: /tools/sdk/python/beta/models/multi-host-sources-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesBeforeProvisioningRule', 'BetaMultiHostSourcesBeforeProvisioningRule']
---

# MultiHostSourcesBeforeProvisioningRule

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
from sailpoint.beta.models.multi_host_sources_before_provisioning_rule import MultiHostSourcesBeforeProvisioningRule

multi_host_sources_before_provisioning_rule = MultiHostSourcesBeforeProvisioningRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

