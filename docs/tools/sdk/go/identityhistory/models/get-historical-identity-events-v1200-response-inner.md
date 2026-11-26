# GetHistoricalIdentityEventsV1200ResponseInner

# GetHistoricalIdentityEventsV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationId** | **string** | the id of the certification item | 
**CertificationName** | **string** | the certification item name | 
**SignedDate** | Pointer to **string** | the date ceritification was signed | [optional] 
**Certifiers** | Pointer to [**[]CertifierResponse**](certifier-response) | this field is deprecated and may go away | [optional] 
**Reviewers** | Pointer to [**[]CertifierResponse**](certifier-response) | The list of identities who review this certification | [optional] 
**Signer** | Pointer to [**CertifierResponse**](certifier-response) |  | [optional] 
**EventType** | Pointer to **string** | the event type | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**AccessItem** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | 
**GovernanceEvent** | [**NullableCorrelatedGovernanceEvent**](correlated-governance-event) |  | 
**AccessItemType** | Pointer to **string** | the access item type | [optional] 
**AttributeChanges** | [**[]AttributeChange**](attribute-change) |  | 
**AccessRequest** | [**AccessRequestResponse2**](access-request-response2) |  | 
**Account** | [**AccountStatusChangedAccount**](account-status-changed-account) |  | 
**StatusChange** | [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | 

## Methods

### NewGetHistoricalIdentityEventsV1200ResponseInner

`func NewGetHistoricalIdentityEventsV1200ResponseInner(certificationId string, certificationName string, accessItem AccessItemAssociatedAccessItem, governanceEvent NullableCorrelatedGovernanceEvent, attributeChanges []AttributeChange, accessRequest AccessRequestResponse2, account AccountStatusChangedAccount, statusChange AccountStatusChangedStatusChange, ) *GetHistoricalIdentityEventsV1200ResponseInner`

NewGetHistoricalIdentityEventsV1200ResponseInner instantiates a new GetHistoricalIdentityEventsV1200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetHistoricalIdentityEventsV1200ResponseInnerWithDefaults

`func NewGetHistoricalIdentityEventsV1200ResponseInnerWithDefaults() *GetHistoricalIdentityEventsV1200ResponseInner`

NewGetHistoricalIdentityEventsV1200ResponseInnerWithDefaults instantiates a new GetHistoricalIdentityEventsV1200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificationId

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetCertificationId() string`

GetCertificationId returns the CertificationId field if non-nil, zero value otherwise.

### GetCertificationIdOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetCertificationIdOk() (*string, bool)`

GetCertificationIdOk returns a tuple with the CertificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationId

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetCertificationId(v string)`

SetCertificationId sets CertificationId field to given value.


### GetCertificationName

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetCertificationName() string`

GetCertificationName returns the CertificationName field if non-nil, zero value otherwise.

### GetCertificationNameOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetCertificationNameOk() (*string, bool)`

GetCertificationNameOk returns a tuple with the CertificationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationName

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetCertificationName(v string)`

SetCertificationName sets CertificationName field to given value.


### GetSignedDate

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetSignedDate() string`

GetSignedDate returns the SignedDate field if non-nil, zero value otherwise.

### GetSignedDateOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetSignedDateOk() (*string, bool)`

GetSignedDateOk returns a tuple with the SignedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedDate

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetSignedDate(v string)`

SetSignedDate sets SignedDate field to given value.

### HasSignedDate

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) HasSignedDate() bool`

HasSignedDate returns a boolean if a field has been set.

### GetCertifiers

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetCertifiers() []CertifierResponse`

GetCertifiers returns the Certifiers field if non-nil, zero value otherwise.

### GetCertifiersOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetCertifiersOk() (*[]CertifierResponse, bool)`

GetCertifiersOk returns a tuple with the Certifiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertifiers

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetCertifiers(v []CertifierResponse)`

SetCertifiers sets Certifiers field to given value.

### HasCertifiers

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) HasCertifiers() bool`

HasCertifiers returns a boolean if a field has been set.

### GetReviewers

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetReviewers() []CertifierResponse`

GetReviewers returns the Reviewers field if non-nil, zero value otherwise.

### GetReviewersOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetReviewersOk() (*[]CertifierResponse, bool)`

GetReviewersOk returns a tuple with the Reviewers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewers

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetReviewers(v []CertifierResponse)`

SetReviewers sets Reviewers field to given value.

### HasReviewers

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) HasReviewers() bool`

HasReviewers returns a boolean if a field has been set.

### GetSigner

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetSigner() CertifierResponse`

GetSigner returns the Signer field if non-nil, zero value otherwise.

### GetSignerOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetSignerOk() (*CertifierResponse, bool)`

GetSignerOk returns a tuple with the Signer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigner

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetSigner(v CertifierResponse)`

SetSigner sets Signer field to given value.

### HasSigner

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) HasSigner() bool`

HasSigner returns a boolean if a field has been set.

### GetEventType

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDateTime

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.

### GetIdentityId

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetAccessItem

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetAccessItem() AccessItemAssociatedAccessItem`

GetAccessItem returns the AccessItem field if non-nil, zero value otherwise.

### GetAccessItemOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetAccessItemOk() (*AccessItemAssociatedAccessItem, bool)`

GetAccessItemOk returns a tuple with the AccessItem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItem

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetAccessItem(v AccessItemAssociatedAccessItem)`

SetAccessItem sets AccessItem field to given value.


### GetGovernanceEvent

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetGovernanceEvent() CorrelatedGovernanceEvent`

GetGovernanceEvent returns the GovernanceEvent field if non-nil, zero value otherwise.

### GetGovernanceEventOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetGovernanceEventOk() (*CorrelatedGovernanceEvent, bool)`

GetGovernanceEventOk returns a tuple with the GovernanceEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceEvent

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetGovernanceEvent(v CorrelatedGovernanceEvent)`

SetGovernanceEvent sets GovernanceEvent field to given value.


### SetGovernanceEventNil

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetGovernanceEventNil(b bool)`

 SetGovernanceEventNil sets the value for GovernanceEvent to be an explicit nil

### UnsetGovernanceEvent
`func (o *GetHistoricalIdentityEventsV1200ResponseInner) UnsetGovernanceEvent()`

UnsetGovernanceEvent ensures that no value is present for GovernanceEvent, not even an explicit nil
### GetAccessItemType

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetAccessItemType() string`

GetAccessItemType returns the AccessItemType field if non-nil, zero value otherwise.

### GetAccessItemTypeOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetAccessItemTypeOk() (*string, bool)`

GetAccessItemTypeOk returns a tuple with the AccessItemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemType

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetAccessItemType(v string)`

SetAccessItemType sets AccessItemType field to given value.

### HasAccessItemType

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) HasAccessItemType() bool`

HasAccessItemType returns a boolean if a field has been set.

### GetAttributeChanges

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetAttributeChanges() []AttributeChange`

GetAttributeChanges returns the AttributeChanges field if non-nil, zero value otherwise.

### GetAttributeChangesOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetAttributeChangesOk() (*[]AttributeChange, bool)`

GetAttributeChangesOk returns a tuple with the AttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeChanges

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetAttributeChanges(v []AttributeChange)`

SetAttributeChanges sets AttributeChanges field to given value.


### GetAccessRequest

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetAccessRequest() AccessRequestResponse2`

GetAccessRequest returns the AccessRequest field if non-nil, zero value otherwise.

### GetAccessRequestOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetAccessRequestOk() (*AccessRequestResponse2, bool)`

GetAccessRequestOk returns a tuple with the AccessRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequest

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetAccessRequest(v AccessRequestResponse2)`

SetAccessRequest sets AccessRequest field to given value.


### GetAccount

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetAccount() AccountStatusChangedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetAccountOk() (*AccountStatusChangedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetAccount(v AccountStatusChangedAccount)`

SetAccount sets Account field to given value.


### GetStatusChange

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetStatusChange() AccountStatusChangedStatusChange`

GetStatusChange returns the StatusChange field if non-nil, zero value otherwise.

### GetStatusChangeOk

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) GetStatusChangeOk() (*AccountStatusChangedStatusChange, bool)`

GetStatusChangeOk returns a tuple with the StatusChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusChange

`func (o *GetHistoricalIdentityEventsV1200ResponseInner) SetStatusChange(v AccountStatusChangedStatusChange)`

SetStatusChange sets StatusChange field to given value.



