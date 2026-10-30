# Identitycollectorlistitem

# Identitycollectorlistitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier of the identity collector. | [optional] 
**Name** | Pointer to **string** | The display name of the identity collector. | [optional] 
**Type** | Pointer to **string** | The identity collector type, derived from its underlying source. | [optional] 
**SourceId** | Pointer to **string** | The identifier of the source the identity collector is associated with, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. | [optional] 
**Users** | Pointer to [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [optional] 
**Groups** | Pointer to [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [optional] 

## Methods

### NewIdentitycollectorlistitem

`func NewIdentitycollectorlistitem() *Identitycollectorlistitem`

NewIdentitycollectorlistitem instantiates a new Identitycollectorlistitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycollectorlistitemWithDefaults

`func NewIdentitycollectorlistitemWithDefaults() *Identitycollectorlistitem`

NewIdentitycollectorlistitemWithDefaults instantiates a new Identitycollectorlistitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identitycollectorlistitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identitycollectorlistitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identitycollectorlistitem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identitycollectorlistitem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identitycollectorlistitem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identitycollectorlistitem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identitycollectorlistitem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identitycollectorlistitem) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Identitycollectorlistitem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identitycollectorlistitem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identitycollectorlistitem) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Identitycollectorlistitem) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSourceId

`func (o *Identitycollectorlistitem) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Identitycollectorlistitem) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Identitycollectorlistitem) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Identitycollectorlistitem) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetUsers

`func (o *Identitycollectorlistitem) GetUsers() Identitycollectorcollectionsettings`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *Identitycollectorlistitem) GetUsersOk() (*Identitycollectorcollectionsettings, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *Identitycollectorlistitem) SetUsers(v Identitycollectorcollectionsettings)`

SetUsers sets Users field to given value.

### HasUsers

`func (o *Identitycollectorlistitem) HasUsers() bool`

HasUsers returns a boolean if a field has been set.

### GetGroups

`func (o *Identitycollectorlistitem) GetGroups() Identitycollectorcollectionsettings`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *Identitycollectorlistitem) GetGroupsOk() (*Identitycollectorcollectionsettings, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *Identitycollectorlistitem) SetGroups(v Identitycollectorcollectionsettings)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *Identitycollectorlistitem) HasGroups() bool`

HasGroups returns a boolean if a field has been set.


