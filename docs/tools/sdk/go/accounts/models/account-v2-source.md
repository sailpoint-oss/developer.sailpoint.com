# AccountV2Source

# AccountV2Source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | The unique ID of the source. | [optional] 
**Type** | Pointer to **NullableString** | The DTO type of the source. | [optional] 
**Name** | Pointer to **NullableString** | The display name of the source. | [optional] 
**Authoritative** | Pointer to **bool** | Indicates if this account is from an authoritative source. | [optional] [default to false]
**ConnectionType** | Pointer to **NullableString** | The connection type of the source this account is from. | [optional] 

## Methods

### NewAccountV2Source

`func NewAccountV2Source() *AccountV2Source`

NewAccountV2Source instantiates a new AccountV2Source object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountV2SourceWithDefaults

`func NewAccountV2SourceWithDefaults() *AccountV2Source`

NewAccountV2SourceWithDefaults instantiates a new AccountV2Source object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountV2Source) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountV2Source) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountV2Source) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountV2Source) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *AccountV2Source) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *AccountV2Source) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetType

`func (o *AccountV2Source) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountV2Source) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountV2Source) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccountV2Source) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *AccountV2Source) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *AccountV2Source) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetName

`func (o *AccountV2Source) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountV2Source) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountV2Source) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountV2Source) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *AccountV2Source) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *AccountV2Source) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetAuthoritative

`func (o *AccountV2Source) GetAuthoritative() bool`

GetAuthoritative returns the Authoritative field if non-nil, zero value otherwise.

### GetAuthoritativeOk

`func (o *AccountV2Source) GetAuthoritativeOk() (*bool, bool)`

GetAuthoritativeOk returns a tuple with the Authoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritative

`func (o *AccountV2Source) SetAuthoritative(v bool)`

SetAuthoritative sets Authoritative field to given value.

### HasAuthoritative

`func (o *AccountV2Source) HasAuthoritative() bool`

HasAuthoritative returns a boolean if a field has been set.

### GetConnectionType

`func (o *AccountV2Source) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *AccountV2Source) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *AccountV2Source) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *AccountV2Source) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.

### SetConnectionTypeNil

`func (o *AccountV2Source) SetConnectionTypeNil(b bool)`

 SetConnectionTypeNil sets the value for ConnectionType to be an explicit nil

### UnsetConnectionType
`func (o *AccountV2Source) UnsetConnectionType()`

UnsetConnectionType ensures that no value is present for ConnectionType, not even an explicit nil

