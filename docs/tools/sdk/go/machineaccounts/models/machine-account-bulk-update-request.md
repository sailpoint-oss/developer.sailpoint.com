# MachineAccountBulkUpdateRequest

# MachineAccountBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]string** | IDs of the machine accounts to update. Provide between 1 and 100 IDs. | 
**JsonPatch** | [**[]JsonPatchOperation**](json-patch-operation) | [JSON Patch](https://tools.ietf.org/html/rfc6902) operations to apply to every machine account in `ids`. Each operation must target one of these top-level fields: `description`, `subtype`, `environment`, `machineIdentity`, `ownerIdentity`, `manuallyEdited`. | 

## Methods

### NewMachineAccountBulkUpdateRequest

`func NewMachineAccountBulkUpdateRequest(ids []string, jsonPatch []JsonPatchOperation, ) *MachineAccountBulkUpdateRequest`

NewMachineAccountBulkUpdateRequest instantiates a new MachineAccountBulkUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountBulkUpdateRequestWithDefaults

`func NewMachineAccountBulkUpdateRequestWithDefaults() *MachineAccountBulkUpdateRequest`

NewMachineAccountBulkUpdateRequestWithDefaults instantiates a new MachineAccountBulkUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *MachineAccountBulkUpdateRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *MachineAccountBulkUpdateRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *MachineAccountBulkUpdateRequest) SetIds(v []string)`

SetIds sets Ids field to given value.


### GetJsonPatch

`func (o *MachineAccountBulkUpdateRequest) GetJsonPatch() []JsonPatchOperation`

GetJsonPatch returns the JsonPatch field if non-nil, zero value otherwise.

### GetJsonPatchOk

`func (o *MachineAccountBulkUpdateRequest) GetJsonPatchOk() (*[]JsonPatchOperation, bool)`

GetJsonPatchOk returns a tuple with the JsonPatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonPatch

`func (o *MachineAccountBulkUpdateRequest) SetJsonPatch(v []JsonPatchOperation)`

SetJsonPatch sets JsonPatch field to given value.



