# AccountV2Recommendation

# AccountV2Recommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **NullableString** | Recommended type of account. | [optional] 
**Method** | Pointer to **NullableString** | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [optional] 
**MachineLikelihood** | Pointer to **NullableInt32** | Ranked likelihood that this account is a machine account. Present when machine-account recommendation enrichment is available for the tenant. | [optional] 
**Explanation** | Pointer to **[]string** | Reasons supporting the machine-account recommendation. Never null; an empty array when no explanation is available. | [optional] 

## Methods

### NewAccountV2Recommendation

`func NewAccountV2Recommendation() *AccountV2Recommendation`

NewAccountV2Recommendation instantiates a new AccountV2Recommendation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountV2RecommendationWithDefaults

`func NewAccountV2RecommendationWithDefaults() *AccountV2Recommendation`

NewAccountV2RecommendationWithDefaults instantiates a new AccountV2Recommendation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountV2Recommendation) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountV2Recommendation) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountV2Recommendation) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccountV2Recommendation) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *AccountV2Recommendation) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *AccountV2Recommendation) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetMethod

`func (o *AccountV2Recommendation) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *AccountV2Recommendation) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *AccountV2Recommendation) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *AccountV2Recommendation) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### SetMethodNil

`func (o *AccountV2Recommendation) SetMethodNil(b bool)`

 SetMethodNil sets the value for Method to be an explicit nil

### UnsetMethod
`func (o *AccountV2Recommendation) UnsetMethod()`

UnsetMethod ensures that no value is present for Method, not even an explicit nil
### GetMachineLikelihood

`func (o *AccountV2Recommendation) GetMachineLikelihood() int32`

GetMachineLikelihood returns the MachineLikelihood field if non-nil, zero value otherwise.

### GetMachineLikelihoodOk

`func (o *AccountV2Recommendation) GetMachineLikelihoodOk() (*int32, bool)`

GetMachineLikelihoodOk returns a tuple with the MachineLikelihood field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineLikelihood

`func (o *AccountV2Recommendation) SetMachineLikelihood(v int32)`

SetMachineLikelihood sets MachineLikelihood field to given value.

### HasMachineLikelihood

`func (o *AccountV2Recommendation) HasMachineLikelihood() bool`

HasMachineLikelihood returns a boolean if a field has been set.

### SetMachineLikelihoodNil

`func (o *AccountV2Recommendation) SetMachineLikelihoodNil(b bool)`

 SetMachineLikelihoodNil sets the value for MachineLikelihood to be an explicit nil

### UnsetMachineLikelihood
`func (o *AccountV2Recommendation) UnsetMachineLikelihood()`

UnsetMachineLikelihood ensures that no value is present for MachineLikelihood, not even an explicit nil
### GetExplanation

`func (o *AccountV2Recommendation) GetExplanation() []string`

GetExplanation returns the Explanation field if non-nil, zero value otherwise.

### GetExplanationOk

`func (o *AccountV2Recommendation) GetExplanationOk() (*[]string, bool)`

GetExplanationOk returns a tuple with the Explanation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExplanation

`func (o *AccountV2Recommendation) SetExplanation(v []string)`

SetExplanation sets Explanation field to given value.

### HasExplanation

`func (o *AccountV2Recommendation) HasExplanation() bool`

HasExplanation returns a boolean if a field has been set.


