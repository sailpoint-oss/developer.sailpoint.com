# SubtypeTarget

# SubtypeTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of the target. `SOURCE` for source-tier rows; `CONNECTOR` for connector-tier rows. | [optional] 
**Id** | Pointer to **string** | Target identifier. Source id for `SOURCE`. Connector specification id or connector type for `CONNECTOR`. | [optional] 
**Name** | Pointer to **string** | Human-readable target name. Falls back to `id` when a display name is not available. | [optional] 
**SupportsProvisioning** | Pointer to **bool** | Whether the target can provision accounts. `false` when the target does not support provisioning. | [optional] [default to false]

## Methods

### NewSubtypeTarget

`func NewSubtypeTarget() *SubtypeTarget`

NewSubtypeTarget instantiates a new SubtypeTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubtypeTargetWithDefaults

`func NewSubtypeTargetWithDefaults() *SubtypeTarget`

NewSubtypeTargetWithDefaults instantiates a new SubtypeTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SubtypeTarget) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubtypeTarget) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubtypeTarget) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SubtypeTarget) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SubtypeTarget) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubtypeTarget) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubtypeTarget) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SubtypeTarget) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SubtypeTarget) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubtypeTarget) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubtypeTarget) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SubtypeTarget) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSupportsProvisioning

`func (o *SubtypeTarget) GetSupportsProvisioning() bool`

GetSupportsProvisioning returns the SupportsProvisioning field if non-nil, zero value otherwise.

### GetSupportsProvisioningOk

`func (o *SubtypeTarget) GetSupportsProvisioningOk() (*bool, bool)`

GetSupportsProvisioningOk returns a tuple with the SupportsProvisioning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportsProvisioning

`func (o *SubtypeTarget) SetSupportsProvisioning(v bool)`

SetSupportsProvisioning sets SupportsProvisioning field to given value.

### HasSupportsProvisioning

`func (o *SubtypeTarget) HasSupportsProvisioning() bool`

HasSupportsProvisioning returns a boolean if a field has been set.


