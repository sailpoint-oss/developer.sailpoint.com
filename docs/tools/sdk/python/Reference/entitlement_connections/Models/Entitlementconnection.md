---
id: entitlementconnection
title: Entitlementconnection
pagination_label: Entitlementconnection
sidebar_label: Entitlementconnection
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementconnection', 'Entitlementconnection'] 
slug: /tools/sdk/python/entitlement-connections/models/entitlementconnection
tags: ['SDK', 'Software Development Kit', 'Entitlementconnection', 'Entitlementconnection']
---

# Entitlementconnection

Entitlement connection entity returned by patch APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **str** | Tenant identifier that owns the connection. | [optional] 
**connection_id** | **str** | Entitlement connection identifier. | [optional] 
**identity_id** | **str** | Identity identifier associated with the connection. | [optional] 
**machine_identity_id** | **str** | Machine identity identifier when the connection is machine-backed. | [optional] 
**account_id** | **str** | Account identifier for the connected source account. | [optional] 
**entitlement_id** | **str** | Entitlement identifier on the source. | [optional] 
**source_id** | **str** | Source identifier that provides the account and entitlement. | [optional] 
**standalone** | **bool** | Indicates whether the connection is marked as standalone. | [optional] [default to False]
**attribute_name** | **str** | Entitlement attribute name on the source. | [optional] 
**attribute_value** | **str** | Entitlement attribute value on the source. | [optional] 
**type** |  **Enum** [  'JIT',    'STANDING',    'NA' ] | Connection type classification. | [optional] 
**state** | **str** | Current lifecycle state of the connection. | [optional] 
**state_changed** | **datetime** | Time the connection state was last updated. | [optional] 
**state_changed_by** | **str** | Identifier of the actor that last changed state. | [optional] 
**jit_activation** | **datetime** | Time JIT activation occurred. | [optional] 
**jit_provision** | **datetime** | Time provisioning completed for JIT activation. | [optional] 
**jit_deactivation** | **datetime** | Time JIT deactivation occurred. | [optional] 
**jit_deprovision** | **datetime** | Time deprovisioning completed after JIT deactivation. | [optional] 
**jit_expiration** | **datetime** | Time when JIT access expires. | [optional] 
**delete_after** | **datetime** | Time after which the connection is eligible for deletion. | [optional] 
**created** | **datetime** | Time when the connection was created. | [optional] 
**modified** | **datetime** | Time when the connection was last modified. | [optional] 
**actor_name** | **str** | Display value for the actor associated with the latest change. | [optional] 
}

## Example

```python
from sailpoint.entitlement_connections.models.entitlementconnection import Entitlementconnection

entitlementconnection = Entitlementconnection(
tenant_id='0b0d4856-4f0b-490a-a7da-3a741946e1d9',
connection_id='6c692d9972f8400ca4560a68f62c4c5f',
identity_id='35d80d89f3274418ba5748f0b3838d49',
machine_identity_id='77c4ca79c5554f09afd87d651f62af79',
account_id='17a0e011f3fc4b43a19ddf13d6b92ede',
entitlement_id='d532fa5cb15748e2873c6a01e5923ec4',
source_id='60ab87390360421f8b7d731cb1f7017b',
standalone=True,
attribute_name='memberOf',
attribute_value='CN=cloud support,OU=Automation_Users,OU=slpt-automation,DC=TestAutomationAD,DC=local',
type='JIT',
state='AVAILABLE',
state_changed='2025-10-30T15:02:12.345-05:00',
state_changed_by='c0bd1330f1c34d7989dd10dc39a1b561',
jit_activation='2025-12-03T10:15:30+01:00',
jit_provision='2025-12-03T10:15:30+01:00',
jit_deactivation='2025-12-03T10:15:30+01:00',
jit_deprovision='2025-12-03T10:15:30+01:00',
jit_expiration='2025-12-03T10:15:30+01:00',
delete_after='2026-12-03T10:15:30+01:00',
created='2025-10-29T09:00-05:00',
modified='2025-10-30T15:02:12.345-05:00',
actor_name='e29b41d4a41644679df31f96c209888a'
)

```
[[Back to top]](#) 

