# UserEntitlementV2

# UserEntitlementV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **string** | The source ID of the entitlement. | [optional] 
**EntitlementId** | Pointer to **string** | The ID of the entitlement. | [optional] 
**DisplayName** | Pointer to **string** | The display name of the entitlement. | [optional] 
**Source** | Pointer to [**UserEntitlementV2Source**](user-entitlement-v2-source) |  | [optional] 

## Methods

### NewUserEntitlementV2

`func NewUserEntitlementV2() *UserEntitlementV2`

NewUserEntitlementV2 instantiates a new UserEntitlementV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserEntitlementV2WithDefaults

`func NewUserEntitlementV2WithDefaults() *UserEntitlementV2`

NewUserEntitlementV2WithDefaults instantiates a new UserEntitlementV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *UserEntitlementV2) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *UserEntitlementV2) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *UserEntitlementV2) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *UserEntitlementV2) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetEntitlementId

`func (o *UserEntitlementV2) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *UserEntitlementV2) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *UserEntitlementV2) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.

### HasEntitlementId

`func (o *UserEntitlementV2) HasEntitlementId() bool`

HasEntitlementId returns a boolean if a field has been set.

### GetDisplayName

`func (o *UserEntitlementV2) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *UserEntitlementV2) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *UserEntitlementV2) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *UserEntitlementV2) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSource

`func (o *UserEntitlementV2) GetSource() UserEntitlementV2Source`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *UserEntitlementV2) GetSourceOk() (*UserEntitlementV2Source, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *UserEntitlementV2) SetSource(v UserEntitlementV2Source)`

SetSource sets Source field to given value.

### HasSource

`func (o *UserEntitlementV2) HasSource() bool`

HasSource returns a boolean if a field has been set.


