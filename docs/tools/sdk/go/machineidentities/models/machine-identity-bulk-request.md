# MachineIdentityBulkRequest

# MachineIdentityBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]string** | IDs of the machine identities. Provide between 1 and 100 IDs. | 

## Methods

### NewMachineIdentityBulkRequest

`func NewMachineIdentityBulkRequest(ids []string, ) *MachineIdentityBulkRequest`

NewMachineIdentityBulkRequest instantiates a new MachineIdentityBulkRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityBulkRequestWithDefaults

`func NewMachineIdentityBulkRequestWithDefaults() *MachineIdentityBulkRequest`

NewMachineIdentityBulkRequestWithDefaults instantiates a new MachineIdentityBulkRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *MachineIdentityBulkRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *MachineIdentityBulkRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *MachineIdentityBulkRequest) SetIds(v []string)`

SetIds sets Ids field to given value.



