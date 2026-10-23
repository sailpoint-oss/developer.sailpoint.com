# EntitlementV2Source

# EntitlementV2Source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The source ID | [optional] 
**Type** | Pointer to **string** | The source type, will always be \"SOURCE\" | [optional] 
**Name** | Pointer to **string** | The source name | [optional] 

## Methods

### NewEntitlementV2Source

`func NewEntitlementV2Source() *EntitlementV2Source`

NewEntitlementV2Source instantiates a new EntitlementV2Source object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementV2SourceWithDefaults

`func NewEntitlementV2SourceWithDefaults() *EntitlementV2Source`

NewEntitlementV2SourceWithDefaults instantiates a new EntitlementV2Source object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EntitlementV2Source) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementV2Source) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementV2Source) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntitlementV2Source) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *EntitlementV2Source) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementV2Source) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementV2Source) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntitlementV2Source) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *EntitlementV2Source) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntitlementV2Source) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntitlementV2Source) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntitlementV2Source) HasName() bool`

HasName returns a boolean if a field has been set.


