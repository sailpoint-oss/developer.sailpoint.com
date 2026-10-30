# MachineIdentityBulkUpdateRequest

# MachineIdentityBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]string** | IDs of the machine identities to update. Provide between 1 and 100 IDs. | 
**JsonPatch** | [**[]JsonPatchOperation**](json-patch-operation) | [JSON Patch](https://tools.ietf.org/html/rfc6902) operations applied to every machine identity in `ids`. Only these paths can be patched: `/description`, `/userEntitlements`, `/owners`, `/owners/primary`, and `/owners/secondary`. | 

## Methods

### NewMachineIdentityBulkUpdateRequest

`func NewMachineIdentityBulkUpdateRequest(ids []string, jsonPatch []JsonPatchOperation, ) *MachineIdentityBulkUpdateRequest`

NewMachineIdentityBulkUpdateRequest instantiates a new MachineIdentityBulkUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityBulkUpdateRequestWithDefaults

`func NewMachineIdentityBulkUpdateRequestWithDefaults() *MachineIdentityBulkUpdateRequest`

NewMachineIdentityBulkUpdateRequestWithDefaults instantiates a new MachineIdentityBulkUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *MachineIdentityBulkUpdateRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *MachineIdentityBulkUpdateRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *MachineIdentityBulkUpdateRequest) SetIds(v []string)`

SetIds sets Ids field to given value.


### GetJsonPatch

`func (o *MachineIdentityBulkUpdateRequest) GetJsonPatch() []JsonPatchOperation`

GetJsonPatch returns the JsonPatch field if non-nil, zero value otherwise.

### GetJsonPatchOk

`func (o *MachineIdentityBulkUpdateRequest) GetJsonPatchOk() (*[]JsonPatchOperation, bool)`

GetJsonPatchOk returns a tuple with the JsonPatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonPatch

`func (o *MachineIdentityBulkUpdateRequest) SetJsonPatch(v []JsonPatchOperation)`

SetJsonPatch sets JsonPatch field to given value.



