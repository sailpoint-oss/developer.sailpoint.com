# IdentityV2LifecycleState

# IdentityV2LifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** | **string** | The name of the lifecycle state | 
**ManuallyUpdated** | **bool** | Whether the lifecycle state has been manually or automatically set | 

## Methods

### NewIdentityV2LifecycleState

`func NewIdentityV2LifecycleState(stateName string, manuallyUpdated bool, ) *IdentityV2LifecycleState`

NewIdentityV2LifecycleState instantiates a new IdentityV2LifecycleState object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityV2LifecycleStateWithDefaults

`func NewIdentityV2LifecycleStateWithDefaults() *IdentityV2LifecycleState`

NewIdentityV2LifecycleStateWithDefaults instantiates a new IdentityV2LifecycleState object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStateName

`func (o *IdentityV2LifecycleState) GetStateName() string`

GetStateName returns the StateName field if non-nil, zero value otherwise.

### GetStateNameOk

`func (o *IdentityV2LifecycleState) GetStateNameOk() (*string, bool)`

GetStateNameOk returns a tuple with the StateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateName

`func (o *IdentityV2LifecycleState) SetStateName(v string)`

SetStateName sets StateName field to given value.


### GetManuallyUpdated

`func (o *IdentityV2LifecycleState) GetManuallyUpdated() bool`

GetManuallyUpdated returns the ManuallyUpdated field if non-nil, zero value otherwise.

### GetManuallyUpdatedOk

`func (o *IdentityV2LifecycleState) GetManuallyUpdatedOk() (*bool, bool)`

GetManuallyUpdatedOk returns a tuple with the ManuallyUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyUpdated

`func (o *IdentityV2LifecycleState) SetManuallyUpdated(v bool)`

SetManuallyUpdated sets ManuallyUpdated field to given value.



