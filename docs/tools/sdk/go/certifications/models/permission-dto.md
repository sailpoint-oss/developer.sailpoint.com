# PermissionDTO

# PermissionDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rights** | Pointer to **[]string** | All the rights (e.g. actions) that this permission allows on the target | [optional] [readonly] 
**Target** | Pointer to **string** | The target the permission would grants rights on. | [optional] [readonly] 

## Methods

### NewPermissionDTO

`func NewPermissionDTO() *PermissionDTO`

NewPermissionDTO instantiates a new PermissionDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPermissionDTOWithDefaults

`func NewPermissionDTOWithDefaults() *PermissionDTO`

NewPermissionDTOWithDefaults instantiates a new PermissionDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRights

`func (o *PermissionDTO) GetRights() []string`

GetRights returns the Rights field if non-nil, zero value otherwise.

### GetRightsOk

`func (o *PermissionDTO) GetRightsOk() (*[]string, bool)`

GetRightsOk returns a tuple with the Rights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRights

`func (o *PermissionDTO) SetRights(v []string)`

SetRights sets Rights field to given value.

### HasRights

`func (o *PermissionDTO) HasRights() bool`

HasRights returns a boolean if a field has been set.

### GetTarget

`func (o *PermissionDTO) GetTarget() string`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *PermissionDTO) GetTargetOk() (*string, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *PermissionDTO) SetTarget(v string)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *PermissionDTO) HasTarget() bool`

HasTarget returns a boolean if a field has been set.


