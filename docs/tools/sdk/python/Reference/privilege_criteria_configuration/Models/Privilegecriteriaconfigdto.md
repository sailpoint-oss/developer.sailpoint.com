---
id: privilegecriteriaconfigdto
title: Privilegecriteriaconfigdto
pagination_label: Privilegecriteriaconfigdto
sidebar_label: Privilegecriteriaconfigdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Privilegecriteriaconfigdto', 'Privilegecriteriaconfigdto'] 
slug: /tools/sdk/python/privilege-criteria-configuration/models/privilegecriteriaconfigdto
tags: ['SDK', 'Software Development Kit', 'Privilegecriteriaconfigdto', 'Privilegecriteriaconfigdto']
---

# Privilegecriteriaconfigdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Id of the task which is executing the bulk update. | [optional] 
**source_id** | **str** | The Id of the source that the criteria configuration is applied to. | [optional] 
**config** | **object** | The configuration settings for privilege criteria evaluation.  | [optional] 
**created** | **str** | The date and time when the privilege criteria configuration was created. | [optional] 
**modified** | **str** | The date and time when the privilege criteria configuration was last modified. | [optional] 
}

## Example

```python
from sailpoint.privilege_criteria_configuration.models.privilegecriteriaconfigdto import Privilegecriteriaconfigdto

privilegecriteriaconfigdto = Privilegecriteriaconfigdto(
id='2c9180867817ac4d017817c491119a20',
source_id='c42c45d8d7c04d2da64d215cd8c32f21',
config={"globalPrivilegeLevelEnabled":true,"privilegeClassificationMode":"SINGLE_PRIVILEGE_LEVEL","singlePrivilegeLevel.privilegeLevel":"HIGH","criteriaPrivilegeLevel.connectorHighEnabled":true,"criteriaPrivilegeLevel.connectorMediumEnabled":true,"criteriaPrivilegeLevel.connectorLowEnabled":true,"criteriaPrivilegeLevel.customHighEnabled":true,"criteriaPrivilegeLevel.customMediumEnabled":true,"criteriaPrivilegeLevel.customLowEnabled":true},
created='2024-01-10T12:00:00Z',
modified='2024-01-15T12:00:00Z'
)

```
[[Back to top]](#) 

