---
id: beta-get-historical-identity-events200-response-inner
title: GetHistoricalIdentityEvents200ResponseInner
pagination_label: GetHistoricalIdentityEvents200ResponseInner
sidebar_label: GetHistoricalIdentityEvents200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetHistoricalIdentityEvents200ResponseInner', 'BetaGetHistoricalIdentityEvents200ResponseInner'] 
slug: /tools/sdk/python/beta/models/get-historical-identity-events200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetHistoricalIdentityEvents200ResponseInner', 'BetaGetHistoricalIdentityEvents200ResponseInner']
---

# GetHistoricalIdentityEvents200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_item** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [optional] 
**identity_id** | **str** | the identity id | [optional] 
**event_type** | **str** | the event type | [optional] 
**dt** | **str** | the date of event | [optional] 
**governance_event** | [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [optional] 
**changes** | [**[]AttributeChange**](attribute-change) |  | [optional] 
**access_request** | [**AccessRequestResponse1**](access-request-response1) |  | [optional] 
**certification_id** | **str** | the id of the certification item | [optional] 
**certification_name** | **str** | the certification item name | [optional] 
**signed_date** | **str** | the date ceritification was signed | [optional] 
**certifiers** | [**[]CertifierResponse**](certifier-response) | this field is deprecated and may go away | [optional] 
**reviewers** | [**[]CertifierResponse**](certifier-response) | The list of identities who review this certification | [optional] 
**signer** | [**CertifierResponse**](certifier-response) |  | [optional] 
**account** | [**AccountStatusChangedAccount**](account-status-changed-account) |  | [optional] 
**status_change** | [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.get_historical_identity_events200_response_inner import GetHistoricalIdentityEvents200ResponseInner

get_historical_identity_events200_response_inner = GetHistoricalIdentityEvents200ResponseInner(
access_item={id=8c190e6787aa4ed9a90bd9d5344523fb, accessType=account, nativeIdentity=127999, sourceName=JDBC Entitlements Source, entitlementCount=0, displayName=Sample Name},
identity_id='',
event_type='',
dt='',
governance_event=sailpoint.beta.models.correlated_governance_event.CorrelatedGovernanceEvent(
                    name = 'Manager Certification for Jon Snow', 
                    dt = '2019-03-08T22:37:33.901Z', 
                    type = 'certification', 
                    governance_id = '2c91808a77ff216301782327a50f09bf', 
                    owners = [{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}], 
                    reviewers = [{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}], 
                    decision_maker = sailpoint.beta.models.certifier_response.CertifierResponse(
                        id = '8a80828f643d484f01643e14202e206f', 
                        display_name = 'John Snow', ), ),
changes=[
                    {name=firstname, previousValue=adam, newValue=zampa}
                    ],
access_request=sailpoint.beta.models.access_request_response_1.AccessRequestResponse_1(
                    requester_id = '2c91808a77ff216301782327a50f09bf', 
                    requester_name = 'Bing C', 
                    items = [{operation=Add, accessItemType=role, name=Role-1, decision=APPROVED, description=The role descrition, sourceId=8a80828f643d484f01643e14202e206f, sourceName=Source1, approvalInfos=[{name=John Snow, id=8a80828f643d484f01643e14202e2000, status=Approved}]}], ),
certification_id='2c91808a77ff216301782327a50f09bf',
certification_name='Cert name',
signed_date='2019-03-08T22:37:33.901Z',
certifiers=[{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}],
reviewers=[{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}],
signer=sailpoint.beta.models.certifier_response.CertifierResponse(
                    id = '8a80828f643d484f01643e14202e206f', 
                    display_name = 'John Snow', ),
account=sailpoint.beta.models.account_status_changed_account.AccountStatusChanged_account(
                    id = '', 
                    native_identity = '', 
                    display_name = '', 
                    source_id = '', 
                    source_name = '', 
                    entitlement_count = 56, 
                    access_type = '', ),
status_change=sailpoint.beta.models.account_status_changed_status_change.AccountStatusChanged_statusChange(
                    previous_status = 'enabled', 
                    new_status = 'enabled', )
)

```
[[Back to top]](#) 

