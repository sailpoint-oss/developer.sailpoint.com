# MachineAccountBulkRequest

# MachineAccountBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]string** | IDs of the machine accounts to process. Provide between 1 and 100 IDs. | 

## Methods

### NewMachineAccountBulkRequest

`func NewMachineAccountBulkRequest(ids []string, ) *MachineAccountBulkRequest`

NewMachineAccountBulkRequest instantiates a new MachineAccountBulkRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountBulkRequestWithDefaults

`func NewMachineAccountBulkRequestWithDefaults() *MachineAccountBulkRequest`

NewMachineAccountBulkRequestWithDefaults instantiates a new MachineAccountBulkRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *MachineAccountBulkRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *MachineAccountBulkRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *MachineAccountBulkRequest) SetIds(v []string)`

SetIds sets Ids field to given value.



