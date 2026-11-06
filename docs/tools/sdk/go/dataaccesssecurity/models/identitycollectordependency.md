# Identitycollectordependency

# Identitycollectordependency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The display name of the dependent object. For applications, the platform dependency query may prefix the object name (for example, `Application - Finance SharePoint`). | [optional] 
**Type** | Pointer to **string** | The internal dependent object type identifier (fully qualified type name). | [optional] 
**TypeDisplayName** | Pointer to **string** | The human-readable display name of the dependent object type. | [optional] 

## Methods

### NewIdentitycollectordependency

`func NewIdentitycollectordependency() *Identitycollectordependency`

NewIdentitycollectordependency instantiates a new Identitycollectordependency object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycollectordependencyWithDefaults

`func NewIdentitycollectordependencyWithDefaults() *Identitycollectordependency`

NewIdentitycollectordependencyWithDefaults instantiates a new Identitycollectordependency object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Identitycollectordependency) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identitycollectordependency) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identitycollectordependency) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identitycollectordependency) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Identitycollectordependency) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identitycollectordependency) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identitycollectordependency) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Identitycollectordependency) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTypeDisplayName

`func (o *Identitycollectordependency) GetTypeDisplayName() string`

GetTypeDisplayName returns the TypeDisplayName field if non-nil, zero value otherwise.

### GetTypeDisplayNameOk

`func (o *Identitycollectordependency) GetTypeDisplayNameOk() (*string, bool)`

GetTypeDisplayNameOk returns a tuple with the TypeDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeDisplayName

`func (o *Identitycollectordependency) SetTypeDisplayName(v string)`

SetTypeDisplayName sets TypeDisplayName field to given value.

### HasTypeDisplayName

`func (o *Identitycollectordependency) HasTypeDisplayName() bool`

HasTypeDisplayName returns a boolean if a field has been set.


