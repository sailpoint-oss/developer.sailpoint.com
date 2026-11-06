# MachineAccountV2AllOfResource

# MachineAccountV2AllOfResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The source resource identifier. | [optional] 
**Type** | Pointer to **string** | The type of the source resource. | [optional] 
**Name** | Pointer to **NullableString** | The display name of the source resource. | [optional] 
**Features** | Pointer to **[]string** | The features supported by the source resource. | [optional] 

## Methods

### NewMachineAccountV2AllOfResource

`func NewMachineAccountV2AllOfResource() *MachineAccountV2AllOfResource`

NewMachineAccountV2AllOfResource instantiates a new MachineAccountV2AllOfResource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountV2AllOfResourceWithDefaults

`func NewMachineAccountV2AllOfResourceWithDefaults() *MachineAccountV2AllOfResource`

NewMachineAccountV2AllOfResourceWithDefaults instantiates a new MachineAccountV2AllOfResource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineAccountV2AllOfResource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineAccountV2AllOfResource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineAccountV2AllOfResource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineAccountV2AllOfResource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *MachineAccountV2AllOfResource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MachineAccountV2AllOfResource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MachineAccountV2AllOfResource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MachineAccountV2AllOfResource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *MachineAccountV2AllOfResource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineAccountV2AllOfResource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineAccountV2AllOfResource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MachineAccountV2AllOfResource) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *MachineAccountV2AllOfResource) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *MachineAccountV2AllOfResource) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetFeatures

`func (o *MachineAccountV2AllOfResource) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *MachineAccountV2AllOfResource) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *MachineAccountV2AllOfResource) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *MachineAccountV2AllOfResource) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### SetFeaturesNil

`func (o *MachineAccountV2AllOfResource) SetFeaturesNil(b bool)`

 SetFeaturesNil sets the value for Features to be an explicit nil

### UnsetFeatures
`func (o *MachineAccountV2AllOfResource) UnsetFeatures()`

UnsetFeatures ensures that no value is present for Features, not even an explicit nil

