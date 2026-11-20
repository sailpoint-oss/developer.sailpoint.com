# SegmentMembership

# SegmentMembership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Segments** | Pointer to **[]string** | List of segment ids that the identity is associated with. | [optional] 
**AllAccessScopes** | Pointer to **[]ScopeType** | They type of scopes that are assigned to the identity. | [optional] 
**RefreshBy** | Pointer to **SailPointTime** | Date time string that lets you know when the membership data is going to be refreshed. | [optional] 

## Methods

### NewSegmentMembership

`func NewSegmentMembership() *SegmentMembership`

NewSegmentMembership instantiates a new SegmentMembership object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSegmentMembershipWithDefaults

`func NewSegmentMembershipWithDefaults() *SegmentMembership`

NewSegmentMembershipWithDefaults instantiates a new SegmentMembership object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSegments

`func (o *SegmentMembership) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *SegmentMembership) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *SegmentMembership) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *SegmentMembership) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### GetAllAccessScopes

`func (o *SegmentMembership) GetAllAccessScopes() []ScopeType`

GetAllAccessScopes returns the AllAccessScopes field if non-nil, zero value otherwise.

### GetAllAccessScopesOk

`func (o *SegmentMembership) GetAllAccessScopesOk() (*[]ScopeType, bool)`

GetAllAccessScopesOk returns a tuple with the AllAccessScopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllAccessScopes

`func (o *SegmentMembership) SetAllAccessScopes(v []ScopeType)`

SetAllAccessScopes sets AllAccessScopes field to given value.

### HasAllAccessScopes

`func (o *SegmentMembership) HasAllAccessScopes() bool`

HasAllAccessScopes returns a boolean if a field has been set.

### GetRefreshBy

`func (o *SegmentMembership) GetRefreshBy() SailPointTime`

GetRefreshBy returns the RefreshBy field if non-nil, zero value otherwise.

### GetRefreshByOk

`func (o *SegmentMembership) GetRefreshByOk() (*SailPointTime, bool)`

GetRefreshByOk returns a tuple with the RefreshBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshBy

`func (o *SegmentMembership) SetRefreshBy(v SailPointTime)`

SetRefreshBy sets RefreshBy field to given value.

### HasRefreshBy

`func (o *SegmentMembership) HasRefreshBy() bool`

HasRefreshBy returns a boolean if a field has been set.


