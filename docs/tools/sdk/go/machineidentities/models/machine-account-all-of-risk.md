# MachineAccountAllOfRisk

# MachineAccountAllOfRisk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Score** | Pointer to **NullableFloat64** | Risk score. Null for Entro-only severity. | [optional] 
**Severity** | Pointer to **NullableString** | Risk severity. A null stored severity can render as UNKNOWN when that behavior is enabled. | [optional] 

## Methods

### NewMachineAccountAllOfRisk

`func NewMachineAccountAllOfRisk() *MachineAccountAllOfRisk`

NewMachineAccountAllOfRisk instantiates a new MachineAccountAllOfRisk object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountAllOfRiskWithDefaults

`func NewMachineAccountAllOfRiskWithDefaults() *MachineAccountAllOfRisk`

NewMachineAccountAllOfRiskWithDefaults instantiates a new MachineAccountAllOfRisk object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScore

`func (o *MachineAccountAllOfRisk) GetScore() float64`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *MachineAccountAllOfRisk) GetScoreOk() (*float64, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *MachineAccountAllOfRisk) SetScore(v float64)`

SetScore sets Score field to given value.

### HasScore

`func (o *MachineAccountAllOfRisk) HasScore() bool`

HasScore returns a boolean if a field has been set.

### SetScoreNil

`func (o *MachineAccountAllOfRisk) SetScoreNil(b bool)`

 SetScoreNil sets the value for Score to be an explicit nil

### UnsetScore
`func (o *MachineAccountAllOfRisk) UnsetScore()`

UnsetScore ensures that no value is present for Score, not even an explicit nil
### GetSeverity

`func (o *MachineAccountAllOfRisk) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *MachineAccountAllOfRisk) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *MachineAccountAllOfRisk) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *MachineAccountAllOfRisk) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### SetSeverityNil

`func (o *MachineAccountAllOfRisk) SetSeverityNil(b bool)`

 SetSeverityNil sets the value for Severity to be an explicit nil

### UnsetSeverity
`func (o *MachineAccountAllOfRisk) UnsetSeverity()`

UnsetSeverity ensures that no value is present for Severity, not even an explicit nil

