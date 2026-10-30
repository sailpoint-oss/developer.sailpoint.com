# AccessProfileReference

# AccessProfileReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id of the Access Profile | [optional] 
**Name** | Pointer to **string** | Name of the Access Profile | [optional] 
**Description** | Pointer to **string** | Information about the Access Profile | [optional] 

## Methods

### NewAccessProfileReference

`func NewAccessProfileReference() *AccessProfileReference`

NewAccessProfileReference instantiates a new AccessProfileReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileReferenceWithDefaults

`func NewAccessProfileReferenceWithDefaults() *AccessProfileReference`

NewAccessProfileReferenceWithDefaults instantiates a new AccessProfileReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfileReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfileReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfileReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfileReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessProfileReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfileReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfileReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessProfileReference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessProfileReference) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessProfileReference) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessProfileReference) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessProfileReference) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


