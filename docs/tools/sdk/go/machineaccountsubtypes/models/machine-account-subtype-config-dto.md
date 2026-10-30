# MachineAccountSubtypeConfigDto

# MachineAccountSubtypeConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubtypeId** | Pointer to **string** | Unique identifier representing the specific subtype of the machine account, used to distinguish between different machine account categories. | [optional] 
**MachineAccountCreate** | Pointer to [**MachineAccountSubtypeConfigDtoMachineAccountCreate**](machine-account-subtype-config-dto-machine-account-create) |  | [optional] 
**MachineAccountDelete** | Pointer to [**MachineAccountSubtypeConfigDtoMachineAccountDelete**](machine-account-subtype-config-dto-machine-account-delete) |  | [optional] 

## Methods

### NewMachineAccountSubtypeConfigDto

`func NewMachineAccountSubtypeConfigDto() *MachineAccountSubtypeConfigDto`

NewMachineAccountSubtypeConfigDto instantiates a new MachineAccountSubtypeConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountSubtypeConfigDtoWithDefaults

`func NewMachineAccountSubtypeConfigDtoWithDefaults() *MachineAccountSubtypeConfigDto`

NewMachineAccountSubtypeConfigDtoWithDefaults instantiates a new MachineAccountSubtypeConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubtypeId

`func (o *MachineAccountSubtypeConfigDto) GetSubtypeId() string`

GetSubtypeId returns the SubtypeId field if non-nil, zero value otherwise.

### GetSubtypeIdOk

`func (o *MachineAccountSubtypeConfigDto) GetSubtypeIdOk() (*string, bool)`

GetSubtypeIdOk returns a tuple with the SubtypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypeId

`func (o *MachineAccountSubtypeConfigDto) SetSubtypeId(v string)`

SetSubtypeId sets SubtypeId field to given value.

### HasSubtypeId

`func (o *MachineAccountSubtypeConfigDto) HasSubtypeId() bool`

HasSubtypeId returns a boolean if a field has been set.

### GetMachineAccountCreate

`func (o *MachineAccountSubtypeConfigDto) GetMachineAccountCreate() MachineAccountSubtypeConfigDtoMachineAccountCreate`

GetMachineAccountCreate returns the MachineAccountCreate field if non-nil, zero value otherwise.

### GetMachineAccountCreateOk

`func (o *MachineAccountSubtypeConfigDto) GetMachineAccountCreateOk() (*MachineAccountSubtypeConfigDtoMachineAccountCreate, bool)`

GetMachineAccountCreateOk returns a tuple with the MachineAccountCreate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineAccountCreate

`func (o *MachineAccountSubtypeConfigDto) SetMachineAccountCreate(v MachineAccountSubtypeConfigDtoMachineAccountCreate)`

SetMachineAccountCreate sets MachineAccountCreate field to given value.

### HasMachineAccountCreate

`func (o *MachineAccountSubtypeConfigDto) HasMachineAccountCreate() bool`

HasMachineAccountCreate returns a boolean if a field has been set.

### GetMachineAccountDelete

`func (o *MachineAccountSubtypeConfigDto) GetMachineAccountDelete() MachineAccountSubtypeConfigDtoMachineAccountDelete`

GetMachineAccountDelete returns the MachineAccountDelete field if non-nil, zero value otherwise.

### GetMachineAccountDeleteOk

`func (o *MachineAccountSubtypeConfigDto) GetMachineAccountDeleteOk() (*MachineAccountSubtypeConfigDtoMachineAccountDelete, bool)`

GetMachineAccountDeleteOk returns a tuple with the MachineAccountDelete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineAccountDelete

`func (o *MachineAccountSubtypeConfigDto) SetMachineAccountDelete(v MachineAccountSubtypeConfigDtoMachineAccountDelete)`

SetMachineAccountDelete sets MachineAccountDelete field to given value.

### HasMachineAccountDelete

`func (o *MachineAccountSubtypeConfigDto) HasMachineAccountDelete() bool`

HasMachineAccountDelete returns a boolean if a field has been set.


