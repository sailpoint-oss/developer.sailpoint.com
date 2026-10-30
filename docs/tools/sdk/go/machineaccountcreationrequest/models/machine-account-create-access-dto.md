# MachineAccountCreateAccessDto

# MachineAccountCreateAccessDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **string** | Source ID. | [optional] 
**SourceName** | Pointer to **string** | Source name. | [optional] 
**Subtypes** | Pointer to [**[]MachineAccountCreateAccessDtoSubtypesInner**](machine-account-create-access-dto-subtypes-inner) | List of subtypes for which the user has an entitlement to request machine accounts. | [optional] 

## Methods

### NewMachineAccountCreateAccessDto

`func NewMachineAccountCreateAccessDto() *MachineAccountCreateAccessDto`

NewMachineAccountCreateAccessDto instantiates a new MachineAccountCreateAccessDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountCreateAccessDtoWithDefaults

`func NewMachineAccountCreateAccessDtoWithDefaults() *MachineAccountCreateAccessDto`

NewMachineAccountCreateAccessDtoWithDefaults instantiates a new MachineAccountCreateAccessDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *MachineAccountCreateAccessDto) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineAccountCreateAccessDto) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineAccountCreateAccessDto) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MachineAccountCreateAccessDto) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *MachineAccountCreateAccessDto) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *MachineAccountCreateAccessDto) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *MachineAccountCreateAccessDto) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *MachineAccountCreateAccessDto) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSubtypes

`func (o *MachineAccountCreateAccessDto) GetSubtypes() []MachineAccountCreateAccessDtoSubtypesInner`

GetSubtypes returns the Subtypes field if non-nil, zero value otherwise.

### GetSubtypesOk

`func (o *MachineAccountCreateAccessDto) GetSubtypesOk() (*[]MachineAccountCreateAccessDtoSubtypesInner, bool)`

GetSubtypesOk returns a tuple with the Subtypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypes

`func (o *MachineAccountCreateAccessDto) SetSubtypes(v []MachineAccountCreateAccessDtoSubtypesInner)`

SetSubtypes sets Subtypes field to given value.

### HasSubtypes

`func (o *MachineAccountCreateAccessDto) HasSubtypes() bool`

HasSubtypes returns a boolean if a field has been set.


