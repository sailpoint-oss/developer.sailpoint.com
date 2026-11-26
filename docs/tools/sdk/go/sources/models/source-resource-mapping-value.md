# SourceResourceMappingValue

# SourceResourceMappingValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetId** | Pointer to **string** | Dataset identifier that owns the resource. | [optional] 
**ResourceType** | Pointer to **string** | Resource type from source schema config. | [optional] 
**ObjectType** | Pointer to **string** | Connector object type for the resource. | [optional] 

## Methods

### NewSourceResourceMappingValue

`func NewSourceResourceMappingValue() *SourceResourceMappingValue`

NewSourceResourceMappingValue instantiates a new SourceResourceMappingValue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceResourceMappingValueWithDefaults

`func NewSourceResourceMappingValueWithDefaults() *SourceResourceMappingValue`

NewSourceResourceMappingValueWithDefaults instantiates a new SourceResourceMappingValue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDatasetId

`func (o *SourceResourceMappingValue) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *SourceResourceMappingValue) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *SourceResourceMappingValue) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *SourceResourceMappingValue) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetResourceType

`func (o *SourceResourceMappingValue) GetResourceType() string`

GetResourceType returns the ResourceType field if non-nil, zero value otherwise.

### GetResourceTypeOk

`func (o *SourceResourceMappingValue) GetResourceTypeOk() (*string, bool)`

GetResourceTypeOk returns a tuple with the ResourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceType

`func (o *SourceResourceMappingValue) SetResourceType(v string)`

SetResourceType sets ResourceType field to given value.

### HasResourceType

`func (o *SourceResourceMappingValue) HasResourceType() bool`

HasResourceType returns a boolean if a field has been set.

### GetObjectType

`func (o *SourceResourceMappingValue) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *SourceResourceMappingValue) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *SourceResourceMappingValue) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *SourceResourceMappingValue) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.


