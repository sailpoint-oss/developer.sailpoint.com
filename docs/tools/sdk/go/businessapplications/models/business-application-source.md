# BusinessApplicationSource

# BusinessApplicationSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **DtoType** |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewBusinessApplicationSource

`func NewBusinessApplicationSource() *BusinessApplicationSource`

NewBusinessApplicationSource instantiates a new BusinessApplicationSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessApplicationSourceWithDefaults

`func NewBusinessApplicationSourceWithDefaults() *BusinessApplicationSource`

NewBusinessApplicationSourceWithDefaults instantiates a new BusinessApplicationSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *BusinessApplicationSource) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BusinessApplicationSource) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BusinessApplicationSource) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *BusinessApplicationSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *BusinessApplicationSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BusinessApplicationSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BusinessApplicationSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BusinessApplicationSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BusinessApplicationSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BusinessApplicationSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BusinessApplicationSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BusinessApplicationSource) HasName() bool`

HasName returns a boolean if a field has been set.


