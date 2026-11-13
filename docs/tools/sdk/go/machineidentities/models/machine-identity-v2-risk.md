# MachineIdentityV2Risk

# MachineIdentityV2Risk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Score** | Pointer to **float64** | Normalised risk score 0.0-100.0. | [optional] 
**Severity** | Pointer to **string** | Risk severity bucket. | [optional] 

## Methods

### NewMachineIdentityV2Risk

`func NewMachineIdentityV2Risk() *MachineIdentityV2Risk`

NewMachineIdentityV2Risk instantiates a new MachineIdentityV2Risk object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityV2RiskWithDefaults

`func NewMachineIdentityV2RiskWithDefaults() *MachineIdentityV2Risk`

NewMachineIdentityV2RiskWithDefaults instantiates a new MachineIdentityV2Risk object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScore

`func (o *MachineIdentityV2Risk) GetScore() float64`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *MachineIdentityV2Risk) GetScoreOk() (*float64, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *MachineIdentityV2Risk) SetScore(v float64)`

SetScore sets Score field to given value.

### HasScore

`func (o *MachineIdentityV2Risk) HasScore() bool`

HasScore returns a boolean if a field has been set.

### GetSeverity

`func (o *MachineIdentityV2Risk) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *MachineIdentityV2Risk) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *MachineIdentityV2Risk) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *MachineIdentityV2Risk) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.


