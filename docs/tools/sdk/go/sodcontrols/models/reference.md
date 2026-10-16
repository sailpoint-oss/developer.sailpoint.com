# Reference

# Reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Opaque identifier in the exact form required by the owning service (case, dashes, etc. must be preserved).  | 
**Type** | **string** | The type of object being referenced. | 
**Name** | Pointer to **NullableString** | Human-readable name for the referenced identity or governance group when known. Omitted when unknown; null is allowed in the schema when clients send or receive explicit nulls.  | [optional] 

## Methods

### NewReference

`func NewReference(id string, type_ string, ) *Reference`

NewReference instantiates a new Reference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReferenceWithDefaults

`func NewReferenceWithDefaults() *Reference`

NewReferenceWithDefaults instantiates a new Reference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Reference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reference) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *Reference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Reference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Reference) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *Reference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Reference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Reference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Reference) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Reference) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Reference) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

