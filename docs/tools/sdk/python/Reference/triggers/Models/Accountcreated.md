---
id: accountcreated
title: Accountcreated
pagination_label: Accountcreated
sidebar_label: Accountcreated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountcreated', 'Accountcreated'] 
slug: /tools/sdk/python/triggers/models/accountcreated
tags: ['SDK', 'Software Development Kit', 'Accountcreated', 'Accountcreated']
---

# Accountcreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**AccountcreatedEvent**](accountcreated-event) |  | [required]
**source** | [**Accountsourcereference**](accountsourcereference) |  | [required]
**account** | [**Accountv2**](accountv2) |  | [required]
**identity** | [**Identityreference2**](identityreference2) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.accountcreated import Accountcreated

accountcreated = Accountcreated(
event=sailpoint.triggers.models.accountcreated_event.accountcreated_event(
                    type = 'ACCOUNT_CREATED_V2', 
                    cause = 'AGGREGATION', ),
source=sailpoint.triggers.models.accountsourcereference.accountsourcereference(
                    id = '2c918082814e693601816e09471b29b6', 
                    name = 'Active Directory', 
                    alias = 'AD', 
                    owner = sailpoint.triggers.models.accountsourcereference_owner.accountsourcereference_owner(
                        id = 'owner-123', 
                        name = 'owner-name', ), 
                    governance_group = sailpoint.triggers.models.accountsourcereference_governance_group.accountsourcereference_governanceGroup(
                        id = 'group-456', 
                        name = 'governance-group-name', ), ),
account=sailpoint.triggers.models.accountv2.accountv2(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    name = 'john.doe', 
                    native_identity = 'CN=John Doe,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                    uuid = 'b7264868-7201-415f-9118-b581d431c688', 
                    correlated = True, 
                    is_machine = False, 
                    origin = 'Active Directory', 
                    attributes = {"firstname":"John","lastname":"Doe"}, ),
identity=sailpoint.triggers.models.identityreference_2.identityreference-2(
                    id = 'ee769173319b41d19ccec6c235423237b', 
                    name = 'john.doe', 
                    alias = 'jdoe', 
                    email = 'john.doe@email.com', )
)

```
[[Back to top]](#) 

