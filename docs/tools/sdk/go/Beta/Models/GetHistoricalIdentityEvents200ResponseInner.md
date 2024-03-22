---
id: get-historical-identity-events200-response-inner
title: GetHistoricalIdentityEvents200ResponseInner
pagination_label: GetHistoricalIdentityEvents200ResponseInner
sidebar_label: GetHistoricalIdentityEvents200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'GetHistoricalIdentityEvents200ResponseInner'] 
slug: /tools/sdk/go/beta/models/get-historical-identity-events200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetHistoricalIdentityEvents200ResponseInner']
---

# GetHistoricalIdentityEvents200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItem** |  Pointer to [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [optional] 
**IdentityId** |  Pointer to **string** | the identity id | [optional] 
**EventType** |  Pointer to **string** | the event type | [optional] 
**Dt** |  Pointer to **string** | the date of event | [optional] 
**GovernanceEvent** |  Pointer to [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [optional] 
**Changes** |  Pointer to [**[]AttributeChange**](attribute-change) |  | [optional] 
**AccessRequest** |  Pointer to [**AccessRequestResponse**](access-request-response) |  | [optional] 
**CertificationId** |  Pointer to **string** | the id of the certification item | [optional] 
**CertificationName** |  Pointer to **string** | the certification item name | [optional] 
**SignedDate** |  Pointer to **string** | the date ceritification was signed | [optional] 
**Certifiers** |  Pointer to [**[]CertifierResponse**](certifier-response) | this field is deprecated and may go away | [optional] 
**Reviewers** |  Pointer to [**[]CertifierResponse**](certifier-response) | The list of identities who review this certification | [optional] 
**Signer** |  Pointer to [**CertifierResponse**](certifier-response) |  | [optional] 
**Account** |  Pointer to [**AccountStatusChangedAccount**](account-status-changed-account) |  | [optional] 
**StatusChange** |  Pointer to [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | [optional] 

## Methods

### NewGetHistoricalIdentityEvents200ResponseInner

`func NewGetHistoricalIdentityEvents200ResponseInner() *GetHistoricalIdentityEvents200ResponseInner`

NewGetHistoricalIdentityEvents200ResponseInner instantiates a new GetHistoricalIdentityEvents200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetHistoricalIdentityEvents200ResponseInnerWithDefaults

`func NewGetHistoricalIdentityEvents200ResponseInnerWithDefaults() *GetHistoricalIdentityEvents200ResponseInner`

NewGetHistoricalIdentityEvents200ResponseInnerWithDefaults instantiates a new GetHistoricalIdentityEvents200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessItem

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetAccessItem() AccessItemAssociatedAccessItem`

GetAccessItem returns the AccessItem field if non-nil, zero value otherwise.

### GetAccessItemOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetAccessItemOk() (*AccessItemAssociatedAccessItem, bool)`

GetAccessItemOk returns a tuple with the AccessItem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItem

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetAccessItem(v AccessItemAssociatedAccessItem)`

SetAccessItem sets AccessItem field to given value.

### HasAccessItem

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasAccessItem() bool`

HasAccessItem returns a boolean if a field has been set.

### GetIdentityId

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEventType

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDt

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetDt() string`

GetDt returns the Dt field if non-nil, zero value otherwise.

### GetDtOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetDtOk() (*string, bool)`

GetDtOk returns a tuple with the Dt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDt

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetDt(v string)`

SetDt sets Dt field to given value.

### HasDt

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasDt() bool`

HasDt returns a boolean if a field has been set.

### GetGovernanceEvent

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetGovernanceEvent() CorrelatedGovernanceEvent`

GetGovernanceEvent returns the GovernanceEvent field if non-nil, zero value otherwise.

### GetGovernanceEventOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetGovernanceEventOk() (*CorrelatedGovernanceEvent, bool)`

GetGovernanceEventOk returns a tuple with the GovernanceEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceEvent

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetGovernanceEvent(v CorrelatedGovernanceEvent)`

SetGovernanceEvent sets GovernanceEvent field to given value.

### HasGovernanceEvent

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasGovernanceEvent() bool`

HasGovernanceEvent returns a boolean if a field has been set.

### GetChanges

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetChanges() []AttributeChange`

GetChanges returns the Changes field if non-nil, zero value otherwise.

### GetChangesOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetChangesOk() (*[]AttributeChange, bool)`

GetChangesOk returns a tuple with the Changes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanges

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetChanges(v []AttributeChange)`

SetChanges sets Changes field to given value.

### HasChanges

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasChanges() bool`

HasChanges returns a boolean if a field has been set.

### GetAccessRequest

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetAccessRequest() AccessRequestResponse`

GetAccessRequest returns the AccessRequest field if non-nil, zero value otherwise.

### GetAccessRequestOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetAccessRequestOk() (*AccessRequestResponse, bool)`

GetAccessRequestOk returns a tuple with the AccessRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequest

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetAccessRequest(v AccessRequestResponse)`

SetAccessRequest sets AccessRequest field to given value.

### HasAccessRequest

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasAccessRequest() bool`

HasAccessRequest returns a boolean if a field has been set.

### GetCertificationId

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetCertificationId() string`

GetCertificationId returns the CertificationId field if non-nil, zero value otherwise.

### GetCertificationIdOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetCertificationIdOk() (*string, bool)`

GetCertificationIdOk returns a tuple with the CertificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationId

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetCertificationId(v string)`

SetCertificationId sets CertificationId field to given value.

### HasCertificationId

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasCertificationId() bool`

HasCertificationId returns a boolean if a field has been set.

### GetCertificationName

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetCertificationName() string`

GetCertificationName returns the CertificationName field if non-nil, zero value otherwise.

### GetCertificationNameOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetCertificationNameOk() (*string, bool)`

GetCertificationNameOk returns a tuple with the CertificationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationName

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetCertificationName(v string)`

SetCertificationName sets CertificationName field to given value.

### HasCertificationName

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasCertificationName() bool`

HasCertificationName returns a boolean if a field has been set.

### GetSignedDate

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetSignedDate() string`

GetSignedDate returns the SignedDate field if non-nil, zero value otherwise.

### GetSignedDateOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetSignedDateOk() (*string, bool)`

GetSignedDateOk returns a tuple with the SignedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedDate

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetSignedDate(v string)`

SetSignedDate sets SignedDate field to given value.

### HasSignedDate

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasSignedDate() bool`

HasSignedDate returns a boolean if a field has been set.

### GetCertifiers

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetCertifiers() []CertifierResponse`

GetCertifiers returns the Certifiers field if non-nil, zero value otherwise.

### GetCertifiersOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetCertifiersOk() (*[]CertifierResponse, bool)`

GetCertifiersOk returns a tuple with the Certifiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertifiers

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetCertifiers(v []CertifierResponse)`

SetCertifiers sets Certifiers field to given value.

### HasCertifiers

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasCertifiers() bool`

HasCertifiers returns a boolean if a field has been set.

### GetReviewers

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetReviewers() []CertifierResponse`

GetReviewers returns the Reviewers field if non-nil, zero value otherwise.

### GetReviewersOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetReviewersOk() (*[]CertifierResponse, bool)`

GetReviewersOk returns a tuple with the Reviewers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewers

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetReviewers(v []CertifierResponse)`

SetReviewers sets Reviewers field to given value.

### HasReviewers

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasReviewers() bool`

HasReviewers returns a boolean if a field has been set.

### GetSigner

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetSigner() CertifierResponse`

GetSigner returns the Signer field if non-nil, zero value otherwise.

### GetSignerOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetSignerOk() (*CertifierResponse, bool)`

GetSignerOk returns a tuple with the Signer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigner

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetSigner(v CertifierResponse)`

SetSigner sets Signer field to given value.

### HasSigner

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasSigner() bool`

HasSigner returns a boolean if a field has been set.

### GetAccount

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetAccount() AccountStatusChangedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetAccountOk() (*AccountStatusChangedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetAccount(v AccountStatusChangedAccount)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetStatusChange

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetStatusChange() AccountStatusChangedStatusChange`

GetStatusChange returns the StatusChange field if non-nil, zero value otherwise.

### GetStatusChangeOk

`func (o *GetHistoricalIdentityEvents200ResponseInner) GetStatusChangeOk() (*AccountStatusChangedStatusChange, bool)`

GetStatusChangeOk returns a tuple with the StatusChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusChange

`func (o *GetHistoricalIdentityEvents200ResponseInner) SetStatusChange(v AccountStatusChangedStatusChange)`

SetStatusChange sets StatusChange field to given value.

### HasStatusChange

`func (o *GetHistoricalIdentityEvents200ResponseInner) HasStatusChange() bool`

HasStatusChange returns a boolean if a field has been set.


[[Back to top]](#) 


