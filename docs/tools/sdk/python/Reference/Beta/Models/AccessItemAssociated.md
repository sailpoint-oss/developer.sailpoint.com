---
id: beta-access-item-associated
title: AccessItemAssociated
pagination_label: AccessItemAssociated
sidebar_label: AccessItemAssociated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemAssociated', 'BetaAccessItemAssociated'] 
slug: /tools/sdk/python/beta/models/access-item-associated
tags: ['SDK', 'Software Development Kit', 'AccessItemAssociated', 'BetaAccessItemAssociated']
---

# AccessItemAssociated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** | **str** | the event type | [optional] 
**date_time** | **str** | the date of event | [optional] 
**identity_id** | **str** | the identity id | [optional] 
**access_item** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [required]
**governance_event** | [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [required]
**access_item_type** |  **Enum** [  'account',    'app',    'entitlement',    'role',    'accessProfile' ] | the access item type | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_item_associated import AccessItemAssociated

access_item_associated = AccessItemAssociated(
event_type='AccessItemAssociated',
date_time='2019-03-08T22:37:33.901Z',
identity_id='8c190e6787aa4ed9a90bd9d5344523fb',
access_item={id=8c190e6787aa4ed9a90bd9d5344523fb, accessType=account, nativeIdentity=127999, sourceName=JDBC Entitlements Source, entitlementCount=0, displayName=Sample Name},
governance_event=sailpoint.beta.models.correlated_governance_event.Correlated Governance Event(
                    name = 'Manager Certification for Jon Snow', 
                    date_time = '2019-03-08T22:37:33.901Z', 
                    type = 'certification', 
                    governance_id = '2c91808a77ff216301782327a50f09bf', 
                    owners = [{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}], 
                    reviewers = [{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}], 
                    decision_maker = sailpoint.beta.models.certifier_response.Certifier Response(
                        id = '8a80828f643d484f01643e14202e206f', 
                        display_name = 'John Snow', ), ),
access_item_type='account'
)

```
[[Back to top]](#) 

