# BulkUpdatePersonalAccessTokensRequest

# BulkUpdatePersonalAccessTokensRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]string** | The IDs of the personal access tokens to update. All IDs must reference personal access tokens that exist in the current tenant. Duplicate and blank values are not allowed. | 
**Patch** | [**[]JsonPatchOperation**](json-patch-operation) | A single [JSON Patch](https://tools.ietf.org/html/rfc6902) document that is applied identically to every personal access token referenced in `ids`. Only the following paths are allowed for bulk updates: * `/expirationDate` - Set (`replace`) or clear (`remove`) the token's expiration. * `/userAwareTokenNeverExpires` - Explicit acknowledgment required when clearing `expirationDate`. Any other path (for example `/name` or `/scope`) results in a `400` response. | 

## Methods

### NewBulkUpdatePersonalAccessTokensRequest

`func NewBulkUpdatePersonalAccessTokensRequest(ids []string, patch []JsonPatchOperation, ) *BulkUpdatePersonalAccessTokensRequest`

NewBulkUpdatePersonalAccessTokensRequest instantiates a new BulkUpdatePersonalAccessTokensRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkUpdatePersonalAccessTokensRequestWithDefaults

`func NewBulkUpdatePersonalAccessTokensRequestWithDefaults() *BulkUpdatePersonalAccessTokensRequest`

NewBulkUpdatePersonalAccessTokensRequestWithDefaults instantiates a new BulkUpdatePersonalAccessTokensRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *BulkUpdatePersonalAccessTokensRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *BulkUpdatePersonalAccessTokensRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *BulkUpdatePersonalAccessTokensRequest) SetIds(v []string)`

SetIds sets Ids field to given value.


### GetPatch

`func (o *BulkUpdatePersonalAccessTokensRequest) GetPatch() []JsonPatchOperation`

GetPatch returns the Patch field if non-nil, zero value otherwise.

### GetPatchOk

`func (o *BulkUpdatePersonalAccessTokensRequest) GetPatchOk() (*[]JsonPatchOperation, bool)`

GetPatchOk returns a tuple with the Patch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatch

`func (o *BulkUpdatePersonalAccessTokensRequest) SetPatch(v []JsonPatchOperation)`

SetPatch sets Patch field to given value.



