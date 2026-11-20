# MachineAccountRecommendation

# MachineAccountRecommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Recommendation ID. | [optional] 
**AccountId** | Pointer to **string** | ID of the account the recommendation is for. | [optional] 
**SourceId** | Pointer to **string** | ID of the source the account belongs to. | [optional] 
**IsMachine** | Pointer to **bool** | Indicates whether the account is recommended as a machine account. | [optional] [default to false]
**Explanation** | Pointer to [**[]MachineAccountRecommendationExplanation**](machine-account-recommendation-explanation) | Reasons that contributed to the recommendation. | [optional] 
**Created** | Pointer to **SailPointTime** | Date and time when the recommendation was created. | [optional] 
**Recommendation** | Pointer to **string** | Recommendation result. | [optional] 
**RecommendationType** | Pointer to **string** | Type of recommendation. | [optional] 
**Algorithm** | Pointer to **string** | Algorithm that produced the recommendation. | [optional] 

## Methods

### NewMachineAccountRecommendation

`func NewMachineAccountRecommendation() *MachineAccountRecommendation`

NewMachineAccountRecommendation instantiates a new MachineAccountRecommendation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountRecommendationWithDefaults

`func NewMachineAccountRecommendationWithDefaults() *MachineAccountRecommendation`

NewMachineAccountRecommendationWithDefaults instantiates a new MachineAccountRecommendation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineAccountRecommendation) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineAccountRecommendation) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineAccountRecommendation) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineAccountRecommendation) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccountId

`func (o *MachineAccountRecommendation) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *MachineAccountRecommendation) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *MachineAccountRecommendation) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *MachineAccountRecommendation) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetSourceId

`func (o *MachineAccountRecommendation) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineAccountRecommendation) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineAccountRecommendation) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MachineAccountRecommendation) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetIsMachine

`func (o *MachineAccountRecommendation) GetIsMachine() bool`

GetIsMachine returns the IsMachine field if non-nil, zero value otherwise.

### GetIsMachineOk

`func (o *MachineAccountRecommendation) GetIsMachineOk() (*bool, bool)`

GetIsMachineOk returns a tuple with the IsMachine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMachine

`func (o *MachineAccountRecommendation) SetIsMachine(v bool)`

SetIsMachine sets IsMachine field to given value.

### HasIsMachine

`func (o *MachineAccountRecommendation) HasIsMachine() bool`

HasIsMachine returns a boolean if a field has been set.

### GetExplanation

`func (o *MachineAccountRecommendation) GetExplanation() []MachineAccountRecommendationExplanation`

GetExplanation returns the Explanation field if non-nil, zero value otherwise.

### GetExplanationOk

`func (o *MachineAccountRecommendation) GetExplanationOk() (*[]MachineAccountRecommendationExplanation, bool)`

GetExplanationOk returns a tuple with the Explanation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExplanation

`func (o *MachineAccountRecommendation) SetExplanation(v []MachineAccountRecommendationExplanation)`

SetExplanation sets Explanation field to given value.

### HasExplanation

`func (o *MachineAccountRecommendation) HasExplanation() bool`

HasExplanation returns a boolean if a field has been set.

### GetCreated

`func (o *MachineAccountRecommendation) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineAccountRecommendation) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineAccountRecommendation) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MachineAccountRecommendation) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetRecommendation

`func (o *MachineAccountRecommendation) GetRecommendation() string`

GetRecommendation returns the Recommendation field if non-nil, zero value otherwise.

### GetRecommendationOk

`func (o *MachineAccountRecommendation) GetRecommendationOk() (*string, bool)`

GetRecommendationOk returns a tuple with the Recommendation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendation

`func (o *MachineAccountRecommendation) SetRecommendation(v string)`

SetRecommendation sets Recommendation field to given value.

### HasRecommendation

`func (o *MachineAccountRecommendation) HasRecommendation() bool`

HasRecommendation returns a boolean if a field has been set.

### GetRecommendationType

`func (o *MachineAccountRecommendation) GetRecommendationType() string`

GetRecommendationType returns the RecommendationType field if non-nil, zero value otherwise.

### GetRecommendationTypeOk

`func (o *MachineAccountRecommendation) GetRecommendationTypeOk() (*string, bool)`

GetRecommendationTypeOk returns a tuple with the RecommendationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationType

`func (o *MachineAccountRecommendation) SetRecommendationType(v string)`

SetRecommendationType sets RecommendationType field to given value.

### HasRecommendationType

`func (o *MachineAccountRecommendation) HasRecommendationType() bool`

HasRecommendationType returns a boolean if a field has been set.

### GetAlgorithm

`func (o *MachineAccountRecommendation) GetAlgorithm() string`

GetAlgorithm returns the Algorithm field if non-nil, zero value otherwise.

### GetAlgorithmOk

`func (o *MachineAccountRecommendation) GetAlgorithmOk() (*string, bool)`

GetAlgorithmOk returns a tuple with the Algorithm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlgorithm

`func (o *MachineAccountRecommendation) SetAlgorithm(v string)`

SetAlgorithm sets Algorithm field to given value.

### HasAlgorithm

`func (o *MachineAccountRecommendation) HasAlgorithm() bool`

HasAlgorithm returns a boolean if a field has been set.


