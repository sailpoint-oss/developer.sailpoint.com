# AccountsSelectionRequest

# AccountsSelectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | Pointer to **[]string** | A list of Identity IDs for whom the Access is requested. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`   (including all machine identity requests). | [optional] 
**RequestType** | Pointer to **NullableAccessRequestType** |  | [optional] 
**RequestedItems** | Pointer to [**[]AccessRequestItem**](access-request-item) | Access items requested. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`.  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
**RequestedForWithRequestedItems** | Pointer to [**[]RequestedForDtoRef**](requested-for-dto-ref) | Nested payload pairing each identity with its requested items. * Required for machine identity accounts-selection. Set `identityType: MACHINE` on each entry. * Machine requests support `ENTITLEMENT` items only and do not allow mixed human and machine identities. * When present, `requestedFor` and `requestedItems` must be omitted (do not send an empty array). | [optional] 

## Methods

### NewAccountsSelectionRequest

`func NewAccountsSelectionRequest() *AccountsSelectionRequest`

NewAccountsSelectionRequest instantiates a new AccountsSelectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountsSelectionRequestWithDefaults

`func NewAccountsSelectionRequestWithDefaults() *AccountsSelectionRequest`

NewAccountsSelectionRequestWithDefaults instantiates a new AccountsSelectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedFor

`func (o *AccountsSelectionRequest) GetRequestedFor() []string`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *AccountsSelectionRequest) GetRequestedForOk() (*[]string, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *AccountsSelectionRequest) SetRequestedFor(v []string)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *AccountsSelectionRequest) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetRequestType

`func (o *AccountsSelectionRequest) GetRequestType() AccessRequestType`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *AccountsSelectionRequest) GetRequestTypeOk() (*AccessRequestType, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *AccountsSelectionRequest) SetRequestType(v AccessRequestType)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *AccountsSelectionRequest) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *AccountsSelectionRequest) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *AccountsSelectionRequest) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetRequestedItems

`func (o *AccountsSelectionRequest) GetRequestedItems() []AccessRequestItem`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *AccountsSelectionRequest) GetRequestedItemsOk() (*[]AccessRequestItem, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *AccountsSelectionRequest) SetRequestedItems(v []AccessRequestItem)`

SetRequestedItems sets RequestedItems field to given value.

### HasRequestedItems

`func (o *AccountsSelectionRequest) HasRequestedItems() bool`

HasRequestedItems returns a boolean if a field has been set.

### GetClientMetadata

`func (o *AccountsSelectionRequest) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *AccountsSelectionRequest) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *AccountsSelectionRequest) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *AccountsSelectionRequest) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetRequestedForWithRequestedItems

`func (o *AccountsSelectionRequest) GetRequestedForWithRequestedItems() []RequestedForDtoRef`

GetRequestedForWithRequestedItems returns the RequestedForWithRequestedItems field if non-nil, zero value otherwise.

### GetRequestedForWithRequestedItemsOk

`func (o *AccountsSelectionRequest) GetRequestedForWithRequestedItemsOk() (*[]RequestedForDtoRef, bool)`

GetRequestedForWithRequestedItemsOk returns a tuple with the RequestedForWithRequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedForWithRequestedItems

`func (o *AccountsSelectionRequest) SetRequestedForWithRequestedItems(v []RequestedForDtoRef)`

SetRequestedForWithRequestedItems sets RequestedForWithRequestedItems field to given value.

### HasRequestedForWithRequestedItems

`func (o *AccountsSelectionRequest) HasRequestedForWithRequestedItems() bool`

HasRequestedForWithRequestedItems returns a boolean if a field has been set.

### SetRequestedForWithRequestedItemsNil

`func (o *AccountsSelectionRequest) SetRequestedForWithRequestedItemsNil(b bool)`

 SetRequestedForWithRequestedItemsNil sets the value for RequestedForWithRequestedItems to be an explicit nil

### UnsetRequestedForWithRequestedItems
`func (o *AccountsSelectionRequest) UnsetRequestedForWithRequestedItems()`

UnsetRequestedForWithRequestedItems ensures that no value is present for RequestedForWithRequestedItems, not even an explicit nil

