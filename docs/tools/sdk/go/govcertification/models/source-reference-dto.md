# SourceReferenceDTO

# SourceReferenceDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The source ID | [optional] 
**Type** | Pointer to **string** | The source type, will always be \"SOURCE\" | [optional] 
**Name** | Pointer to **string** | The source name | [optional] 

## Methods

### NewSourceReferenceDTO

`func NewSourceReferenceDTO() *SourceReferenceDTO`

NewSourceReferenceDTO instantiates a new SourceReferenceDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceReferenceDTOWithDefaults

`func NewSourceReferenceDTOWithDefaults() *SourceReferenceDTO`

NewSourceReferenceDTOWithDefaults instantiates a new SourceReferenceDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceReferenceDTO) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceReferenceDTO) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceReferenceDTO) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceReferenceDTO) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *SourceReferenceDTO) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceReferenceDTO) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceReferenceDTO) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceReferenceDTO) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *SourceReferenceDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceReferenceDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceReferenceDTO) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceReferenceDTO) HasName() bool`

HasName returns a boolean if a field has been set.


