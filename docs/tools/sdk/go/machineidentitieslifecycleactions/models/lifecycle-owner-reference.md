# LifecycleOwnerReference

# LifecycleOwnerReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner reference type. | [optional] 
**Id** | Pointer to **string** | Identifier of the owner. | [optional] 
**Name** | Pointer to **string** | Display name of the owner. | [optional] 

## Methods

### NewLifecycleOwnerReference

`func NewLifecycleOwnerReference() *LifecycleOwnerReference`

NewLifecycleOwnerReference instantiates a new LifecycleOwnerReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecycleOwnerReferenceWithDefaults

`func NewLifecycleOwnerReferenceWithDefaults() *LifecycleOwnerReference`

NewLifecycleOwnerReferenceWithDefaults instantiates a new LifecycleOwnerReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *LifecycleOwnerReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LifecycleOwnerReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LifecycleOwnerReference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LifecycleOwnerReference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *LifecycleOwnerReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LifecycleOwnerReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LifecycleOwnerReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LifecycleOwnerReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *LifecycleOwnerReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LifecycleOwnerReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LifecycleOwnerReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LifecycleOwnerReference) HasName() bool`

HasName returns a boolean if a field has been set.


