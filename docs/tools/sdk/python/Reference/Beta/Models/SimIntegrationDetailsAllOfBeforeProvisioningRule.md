---
id: beta-sim-integration-details-all-of-before-provisioning-rule
title: SimIntegrationDetailsAllOfBeforeProvisioningRule
pagination_label: SimIntegrationDetailsAllOfBeforeProvisioningRule
sidebar_label: SimIntegrationDetailsAllOfBeforeProvisioningRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SimIntegrationDetailsAllOfBeforeProvisioningRule', 'BetaSimIntegrationDetailsAllOfBeforeProvisioningRule'] 
slug: /tools/sdk/python/beta/models/sim-integration-details-all-of-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'SimIntegrationDetailsAllOfBeforeProvisioningRule', 'BetaSimIntegrationDetailsAllOfBeforeProvisioningRule']
---

# SimIntegrationDetailsAllOfBeforeProvisioningRule

Before provisioning rule of integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DtoType**](dto-type) |  | [optional] 
**id** | **str** | ID of the rule | [optional] 
**name** | **str** | Human-readable display name of the rule | [optional] 
}

## Example

```python
from sailpoint.beta.models.sim_integration_details_all_of_before_provisioning_rule import SimIntegrationDetailsAllOfBeforeProvisioningRule

sim_integration_details_all_of_before_provisioning_rule = SimIntegrationDetailsAllOfBeforeProvisioningRule(
type='IDENTITY',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

