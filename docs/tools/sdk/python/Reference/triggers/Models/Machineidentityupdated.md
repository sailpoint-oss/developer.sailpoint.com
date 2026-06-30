---
id: machineidentityupdated
title: Machineidentityupdated
pagination_label: Machineidentityupdated
sidebar_label: Machineidentityupdated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineidentityupdated', 'Machineidentityupdated'] 
slug: /tools/sdk/python/triggers/models/machineidentityupdated
tags: ['SDK', 'Software Development Kit', 'Machineidentityupdated', 'Machineidentityupdated']
---

# Machineidentityupdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** |  **Enum** [  'MACHINE_IDENTITY_UPDATED' ] | Type of the event. | [required]
**machine_identity** | [**MachineidentityupdatedMachineIdentity**](machineidentityupdated-machine-identity) |  | [required]
**machine_identity_change_types** | **[]str** | Types of changes that occurred to the machine identity. | [required]
**user_entitlement_changes** | [**MachineidentityupdatedUserEntitlementChanges**](machineidentityupdated-user-entitlement-changes) |  | [required]
**owner_changes** | [**MachineidentityupdatedOwnerChanges**](machineidentityupdated-owner-changes) |  | [required]
**single_value_attribute_changes** | [**[]MachineidentityupdatedSingleValueAttributeChangesInner**](machineidentityupdated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred. | [required]
}

## Example

```python
from sailpoint.triggers.models.machineidentityupdated import Machineidentityupdated

machineidentityupdated = Machineidentityupdated(
event_type='MACHINE_IDENTITY_UPDATED',
machine_identity=sailpoint.triggers.models.machineidentityupdated_machine_identity.machineidentityupdated_machineIdentity(
                    id = '8cd6c945-0057-4a6e-ad65-9cbf3b3c71b6', 
                    name = 'test', 
                    created = '2025-08-08T12:42:21.491666Z', 
                    modified = '2025-09-01T06:36:54.401476Z', 
                    business_application = 'MyBusinessApplication2', 
                    description = 'test description event', 
                    attributes = {"botUserId":"005KV00000BLoMCYA1"}, 
                    subtype = 'AI Agent', 
                    owners = [
                        {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                        ], 
                    source_id = 'c0201251a6ce4d268aba536cdd60a7f2', 
                    uuid = 'f5dd23fe-3414-42b7-bb1c-869400ad7a10', 
                    native_identity = 'abc:123:dddd1', 
                    manually_edited = True, 
                    manually_created = True, 
                    dataset_id = 'agentforce:agents', 
                    source = {"type":"SOURCE","id":"c0201251a6ce4d268aba536cdd60a7f2","name":"IdentityNow"}, 
                    user_entitlements = [
                        {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                        ], 
                    exists_on_source = 'NOT_APPLICABLE', ),
machine_identity_change_types=["ATTRIBUTES_CHANGED","USER_ENTITLEMENTS_ADDED","USER_ENTITLEMENTS_REMOVED","OWNERS_ADDED","OWNERS_REMOVED"],
user_entitlement_changes=sailpoint.triggers.models.machineidentityupdated_user_entitlement_changes.machineidentityupdated_userEntitlementChanges(
                    attribute_name = 'userEntitlements', 
                    added = [
                        {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                        ], 
                    removed = [
                        {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                        ], ),
owner_changes=sailpoint.triggers.models.machineidentityupdated_owner_changes.machineidentityupdated_ownerChanges(
                    attribute_name = 'owners', 
                    added = [
                        {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                        ], 
                    removed = [
                        {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                        ], ),
single_value_attribute_changes=[
                    sailpoint.triggers.models.machineidentityupdated_single_value_attribute_changes_inner.machineidentityupdated_singleValueAttributeChanges_inner(
                        name = 'displayName', 
                        old_value = John Doe, 
                        new_value = John A. Doe, )
                    ]
)

```
[[Back to top]](#) 

