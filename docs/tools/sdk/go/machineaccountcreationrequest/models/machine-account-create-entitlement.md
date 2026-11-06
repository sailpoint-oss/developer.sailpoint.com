# MachineAccountCreateEntitlement

# MachineAccountCreateEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the entitlement to request. | 
**Comment** | Pointer to **string** | Comment to include with the entitlement request. | [optional] 
**StartDate** | Pointer to **SailPointTime** | Date and time when access to the entitlement starts. Must be in the future and, when `removeDate` is also set, before `removeDate`. | [optional] 
**RemoveDate** | Pointer to **SailPointTime** | Date and time when access to the entitlement is removed. Must be in the future. | [optional] 

## Methods

### NewMachineAccountCreateEntitlement

`func NewMachineAccountCreateEntitlement(id string, ) *MachineAccountCreateEntitlement`

NewMachineAccountCreateEntitlement instantiates a new MachineAccountCreateEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountCreateEntitlementWithDefaults

`func NewMachineAccountCreateEntitlementWithDefaults() *MachineAccountCreateEntitlement`

NewMachineAccountCreateEntitlementWithDefaults instantiates a new MachineAccountCreateEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineAccountCreateEntitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineAccountCreateEntitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineAccountCreateEntitlement) SetId(v string)`

SetId sets Id field to given value.


### GetComment

`func (o *MachineAccountCreateEntitlement) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *MachineAccountCreateEntitlement) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *MachineAccountCreateEntitlement) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *MachineAccountCreateEntitlement) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetStartDate

`func (o *MachineAccountCreateEntitlement) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *MachineAccountCreateEntitlement) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *MachineAccountCreateEntitlement) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *MachineAccountCreateEntitlement) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetRemoveDate

`func (o *MachineAccountCreateEntitlement) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *MachineAccountCreateEntitlement) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *MachineAccountCreateEntitlement) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *MachineAccountCreateEntitlement) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.


