---
id: beta-access-item-removed
title: AccessItemRemoved
pagination_label: AccessItemRemoved
sidebar_label: AccessItemRemoved
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemRemoved', 'BetaAccessItemRemoved'] 
slug: /tools/sdk/python/beta/models/access-item-removed
tags: ['SDK', 'Software Development Kit', 'AccessItemRemoved', 'BetaAccessItemRemoved']
---

# AccessItemRemoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_item** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [required]
**identity_id** | **str** | the identity id | [optional] 
**event_type** | **str** | the event type | [optional] 
**date_time** | **str** | the date of event | [optional] 
**access_item_type** |  **Enum** [  'account',    'app',    'entitlement',    'role',    'accessProfile' ] | the access item type | [optional] 
**governance_event** | [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_item_removed import AccessItemRemoved

access_item_removed = AccessItemRemoved(
access_item={id=8c190e6787aa4ed9a90bd9d5344523fb, accessType=account, nativeIdentity=127999, sourceName=JDBC Entitlements Source, entitlementCount=0, displayName=Sample Name},
identity_id='8c190e6787aa4ed9a90bd9d5344523fb',
event_type='AccessItemRemoved',
date_time='2019-03-08T22:37:33.901Z',
access_item_type='account',
governance_event=sailpoint.beta.models.correlated_governance_event.CorrelatedGovernanceEvent(
                    name = 'Manager Certification for Jon Snow', 
                    date_time = '2019-03-08T22:37:33.901Z', 
                    type = 'certification', 
                    governance_id = '2c91808a77ff216301782327a50f09bf', 
                    owners = [{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}], 
                    reviewers = [{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}], 
                    decision_maker = sailpoint.beta.models.certifier_response.CertifierResponse(
                        id = '8a80828f643d484f01643e14202e206f', 
                        display_name = 'John Snow', ), )
)

```
[[Back to top]](#) 

