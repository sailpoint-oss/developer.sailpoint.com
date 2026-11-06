# AccountV2Owner

# AccountV2Owner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | The unique ID of the identity. | [optional] 
**Type** | Pointer to **NullableString** | The DTO type of the identity. | [optional] 
**Name** | Pointer to **NullableString** | The display name of the identity. | [optional] 
**State** | Pointer to **NullableString** | The identity state. | [optional] 

## Methods

### NewAccountV2Owner

`func NewAccountV2Owner() *AccountV2Owner`

NewAccountV2Owner instantiates a new AccountV2Owner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountV2OwnerWithDefaults

`func NewAccountV2OwnerWithDefaults() *AccountV2Owner`

NewAccountV2OwnerWithDefaults instantiates a new AccountV2Owner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountV2Owner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountV2Owner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountV2Owner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountV2Owner) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *AccountV2Owner) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *AccountV2Owner) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetType

`func (o *AccountV2Owner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountV2Owner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountV2Owner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccountV2Owner) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *AccountV2Owner) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *AccountV2Owner) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetName

`func (o *AccountV2Owner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountV2Owner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountV2Owner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountV2Owner) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *AccountV2Owner) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *AccountV2Owner) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetState

`func (o *AccountV2Owner) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *AccountV2Owner) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *AccountV2Owner) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *AccountV2Owner) HasState() bool`

HasState returns a boolean if a field has been set.

### SetStateNil

`func (o *AccountV2Owner) SetStateNil(b bool)`

 SetStateNil sets the value for State to be an explicit nil

### UnsetState
`func (o *AccountV2Owner) UnsetState()`

UnsetState ensures that no value is present for State, not even an explicit nil

