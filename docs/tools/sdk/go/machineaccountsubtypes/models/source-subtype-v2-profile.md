# SourceSubtypeV2Profile

# SourceSubtypeV2Profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the connector variant profile. | [optional] 
**ConnectorType** | Pointer to **string** | Connector type of the variant. | [optional] 
**Variant** | Pointer to **string** | Name of the connector variant. | [optional] 

## Methods

### NewSourceSubtypeV2Profile

`func NewSourceSubtypeV2Profile() *SourceSubtypeV2Profile`

NewSourceSubtypeV2Profile instantiates a new SourceSubtypeV2Profile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceSubtypeV2ProfileWithDefaults

`func NewSourceSubtypeV2ProfileWithDefaults() *SourceSubtypeV2Profile`

NewSourceSubtypeV2ProfileWithDefaults instantiates a new SourceSubtypeV2Profile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceSubtypeV2Profile) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceSubtypeV2Profile) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceSubtypeV2Profile) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceSubtypeV2Profile) HasId() bool`

HasId returns a boolean if a field has been set.

### GetConnectorType

`func (o *SourceSubtypeV2Profile) GetConnectorType() string`

GetConnectorType returns the ConnectorType field if non-nil, zero value otherwise.

### GetConnectorTypeOk

`func (o *SourceSubtypeV2Profile) GetConnectorTypeOk() (*string, bool)`

GetConnectorTypeOk returns a tuple with the ConnectorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorType

`func (o *SourceSubtypeV2Profile) SetConnectorType(v string)`

SetConnectorType sets ConnectorType field to given value.

### HasConnectorType

`func (o *SourceSubtypeV2Profile) HasConnectorType() bool`

HasConnectorType returns a boolean if a field has been set.

### GetVariant

`func (o *SourceSubtypeV2Profile) GetVariant() string`

GetVariant returns the Variant field if non-nil, zero value otherwise.

### GetVariantOk

`func (o *SourceSubtypeV2Profile) GetVariantOk() (*string, bool)`

GetVariantOk returns a tuple with the Variant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariant

`func (o *SourceSubtypeV2Profile) SetVariant(v string)`

SetVariant sets Variant field to given value.

### HasVariant

`func (o *SourceSubtypeV2Profile) HasVariant() bool`

HasVariant returns a boolean if a field has been set.


