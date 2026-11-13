# OwnerReferenceDTO

# OwnerReferenceDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The owner id | [optional] 
**Name** | Pointer to **string** | The owner name | [optional] 
**Type** | Pointer to **string** | The type of the owner. Initially only type IDENTITY is supported | [optional] 

## Methods

### NewOwnerReferenceDTO

`func NewOwnerReferenceDTO() *OwnerReferenceDTO`

NewOwnerReferenceDTO instantiates a new OwnerReferenceDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnerReferenceDTOWithDefaults

`func NewOwnerReferenceDTOWithDefaults() *OwnerReferenceDTO`

NewOwnerReferenceDTOWithDefaults instantiates a new OwnerReferenceDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *OwnerReferenceDTO) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OwnerReferenceDTO) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OwnerReferenceDTO) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *OwnerReferenceDTO) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *OwnerReferenceDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OwnerReferenceDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OwnerReferenceDTO) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *OwnerReferenceDTO) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *OwnerReferenceDTO) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *OwnerReferenceDTO) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *OwnerReferenceDTO) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *OwnerReferenceDTO) HasType() bool`

HasType returns a boolean if a field has been set.


