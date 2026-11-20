# Createidentitycollectorrequest

# Createidentitycollectorrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The display name for the new identity collector. Must be unique within the tenant. | 
**SourceId** | **string** | The identifier of the source to create the identity collector for, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. The identity collector type is derived from this source. | 
**Users** | Pointer to [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [optional] 
**Groups** | Pointer to [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [optional] 

## Methods

### NewCreateidentitycollectorrequest

`func NewCreateidentitycollectorrequest(name string, sourceId string, ) *Createidentitycollectorrequest`

NewCreateidentitycollectorrequest instantiates a new Createidentitycollectorrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateidentitycollectorrequestWithDefaults

`func NewCreateidentitycollectorrequestWithDefaults() *Createidentitycollectorrequest`

NewCreateidentitycollectorrequestWithDefaults instantiates a new Createidentitycollectorrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Createidentitycollectorrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Createidentitycollectorrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Createidentitycollectorrequest) SetName(v string)`

SetName sets Name field to given value.


### GetSourceId

`func (o *Createidentitycollectorrequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Createidentitycollectorrequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Createidentitycollectorrequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetUsers

`func (o *Createidentitycollectorrequest) GetUsers() Identitycollectorcollectionsettings`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *Createidentitycollectorrequest) GetUsersOk() (*Identitycollectorcollectionsettings, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *Createidentitycollectorrequest) SetUsers(v Identitycollectorcollectionsettings)`

SetUsers sets Users field to given value.

### HasUsers

`func (o *Createidentitycollectorrequest) HasUsers() bool`

HasUsers returns a boolean if a field has been set.

### GetGroups

`func (o *Createidentitycollectorrequest) GetGroups() Identitycollectorcollectionsettings`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *Createidentitycollectorrequest) GetGroupsOk() (*Identitycollectorcollectionsettings, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *Createidentitycollectorrequest) SetGroups(v Identitycollectorcollectionsettings)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *Createidentitycollectorrequest) HasGroups() bool`

HasGroups returns a boolean if a field has been set.


