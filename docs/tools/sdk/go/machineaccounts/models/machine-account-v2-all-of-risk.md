# MachineAccountV2AllOfRisk

# MachineAccountV2AllOfRisk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Score** | Pointer to **NullableFloat64** | Risk score from 0 to 100. Null when only a severity has been recorded. | [optional] 
**Severity** | Pointer to **NullableString** | Risk severity. | [optional] 

## Methods

### NewMachineAccountV2AllOfRisk

`func NewMachineAccountV2AllOfRisk() *MachineAccountV2AllOfRisk`

NewMachineAccountV2AllOfRisk instantiates a new MachineAccountV2AllOfRisk object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountV2AllOfRiskWithDefaults

`func NewMachineAccountV2AllOfRiskWithDefaults() *MachineAccountV2AllOfRisk`

NewMachineAccountV2AllOfRiskWithDefaults instantiates a new MachineAccountV2AllOfRisk object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScore

`func (o *MachineAccountV2AllOfRisk) GetScore() float64`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *MachineAccountV2AllOfRisk) GetScoreOk() (*float64, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *MachineAccountV2AllOfRisk) SetScore(v float64)`

SetScore sets Score field to given value.

### HasScore

`func (o *MachineAccountV2AllOfRisk) HasScore() bool`

HasScore returns a boolean if a field has been set.

### SetScoreNil

`func (o *MachineAccountV2AllOfRisk) SetScoreNil(b bool)`

 SetScoreNil sets the value for Score to be an explicit nil

### UnsetScore
`func (o *MachineAccountV2AllOfRisk) UnsetScore()`

UnsetScore ensures that no value is present for Score, not even an explicit nil
### GetSeverity

`func (o *MachineAccountV2AllOfRisk) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *MachineAccountV2AllOfRisk) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *MachineAccountV2AllOfRisk) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *MachineAccountV2AllOfRisk) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### SetSeverityNil

`func (o *MachineAccountV2AllOfRisk) SetSeverityNil(b bool)`

 SetSeverityNil sets the value for Severity to be an explicit nil

### UnsetSeverity
`func (o *MachineAccountV2AllOfRisk) UnsetSeverity()`

UnsetSeverity ensures that no value is present for Severity, not even an explicit nil

