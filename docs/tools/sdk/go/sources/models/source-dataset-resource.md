# SourceDatasetResource

# SourceDatasetResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Resource identifier. Server-generated on create. | [optional] [readonly] 
**Name** | Pointer to **string** | Display name of the resource. Required on create. | [optional] 
**Features** | Pointer to **[]string** | Feature identifiers supported by this resource. | [optional] 
**Type** | Pointer to **string** | Resource type. Required on create. | [optional] 
**DatasetId** | Pointer to **string** | Dataset identifier to associate this resource with. Required on create. | [optional] 
**Schema** | Pointer to [**Schema**](schema) |  | [optional] 

## Methods

### NewSourceDatasetResource

`func NewSourceDatasetResource() *SourceDatasetResource`

NewSourceDatasetResource instantiates a new SourceDatasetResource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceDatasetResourceWithDefaults

`func NewSourceDatasetResourceWithDefaults() *SourceDatasetResource`

NewSourceDatasetResourceWithDefaults instantiates a new SourceDatasetResource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceDatasetResource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceDatasetResource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceDatasetResource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceDatasetResource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceDatasetResource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceDatasetResource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceDatasetResource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceDatasetResource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFeatures

`func (o *SourceDatasetResource) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *SourceDatasetResource) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *SourceDatasetResource) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *SourceDatasetResource) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetType

`func (o *SourceDatasetResource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceDatasetResource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceDatasetResource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceDatasetResource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDatasetId

`func (o *SourceDatasetResource) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *SourceDatasetResource) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *SourceDatasetResource) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *SourceDatasetResource) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetSchema

`func (o *SourceDatasetResource) GetSchema() Schema`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *SourceDatasetResource) GetSchemaOk() (*Schema, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *SourceDatasetResource) SetSchema(v Schema)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *SourceDatasetResource) HasSchema() bool`

HasSchema returns a boolean if a field has been set.


