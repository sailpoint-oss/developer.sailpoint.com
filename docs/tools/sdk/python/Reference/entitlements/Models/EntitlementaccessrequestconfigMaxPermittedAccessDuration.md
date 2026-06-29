---
id: entitlementaccessrequestconfig-max-permitted-access-duration
title: EntitlementaccessrequestconfigMaxPermittedAccessDuration
pagination_label: EntitlementaccessrequestconfigMaxPermittedAccessDuration
sidebar_label: EntitlementaccessrequestconfigMaxPermittedAccessDuration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementaccessrequestconfigMaxPermittedAccessDuration', 'EntitlementaccessrequestconfigMaxPermittedAccessDuration'] 
slug: /tools/sdk/python/entitlements/models/entitlementaccessrequestconfig-max-permitted-access-duration
tags: ['SDK', 'Software Development Kit', 'EntitlementaccessrequestconfigMaxPermittedAccessDuration', 'EntitlementaccessrequestconfigMaxPermittedAccessDuration']
---

# EntitlementaccessrequestconfigMaxPermittedAccessDuration

The maximum duration for which the access is permitted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **int** | The numeric value of the duration. | [optional] 
**time_unit** |  **Enum** [  'HOURS',    'DAYS',    'WEEKS',    'MONTHS' ] | The time unit for the duration. | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.entitlementaccessrequestconfig_max_permitted_access_duration import EntitlementaccessrequestconfigMaxPermittedAccessDuration

entitlementaccessrequestconfig_max_permitted_access_duration = EntitlementaccessrequestconfigMaxPermittedAccessDuration(
value=5,
time_unit='DAYS'
)

```
[[Back to top]](#) 

