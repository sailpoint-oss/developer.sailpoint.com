# PublicIdentityV2Manager

# PublicIdentityV2Manager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **NullableString** | Manager identity id | 
**Name** | **NullableString** | Manager alias / technical name | 
**DisplayName** | **NullableString** | Manager display name. Null when absent from the search hit. | 

## Methods

### NewPublicIdentityV2Manager

`func NewPublicIdentityV2Manager(id NullableString, name NullableString, displayName NullableString, ) *PublicIdentityV2Manager`

NewPublicIdentityV2Manager instantiates a new PublicIdentityV2Manager object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentityV2ManagerWithDefaults

`func NewPublicIdentityV2ManagerWithDefaults() *PublicIdentityV2Manager`

NewPublicIdentityV2ManagerWithDefaults instantiates a new PublicIdentityV2Manager object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PublicIdentityV2Manager) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PublicIdentityV2Manager) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PublicIdentityV2Manager) SetId(v string)`

SetId sets Id field to given value.


### SetIdNil

`func (o *PublicIdentityV2Manager) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *PublicIdentityV2Manager) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *PublicIdentityV2Manager) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PublicIdentityV2Manager) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PublicIdentityV2Manager) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *PublicIdentityV2Manager) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *PublicIdentityV2Manager) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDisplayName

`func (o *PublicIdentityV2Manager) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *PublicIdentityV2Manager) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *PublicIdentityV2Manager) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### SetDisplayNameNil

`func (o *PublicIdentityV2Manager) SetDisplayNameNil(b bool)`

 SetDisplayNameNil sets the value for DisplayName to be an explicit nil

### UnsetDisplayName
`func (o *PublicIdentityV2Manager) UnsetDisplayName()`

UnsetDisplayName ensures that no value is present for DisplayName, not even an explicit nil

