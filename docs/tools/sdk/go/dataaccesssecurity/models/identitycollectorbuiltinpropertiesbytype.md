# Identitycollectorbuiltinpropertiesbytype

# Identitycollectorbuiltinpropertiesbytype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Identity collector type display name. | 
**Users** | **[]string** | Built-in user source attribute names that can be used in field mappings for the identity collector type. | 
**Groups** | **[]string** | Built-in group source attribute names that can be used in field mappings for the identity collector type. | 

## Methods

### NewIdentitycollectorbuiltinpropertiesbytype

`func NewIdentitycollectorbuiltinpropertiesbytype(type_ string, users []string, groups []string, ) *Identitycollectorbuiltinpropertiesbytype`

NewIdentitycollectorbuiltinpropertiesbytype instantiates a new Identitycollectorbuiltinpropertiesbytype object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycollectorbuiltinpropertiesbytypeWithDefaults

`func NewIdentitycollectorbuiltinpropertiesbytypeWithDefaults() *Identitycollectorbuiltinpropertiesbytype`

NewIdentitycollectorbuiltinpropertiesbytypeWithDefaults instantiates a new Identitycollectorbuiltinpropertiesbytype object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Identitycollectorbuiltinpropertiesbytype) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identitycollectorbuiltinpropertiesbytype) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identitycollectorbuiltinpropertiesbytype) SetType(v string)`

SetType sets Type field to given value.


### GetUsers

`func (o *Identitycollectorbuiltinpropertiesbytype) GetUsers() []string`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *Identitycollectorbuiltinpropertiesbytype) GetUsersOk() (*[]string, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *Identitycollectorbuiltinpropertiesbytype) SetUsers(v []string)`

SetUsers sets Users field to given value.


### GetGroups

`func (o *Identitycollectorbuiltinpropertiesbytype) GetGroups() []string`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *Identitycollectorbuiltinpropertiesbytype) GetGroupsOk() (*[]string, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *Identitycollectorbuiltinpropertiesbytype) SetGroups(v []string)`

SetGroups sets Groups field to given value.



