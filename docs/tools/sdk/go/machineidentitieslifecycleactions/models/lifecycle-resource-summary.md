# LifecycleResourceSummary

# LifecycleResourceSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Internal machine identity UUID for the lifecycle target. | [optional] 
**ResourceId** | Pointer to **string** | Connector resource id for the lifecycle target. | [optional] 
**Name** | Pointer to **string** | Display name of the lifecycle target. | [optional] 
**SourceId** | Pointer to **string** | Source identifier for the lifecycle target. | [optional] 
**SourceName** | Pointer to **string** | Source name for the lifecycle target. | [optional] 
**Subtype** | Pointer to **string** | Machine identity subtype for the lifecycle target. | [optional] 

## Methods

### NewLifecycleResourceSummary

`func NewLifecycleResourceSummary() *LifecycleResourceSummary`

NewLifecycleResourceSummary instantiates a new LifecycleResourceSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecycleResourceSummaryWithDefaults

`func NewLifecycleResourceSummaryWithDefaults() *LifecycleResourceSummary`

NewLifecycleResourceSummaryWithDefaults instantiates a new LifecycleResourceSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *LifecycleResourceSummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LifecycleResourceSummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LifecycleResourceSummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LifecycleResourceSummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetResourceId

`func (o *LifecycleResourceSummary) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *LifecycleResourceSummary) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *LifecycleResourceSummary) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *LifecycleResourceSummary) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetName

`func (o *LifecycleResourceSummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LifecycleResourceSummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LifecycleResourceSummary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LifecycleResourceSummary) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSourceId

`func (o *LifecycleResourceSummary) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *LifecycleResourceSummary) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *LifecycleResourceSummary) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *LifecycleResourceSummary) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *LifecycleResourceSummary) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *LifecycleResourceSummary) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *LifecycleResourceSummary) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *LifecycleResourceSummary) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSubtype

`func (o *LifecycleResourceSummary) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *LifecycleResourceSummary) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *LifecycleResourceSummary) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.

### HasSubtype

`func (o *LifecycleResourceSummary) HasSubtype() bool`

HasSubtype returns a boolean if a field has been set.


