# RequestedForDtoRef

# RequestedForDtoRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **string** | The identity id the access is requested for. * `HUMAN` (default): the human identity id. * `MACHINE`: the machine identity id (hyphenated RFC-4122 UUID, not the correlated human identity).  | 
**IdentityType** | Pointer to **string** | Type of identity the access is requested for. * `HUMAN` (default) - standard human identity access request. * `MACHINE` - machine identity access request. When `MACHINE`, all entries in the request must also be `MACHINE` (mixed human and machine identities in one request are not supported), and only `ENTITLEMENT` items are allowed.  | [optional] [default to "HUMAN"]
**RequestedItems** | [**[]RequestedItemDtoRef**](requested-item-dto-ref) | the details for the access items that are requested for the identity | 

## Methods

### NewRequestedForDtoRef

`func NewRequestedForDtoRef(identityId string, requestedItems []RequestedItemDtoRef, ) *RequestedForDtoRef`

NewRequestedForDtoRef instantiates a new RequestedForDtoRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedForDtoRefWithDefaults

`func NewRequestedForDtoRefWithDefaults() *RequestedForDtoRef`

NewRequestedForDtoRefWithDefaults instantiates a new RequestedForDtoRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *RequestedForDtoRef) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *RequestedForDtoRef) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *RequestedForDtoRef) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetIdentityType

`func (o *RequestedForDtoRef) GetIdentityType() string`

GetIdentityType returns the IdentityType field if non-nil, zero value otherwise.

### GetIdentityTypeOk

`func (o *RequestedForDtoRef) GetIdentityTypeOk() (*string, bool)`

GetIdentityTypeOk returns a tuple with the IdentityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityType

`func (o *RequestedForDtoRef) SetIdentityType(v string)`

SetIdentityType sets IdentityType field to given value.

### HasIdentityType

`func (o *RequestedForDtoRef) HasIdentityType() bool`

HasIdentityType returns a boolean if a field has been set.

### GetRequestedItems

`func (o *RequestedForDtoRef) GetRequestedItems() []RequestedItemDtoRef`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *RequestedForDtoRef) GetRequestedItemsOk() (*[]RequestedItemDtoRef, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *RequestedForDtoRef) SetRequestedItems(v []RequestedItemDtoRef)`

SetRequestedItems sets RequestedItems field to given value.



