# SubtypeTargetSummary

# SubtypeTargetSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** | Pointer to **SubtypeTargetType** |  | [optional] 
**TargetId** | Pointer to **string** | Scope key. Connector type for `CONNECTOR`. Source id for `SOURCE`. | [optional] 
**TargetName** | Pointer to **string** | Display label. Never null; falls back to `targetId`. | [optional] 
**SubtypeCount** | Pointer to **int32** | Number of subtypes in this target group. | [optional] 
**SourceCount** | Pointer to **int32** | Number of sources of this connector type for a `CONNECTOR` row. `1` on a `SOURCE` row. Sortable. Not filterable. | [optional] 
**LastModified** | Pointer to **SailPointTime** | Latest `modified` timestamp in the `targetId` group for `CONNECTOR`, or that subtype row's `modified` for `SOURCE`. Not filterable or sortable. | [optional] [readonly] 

## Methods

### NewSubtypeTargetSummary

`func NewSubtypeTargetSummary() *SubtypeTargetSummary`

NewSubtypeTargetSummary instantiates a new SubtypeTargetSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubtypeTargetSummaryWithDefaults

`func NewSubtypeTargetSummaryWithDefaults() *SubtypeTargetSummary`

NewSubtypeTargetSummaryWithDefaults instantiates a new SubtypeTargetSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetType

`func (o *SubtypeTargetSummary) GetTargetType() SubtypeTargetType`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *SubtypeTargetSummary) GetTargetTypeOk() (*SubtypeTargetType, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *SubtypeTargetSummary) SetTargetType(v SubtypeTargetType)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *SubtypeTargetSummary) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *SubtypeTargetSummary) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *SubtypeTargetSummary) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *SubtypeTargetSummary) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.

### HasTargetId

`func (o *SubtypeTargetSummary) HasTargetId() bool`

HasTargetId returns a boolean if a field has been set.

### GetTargetName

`func (o *SubtypeTargetSummary) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *SubtypeTargetSummary) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *SubtypeTargetSummary) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *SubtypeTargetSummary) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetSubtypeCount

`func (o *SubtypeTargetSummary) GetSubtypeCount() int32`

GetSubtypeCount returns the SubtypeCount field if non-nil, zero value otherwise.

### GetSubtypeCountOk

`func (o *SubtypeTargetSummary) GetSubtypeCountOk() (*int32, bool)`

GetSubtypeCountOk returns a tuple with the SubtypeCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypeCount

`func (o *SubtypeTargetSummary) SetSubtypeCount(v int32)`

SetSubtypeCount sets SubtypeCount field to given value.

### HasSubtypeCount

`func (o *SubtypeTargetSummary) HasSubtypeCount() bool`

HasSubtypeCount returns a boolean if a field has been set.

### GetSourceCount

`func (o *SubtypeTargetSummary) GetSourceCount() int32`

GetSourceCount returns the SourceCount field if non-nil, zero value otherwise.

### GetSourceCountOk

`func (o *SubtypeTargetSummary) GetSourceCountOk() (*int32, bool)`

GetSourceCountOk returns a tuple with the SourceCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCount

`func (o *SubtypeTargetSummary) SetSourceCount(v int32)`

SetSourceCount sets SourceCount field to given value.

### HasSourceCount

`func (o *SubtypeTargetSummary) HasSourceCount() bool`

HasSourceCount returns a boolean if a field has been set.

### GetLastModified

`func (o *SubtypeTargetSummary) GetLastModified() SailPointTime`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *SubtypeTargetSummary) GetLastModifiedOk() (*SailPointTime, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *SubtypeTargetSummary) SetLastModified(v SailPointTime)`

SetLastModified sets LastModified field to given value.

### HasLastModified

`func (o *SubtypeTargetSummary) HasLastModified() bool`

HasLastModified returns a boolean if a field has been set.


