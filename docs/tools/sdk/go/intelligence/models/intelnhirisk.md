# Intelnhirisk

# Intelnhirisk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Severity** | Pointer to **string** | Risk band for the identity. | [optional] 
**LastModified** | Pointer to **SailPointTime** | When the risk level last changed. Omitted when not available. | [optional] 

## Methods

### NewIntelnhirisk

`func NewIntelnhirisk() *Intelnhirisk`

NewIntelnhirisk instantiates a new Intelnhirisk object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelnhiriskWithDefaults

`func NewIntelnhiriskWithDefaults() *Intelnhirisk`

NewIntelnhiriskWithDefaults instantiates a new Intelnhirisk object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSeverity

`func (o *Intelnhirisk) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *Intelnhirisk) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *Intelnhirisk) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *Intelnhirisk) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetLastModified

`func (o *Intelnhirisk) GetLastModified() SailPointTime`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Intelnhirisk) GetLastModifiedOk() (*SailPointTime, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Intelnhirisk) SetLastModified(v SailPointTime)`

SetLastModified sets LastModified field to given value.

### HasLastModified

`func (o *Intelnhirisk) HasLastModified() bool`

HasLastModified returns a boolean if a field has been set.


