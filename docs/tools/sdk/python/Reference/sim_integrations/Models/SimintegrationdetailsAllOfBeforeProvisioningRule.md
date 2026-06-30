---
id: simintegrationdetails-all-of-before-provisioning-rule
title: SimintegrationdetailsAllOfBeforeProvisioningRule
pagination_label: SimintegrationdetailsAllOfBeforeProvisioningRule
sidebar_label: SimintegrationdetailsAllOfBeforeProvisioningRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SimintegrationdetailsAllOfBeforeProvisioningRule', 'SimintegrationdetailsAllOfBeforeProvisioningRule'] 
slug: /tools/sdk/python/sim-integrations/models/simintegrationdetails-all-of-before-provisioning-rule
tags: ['SDK', 'Software Development Kit', 'SimintegrationdetailsAllOfBeforeProvisioningRule', 'SimintegrationdetailsAllOfBeforeProvisioningRule']
---

# SimintegrationdetailsAllOfBeforeProvisioningRule

Before provisioning rule of integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | ID of the rule | [optional] 
**name** | **str** | Human-readable display name of the rule | [optional] 
}

## Example

```python
from sailpoint.sim_integrations.models.simintegrationdetails_all_of_before_provisioning_rule import SimintegrationdetailsAllOfBeforeProvisioningRule

simintegrationdetails_all_of_before_provisioning_rule = SimintegrationdetailsAllOfBeforeProvisioningRule(
type='IDENTITY',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

