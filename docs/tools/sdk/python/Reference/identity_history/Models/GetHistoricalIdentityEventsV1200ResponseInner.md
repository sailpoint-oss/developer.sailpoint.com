---
id: get-historical-identity-events-v1200-response-inner
title: GetHistoricalIdentityEventsV1200ResponseInner
pagination_label: GetHistoricalIdentityEventsV1200ResponseInner
sidebar_label: GetHistoricalIdentityEventsV1200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetHistoricalIdentityEventsV1200ResponseInner', 'GetHistoricalIdentityEventsV1200ResponseInner'] 
slug: /tools/sdk/python/identity-history/models/get-historical-identity-events-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetHistoricalIdentityEventsV1200ResponseInner', 'GetHistoricalIdentityEventsV1200ResponseInner']
---

# GetHistoricalIdentityEventsV1200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification_id** | **str** | the id of the certification item | [required]
**certification_name** | **str** | the certification item name | [required]
**signed_date** | **str** | the date ceritification was signed | [optional] 
**certifiers** | [**[]Certifierresponse**](certifierresponse) | this field is deprecated and may go away | [optional] 
**reviewers** | [**[]Certifierresponse**](certifierresponse) | The list of identities who review this certification | [optional] 
**signer** | [**Certifierresponse**](certifierresponse) |  | [optional] 
**event_type** | **str** | the event type | [optional] 
**date_time** | **str** | the date of event | [optional] 
**identity_id** | **str** | the identity id | [optional] 
**access_item** | [**AccessitemassociatedAccessItem**](accessitemassociated-access-item) |  | [required]
**governance_event** | [**Correlatedgovernanceevent**](correlatedgovernanceevent) |  | [required]
**access_item_type** |  **Enum** [  'account',    'app',    'entitlement',    'role',    'accessProfile' ] | the access item type | [optional] 
**attribute_changes** | [**[]Attributechange**](attributechange) |  | [required]
**access_request** | [**Accessrequestresponse2**](accessrequestresponse2) |  | [required]
**account** | [**AccountstatuschangedAccount**](accountstatuschanged-account) |  | [required]
**status_change** | [**AccountstatuschangedStatusChange**](accountstatuschanged-status-change) |  | [required]
}

## Example

```python
from sailpoint.identity_history.models.get_historical_identity_events_v1200_response_inner import GetHistoricalIdentityEventsV1200ResponseInner

get_historical_identity_events_v1200_response_inner = GetHistoricalIdentityEventsV1200ResponseInner(
certification_id='2c91808a77ff216301782327a50f09bf',
certification_name='Cert name',
signed_date='2019-03-08T22:37:33.901Z',
certifiers=[{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}],
reviewers=[{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}],
signer=sailpoint.identity_history.models.certifier_response.Certifier Response(
                    id = '8a80828f643d484f01643e14202e206f', 
                    display_name = 'John Snow', ),
event_type='AccountStatusChanged',
date_time='2019-03-08T22:37:33.901Z',
identity_id='8a80828f643d484f01643e14202e206f',
access_item={"id":"8c190e6787aa4ed9a90bd9d5344523fb","accessType":"account","nativeIdentity":127999,"sourceName":"JDBC Entitlements Source","entitlementCount":0,"displayName":"Sample Name"},
governance_event=sailpoint.identity_history.models.correlated_governance_event.Correlated Governance Event(
                    name = 'Manager Certification for Jon Snow', 
                    date_time = '2019-03-08T22:37:33.901Z', 
                    type = 'certification', 
                    governance_id = '2c91808a77ff216301782327a50f09bf', 
                    owners = [{"id":"8a80828f643d484f01643e14202e206f","displayName":"John Snow"}], 
                    reviewers = [{"id":"8a80828f643d484f01643e14202e206f","displayName":"John Snow"}], 
                    decision_maker = sailpoint.identity_history.models.certifier_response.Certifier Response(
                        id = '8a80828f643d484f01643e14202e206f', 
                        display_name = 'John Snow', ), ),
access_item_type='account',
attribute_changes=[
                    sailpoint.identity_history.models.attribute_change.Attribute Change(
                        name = 'firstname', 
                        previous_value = 'adam', 
                        new_value = 'zampa', )
                    ],
access_request=sailpoint.identity_history.models.access_request_response.Access Request Response(
                    requester_id = '2c91808a77ff216301782327a50f09bf', 
                    requester_name = 'Bing C', 
                    items = [{"operation":"Add","accessItemType":"role","name":"Role-1","decision":"APPROVED","description":"The role descrition","sourceId":"8a80828f643d484f01643e14202e206f","sourceName":"Source1","approvalInfos":[{"name":"John Snow","id":"8a80828f643d484f01643e14202e2000","status":"Approved"}]}], ),
account=sailpoint.identity_history.models.accountstatuschanged_account.accountstatuschanged_account(
                    id = '2c91808a77ff216301782327a50f09bf', 
                    native_identity = 'dr.arden.ogahn.d', 
                    display_name = 'Adam Archer', 
                    source_id = '8a80828f643d484f01643e14202e206f', 
                    source_name = 'JDBC Entitlements Source', 
                    entitlement_count = 2, 
                    access_type = 'account', ),
status_change=sailpoint.identity_history.models.accountstatuschanged_status_change.accountstatuschanged_statusChange(
                    previous_status = 'enabled', 
                    new_status = 'disabled', )
)

```
[[Back to top]](#) 

