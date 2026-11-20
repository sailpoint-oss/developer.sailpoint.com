# SourceDatasetResourceReference

# SourceDatasetResourceReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Resource identifier. | [optional] 
**Name** | Pointer to **string** | Display name of the resource. | [optional] 
**Type** | Pointer to **string** | Resource type from source schema config. | [optional] 

## Methods

### NewSourceDatasetResourceReference

`func NewSourceDatasetResourceReference() *SourceDatasetResourceReference`

NewSourceDatasetResourceReference instantiates a new SourceDatasetResourceReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceDatasetResourceReferenceWithDefaults

`func NewSourceDatasetResourceReferenceWithDefaults() *SourceDatasetResourceReference`

NewSourceDatasetResourceReferenceWithDefaults instantiates a new SourceDatasetResourceReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceDatasetResourceReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceDatasetResourceReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceDatasetResourceReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceDatasetResourceReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceDatasetResourceReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceDatasetResourceReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceDatasetResourceReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceDatasetResourceReference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *SourceDatasetResourceReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceDatasetResourceReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceDatasetResourceReference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceDatasetResourceReference) HasType() bool`

HasType returns a boolean if a field has been set.


