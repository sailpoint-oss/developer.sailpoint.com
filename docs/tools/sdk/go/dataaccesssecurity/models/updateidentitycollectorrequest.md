# Updateidentitycollectorrequest

# Updateidentitycollectorrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The display name of the identity collector. Must be unique within the tenant. | 
**SourceId** | **string** | The identifier of the associated source, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. This value cannot be modified for an existing identity collector and must match the current value. | 
**Type** | **string** | The identity collector type. This value cannot be modified for an existing identity collector and must match the current value. | 
**Users** | [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | 
**Groups** | [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | 

## Methods

### NewUpdateidentitycollectorrequest

`func NewUpdateidentitycollectorrequest(name string, sourceId string, type_ string, users Identitycollectorcollectionsettings, groups Identitycollectorcollectionsettings, ) *Updateidentitycollectorrequest`

NewUpdateidentitycollectorrequest instantiates a new Updateidentitycollectorrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateidentitycollectorrequestWithDefaults

`func NewUpdateidentitycollectorrequestWithDefaults() *Updateidentitycollectorrequest`

NewUpdateidentitycollectorrequestWithDefaults instantiates a new Updateidentitycollectorrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Updateidentitycollectorrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Updateidentitycollectorrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Updateidentitycollectorrequest) SetName(v string)`

SetName sets Name field to given value.


### GetSourceId

`func (o *Updateidentitycollectorrequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Updateidentitycollectorrequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Updateidentitycollectorrequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetType

`func (o *Updateidentitycollectorrequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Updateidentitycollectorrequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Updateidentitycollectorrequest) SetType(v string)`

SetType sets Type field to given value.


### GetUsers

`func (o *Updateidentitycollectorrequest) GetUsers() Identitycollectorcollectionsettings`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *Updateidentitycollectorrequest) GetUsersOk() (*Identitycollectorcollectionsettings, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *Updateidentitycollectorrequest) SetUsers(v Identitycollectorcollectionsettings)`

SetUsers sets Users field to given value.


### GetGroups

`func (o *Updateidentitycollectorrequest) GetGroups() Identitycollectorcollectionsettings`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *Updateidentitycollectorrequest) GetGroupsOk() (*Identitycollectorcollectionsettings, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *Updateidentitycollectorrequest) SetGroups(v Identitycollectorcollectionsettings)`

SetGroups sets Groups field to given value.



