---
id: before-provisioning-rule-dto
title: BeforeProvisioningRuleDto
pagination_label: BeforeProvisioningRuleDto
sidebar_label: BeforeProvisioningRuleDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BeforeProvisioningRuleDto', 'BeforeProvisioningRuleDto'] 
slug: /tools/sdk/python/v3/models/before-provisioning-rule-dto
tags: ['SDK', 'Software Development Kit', 'BeforeProvisioningRuleDto', 'BeforeProvisioningRuleDto']
---

# BeforeProvisioningRuleDto

Before Provisioning Rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'RULE' ] | Before Provisioning Rule DTO type. | [optional] 
**id** | **str** | Before Provisioning Rule ID. | [optional] 
**name** | **str** | Rule display name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.before_provisioning_rule_dto import BeforeProvisioningRuleDto

before_provisioning_rule_dto = BeforeProvisioningRuleDto(
type='RULE',
id='048eb3d55c5a4758bd07dccb87741c78',
name='Before Provisioning Airtable Rule'
)

```
[[Back to top]](#) 

