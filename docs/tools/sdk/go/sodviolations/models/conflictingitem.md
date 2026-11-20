# Conflictingitem

# Conflictingitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier of the conflicting access item. | 
**Name** | Pointer to **string** | The display name of the conflicting access item. | [optional] 
**Type** | **string** | The type of access object represented by the conflicting item. | 
**SourceRef** | Pointer to [**Conflictingitemsourceref**](conflictingitemsourceref) |  | [optional] 
**Description** | Pointer to **string** | Optional human-readable description of the conflicting item. | [optional] 

## Methods

### NewConflictingitem

`func NewConflictingitem(id string, type_ string, ) *Conflictingitem`

NewConflictingitem instantiates a new Conflictingitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConflictingitemWithDefaults

`func NewConflictingitemWithDefaults() *Conflictingitem`

NewConflictingitemWithDefaults instantiates a new Conflictingitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Conflictingitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Conflictingitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Conflictingitem) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Conflictingitem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Conflictingitem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Conflictingitem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Conflictingitem) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Conflictingitem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Conflictingitem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Conflictingitem) SetType(v string)`

SetType sets Type field to given value.


### GetSourceRef

`func (o *Conflictingitem) GetSourceRef() Conflictingitemsourceref`

GetSourceRef returns the SourceRef field if non-nil, zero value otherwise.

### GetSourceRefOk

`func (o *Conflictingitem) GetSourceRefOk() (*Conflictingitemsourceref, bool)`

GetSourceRefOk returns a tuple with the SourceRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRef

`func (o *Conflictingitem) SetSourceRef(v Conflictingitemsourceref)`

SetSourceRef sets SourceRef field to given value.

### HasSourceRef

`func (o *Conflictingitem) HasSourceRef() bool`

HasSourceRef returns a boolean if a field has been set.

### GetDescription

`func (o *Conflictingitem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Conflictingitem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Conflictingitem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Conflictingitem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


