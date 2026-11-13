# CapabilityResource

# CapabilityResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The source resource identifier. | [optional] 
**Type** | Pointer to **string** | The type of the source resource. | [optional] 
**Name** | Pointer to **string** | The display name of the source resource. | [optional] 
**Features** | Pointer to **[]string** | The set of features supported by the source resource. | [optional] 

## Methods

### NewCapabilityResource

`func NewCapabilityResource() *CapabilityResource`

NewCapabilityResource instantiates a new CapabilityResource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCapabilityResourceWithDefaults

`func NewCapabilityResourceWithDefaults() *CapabilityResource`

NewCapabilityResourceWithDefaults instantiates a new CapabilityResource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CapabilityResource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CapabilityResource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CapabilityResource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CapabilityResource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *CapabilityResource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CapabilityResource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CapabilityResource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CapabilityResource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *CapabilityResource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CapabilityResource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CapabilityResource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CapabilityResource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFeatures

`func (o *CapabilityResource) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *CapabilityResource) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *CapabilityResource) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *CapabilityResource) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.


