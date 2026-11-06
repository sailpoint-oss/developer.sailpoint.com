# AccountV2CorrelatedEntity

# AccountV2CorrelatedEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **DtoType** |  | [optional] 
**Id** | Pointer to **NullableString** | The unique ID of the correlated entity. | [optional] 
**Name** | Pointer to **NullableString** | The display name of the correlated entity. | [optional] 
**State** | Pointer to **NullableString** | The identity state. Populated for IDENTITY entries only. | [optional] 

## Methods

### NewAccountV2CorrelatedEntity

`func NewAccountV2CorrelatedEntity() *AccountV2CorrelatedEntity`

NewAccountV2CorrelatedEntity instantiates a new AccountV2CorrelatedEntity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountV2CorrelatedEntityWithDefaults

`func NewAccountV2CorrelatedEntityWithDefaults() *AccountV2CorrelatedEntity`

NewAccountV2CorrelatedEntityWithDefaults instantiates a new AccountV2CorrelatedEntity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountV2CorrelatedEntity) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountV2CorrelatedEntity) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountV2CorrelatedEntity) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *AccountV2CorrelatedEntity) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccountV2CorrelatedEntity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountV2CorrelatedEntity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountV2CorrelatedEntity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountV2CorrelatedEntity) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *AccountV2CorrelatedEntity) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *AccountV2CorrelatedEntity) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *AccountV2CorrelatedEntity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountV2CorrelatedEntity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountV2CorrelatedEntity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountV2CorrelatedEntity) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *AccountV2CorrelatedEntity) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *AccountV2CorrelatedEntity) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetState

`func (o *AccountV2CorrelatedEntity) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *AccountV2CorrelatedEntity) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *AccountV2CorrelatedEntity) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *AccountV2CorrelatedEntity) HasState() bool`

HasState returns a boolean if a field has been set.

### SetStateNil

`func (o *AccountV2CorrelatedEntity) SetStateNil(b bool)`

 SetStateNil sets the value for State to be an explicit nil

### UnsetState
`func (o *AccountV2CorrelatedEntity) UnsetState()`

UnsetState ensures that no value is present for State, not even an explicit nil

