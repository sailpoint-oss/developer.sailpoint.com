# AccountRequestPhase

# AccountRequestPhase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Enum of account request phase type | [optional] 
**State** | Pointer to **AccountRequestPhaseState** |  | [optional] 
**Started** | Pointer to **SailPointTime** | Start date of account request phase. | [optional] [readonly] 
**Finished** | Pointer to **SailPointTime** | Finish date of account request phase. | [optional] [readonly] 

## Methods

### NewAccountRequestPhase

`func NewAccountRequestPhase() *AccountRequestPhase`

NewAccountRequestPhase instantiates a new AccountRequestPhase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountRequestPhaseWithDefaults

`func NewAccountRequestPhaseWithDefaults() *AccountRequestPhase`

NewAccountRequestPhaseWithDefaults instantiates a new AccountRequestPhase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AccountRequestPhase) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountRequestPhase) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountRequestPhase) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountRequestPhase) HasName() bool`

HasName returns a boolean if a field has been set.

### GetState

`func (o *AccountRequestPhase) GetState() AccountRequestPhaseState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *AccountRequestPhase) GetStateOk() (*AccountRequestPhaseState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *AccountRequestPhase) SetState(v AccountRequestPhaseState)`

SetState sets State field to given value.

### HasState

`func (o *AccountRequestPhase) HasState() bool`

HasState returns a boolean if a field has been set.

### GetStarted

`func (o *AccountRequestPhase) GetStarted() SailPointTime`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *AccountRequestPhase) GetStartedOk() (*SailPointTime, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *AccountRequestPhase) SetStarted(v SailPointTime)`

SetStarted sets Started field to given value.

### HasStarted

`func (o *AccountRequestPhase) HasStarted() bool`

HasStarted returns a boolean if a field has been set.

### GetFinished

`func (o *AccountRequestPhase) GetFinished() SailPointTime`

GetFinished returns the Finished field if non-nil, zero value otherwise.

### GetFinishedOk

`func (o *AccountRequestPhase) GetFinishedOk() (*SailPointTime, bool)`

GetFinishedOk returns a tuple with the Finished field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinished

`func (o *AccountRequestPhase) SetFinished(v SailPointTime)`

SetFinished sets Finished field to given value.

### HasFinished

`func (o *AccountRequestPhase) HasFinished() bool`

HasFinished returns a boolean if a field has been set.


