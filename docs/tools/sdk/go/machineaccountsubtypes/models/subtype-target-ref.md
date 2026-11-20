# SubtypeTargetRef

# SubtypeTargetRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of the target. `SOURCE` for source-tier rows; `CONNECTOR` for connector-tier rows. | [optional] 
**Id** | Pointer to **string** | Target identifier. Source id for `SOURCE`. Connector specification id or connector type for `CONNECTOR`. | [optional] 
**Name** | Pointer to **string** | Human-readable target name. Falls back to `id` when a display name is not available. | [optional] 

## Methods

### NewSubtypeTargetRef

`func NewSubtypeTargetRef() *SubtypeTargetRef`

NewSubtypeTargetRef instantiates a new SubtypeTargetRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubtypeTargetRefWithDefaults

`func NewSubtypeTargetRefWithDefaults() *SubtypeTargetRef`

NewSubtypeTargetRefWithDefaults instantiates a new SubtypeTargetRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SubtypeTargetRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubtypeTargetRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubtypeTargetRef) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SubtypeTargetRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SubtypeTargetRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubtypeTargetRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubtypeTargetRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SubtypeTargetRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SubtypeTargetRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubtypeTargetRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubtypeTargetRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SubtypeTargetRef) HasName() bool`

HasName returns a boolean if a field has been set.


