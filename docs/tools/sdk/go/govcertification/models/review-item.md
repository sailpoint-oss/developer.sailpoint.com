# ReviewItem

# ReviewItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The review item's ID | [optional] 
**Type** | Pointer to **CertificationItemType** |  | [optional] 
**Completed** | Pointer to **bool** | Indicates whether the review item is complete | [optional] [default to false]
**NewAccess** | Pointer to **bool** | Indicates whether the review item is for new access to a source | [optional] [default to false]
**Decision** | Pointer to **CertificationDecision** |  | [optional] 
**ProposedEndDate** | Pointer to **SailPointTime** | The end date proposed as part of decision to sunset a user's access | [optional] 
**Comments** | Pointer to **string** | Comments for this review item | [optional] 
**ReviewData** | Pointer to [**ReviewData**](review-data) |  | [optional] 
**CertificationSubjectSummary** | Pointer to [**CertificationSubjectSummary**](certification-subject-summary) |  | [optional] 
**Actor** | Pointer to [**IdentityReference**](identity-reference) |  | [optional] 
**AccountName** | Pointer to **string** | The name of the account to which this access profile belongs | [optional] 
**SourceName** | Pointer to **string** | The name of the source for which this access profile belongs | [optional] 
**ReauthRequired** | Pointer to **bool** | Indicates whether the review item requires a reauthentication for the approver | [optional] [default to false]

## Methods

### NewReviewItem

`func NewReviewItem() *ReviewItem`

NewReviewItem instantiates a new ReviewItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewItemWithDefaults

`func NewReviewItemWithDefaults() *ReviewItem`

NewReviewItemWithDefaults instantiates a new ReviewItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReviewItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReviewItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReviewItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReviewItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *ReviewItem) GetType() CertificationItemType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReviewItem) GetTypeOk() (*CertificationItemType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReviewItem) SetType(v CertificationItemType)`

SetType sets Type field to given value.

### HasType

`func (o *ReviewItem) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCompleted

`func (o *ReviewItem) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *ReviewItem) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *ReviewItem) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *ReviewItem) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetNewAccess

`func (o *ReviewItem) GetNewAccess() bool`

GetNewAccess returns the NewAccess field if non-nil, zero value otherwise.

### GetNewAccessOk

`func (o *ReviewItem) GetNewAccessOk() (*bool, bool)`

GetNewAccessOk returns a tuple with the NewAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewAccess

`func (o *ReviewItem) SetNewAccess(v bool)`

SetNewAccess sets NewAccess field to given value.

### HasNewAccess

`func (o *ReviewItem) HasNewAccess() bool`

HasNewAccess returns a boolean if a field has been set.

### GetDecision

`func (o *ReviewItem) GetDecision() CertificationDecision`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *ReviewItem) GetDecisionOk() (*CertificationDecision, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *ReviewItem) SetDecision(v CertificationDecision)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *ReviewItem) HasDecision() bool`

HasDecision returns a boolean if a field has been set.

### GetProposedEndDate

`func (o *ReviewItem) GetProposedEndDate() SailPointTime`

GetProposedEndDate returns the ProposedEndDate field if non-nil, zero value otherwise.

### GetProposedEndDateOk

`func (o *ReviewItem) GetProposedEndDateOk() (*SailPointTime, bool)`

GetProposedEndDateOk returns a tuple with the ProposedEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProposedEndDate

`func (o *ReviewItem) SetProposedEndDate(v SailPointTime)`

SetProposedEndDate sets ProposedEndDate field to given value.

### HasProposedEndDate

`func (o *ReviewItem) HasProposedEndDate() bool`

HasProposedEndDate returns a boolean if a field has been set.

### GetComments

`func (o *ReviewItem) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ReviewItem) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ReviewItem) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ReviewItem) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetReviewData

`func (o *ReviewItem) GetReviewData() ReviewData`

GetReviewData returns the ReviewData field if non-nil, zero value otherwise.

### GetReviewDataOk

`func (o *ReviewItem) GetReviewDataOk() (*ReviewData, bool)`

GetReviewDataOk returns a tuple with the ReviewData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewData

`func (o *ReviewItem) SetReviewData(v ReviewData)`

SetReviewData sets ReviewData field to given value.

### HasReviewData

`func (o *ReviewItem) HasReviewData() bool`

HasReviewData returns a boolean if a field has been set.

### GetCertificationSubjectSummary

`func (o *ReviewItem) GetCertificationSubjectSummary() CertificationSubjectSummary`

GetCertificationSubjectSummary returns the CertificationSubjectSummary field if non-nil, zero value otherwise.

### GetCertificationSubjectSummaryOk

`func (o *ReviewItem) GetCertificationSubjectSummaryOk() (*CertificationSubjectSummary, bool)`

GetCertificationSubjectSummaryOk returns a tuple with the CertificationSubjectSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationSubjectSummary

`func (o *ReviewItem) SetCertificationSubjectSummary(v CertificationSubjectSummary)`

SetCertificationSubjectSummary sets CertificationSubjectSummary field to given value.

### HasCertificationSubjectSummary

`func (o *ReviewItem) HasCertificationSubjectSummary() bool`

HasCertificationSubjectSummary returns a boolean if a field has been set.

### GetActor

`func (o *ReviewItem) GetActor() IdentityReference`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *ReviewItem) GetActorOk() (*IdentityReference, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *ReviewItem) SetActor(v IdentityReference)`

SetActor sets Actor field to given value.

### HasActor

`func (o *ReviewItem) HasActor() bool`

HasActor returns a boolean if a field has been set.

### GetAccountName

`func (o *ReviewItem) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *ReviewItem) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *ReviewItem) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *ReviewItem) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetSourceName

`func (o *ReviewItem) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *ReviewItem) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *ReviewItem) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *ReviewItem) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetReauthRequired

`func (o *ReviewItem) GetReauthRequired() bool`

GetReauthRequired returns the ReauthRequired field if non-nil, zero value otherwise.

### GetReauthRequiredOk

`func (o *ReviewItem) GetReauthRequiredOk() (*bool, bool)`

GetReauthRequiredOk returns a tuple with the ReauthRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthRequired

`func (o *ReviewItem) SetReauthRequired(v bool)`

SetReauthRequired sets ReauthRequired field to given value.

### HasReauthRequired

`func (o *ReviewItem) HasReauthRequired() bool`

HasReauthRequired returns a boolean if a field has been set.


