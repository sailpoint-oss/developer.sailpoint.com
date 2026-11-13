# Intelmachineidentityowners

# Intelmachineidentityowners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryIdentity** | [**NullableIntelmachineentityref**](intelmachineentityref) | Primary human owner of the machine identity when assigned. | 
**SecondaryIdentities** | [**[]Intelmachineentityref**](intelmachineentityref) | Secondary human owners associated with the machine identity. | 

## Methods

### NewIntelmachineidentityowners

`func NewIntelmachineidentityowners(primaryIdentity NullableIntelmachineentityref, secondaryIdentities []Intelmachineentityref, ) *Intelmachineidentityowners`

NewIntelmachineidentityowners instantiates a new Intelmachineidentityowners object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelmachineidentityownersWithDefaults

`func NewIntelmachineidentityownersWithDefaults() *Intelmachineidentityowners`

NewIntelmachineidentityownersWithDefaults instantiates a new Intelmachineidentityowners object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryIdentity

`func (o *Intelmachineidentityowners) GetPrimaryIdentity() Intelmachineentityref`

GetPrimaryIdentity returns the PrimaryIdentity field if non-nil, zero value otherwise.

### GetPrimaryIdentityOk

`func (o *Intelmachineidentityowners) GetPrimaryIdentityOk() (*Intelmachineentityref, bool)`

GetPrimaryIdentityOk returns a tuple with the PrimaryIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryIdentity

`func (o *Intelmachineidentityowners) SetPrimaryIdentity(v Intelmachineentityref)`

SetPrimaryIdentity sets PrimaryIdentity field to given value.


### SetPrimaryIdentityNil

`func (o *Intelmachineidentityowners) SetPrimaryIdentityNil(b bool)`

 SetPrimaryIdentityNil sets the value for PrimaryIdentity to be an explicit nil

### UnsetPrimaryIdentity
`func (o *Intelmachineidentityowners) UnsetPrimaryIdentity()`

UnsetPrimaryIdentity ensures that no value is present for PrimaryIdentity, not even an explicit nil
### GetSecondaryIdentities

`func (o *Intelmachineidentityowners) GetSecondaryIdentities() []Intelmachineentityref`

GetSecondaryIdentities returns the SecondaryIdentities field if non-nil, zero value otherwise.

### GetSecondaryIdentitiesOk

`func (o *Intelmachineidentityowners) GetSecondaryIdentitiesOk() (*[]Intelmachineentityref, bool)`

GetSecondaryIdentitiesOk returns a tuple with the SecondaryIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondaryIdentities

`func (o *Intelmachineidentityowners) SetSecondaryIdentities(v []Intelmachineentityref)`

SetSecondaryIdentities sets SecondaryIdentities field to given value.



