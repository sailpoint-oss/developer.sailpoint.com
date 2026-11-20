# ConnectorVariantProfile

# ConnectorVariantProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier of the connector variant profile. | [optional] 
**ConnectorType** | Pointer to **string** | Connector type of the variant profile, for example `JDBC`. | [optional] [default to ""]
**Variant** | Pointer to **string** | Variant name within the connector type, for example `MySql`. | [optional] [default to ""]

## Methods

### NewConnectorVariantProfile

`func NewConnectorVariantProfile() *ConnectorVariantProfile`

NewConnectorVariantProfile instantiates a new ConnectorVariantProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorVariantProfileWithDefaults

`func NewConnectorVariantProfileWithDefaults() *ConnectorVariantProfile`

NewConnectorVariantProfileWithDefaults instantiates a new ConnectorVariantProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ConnectorVariantProfile) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConnectorVariantProfile) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConnectorVariantProfile) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ConnectorVariantProfile) HasId() bool`

HasId returns a boolean if a field has been set.

### GetConnectorType

`func (o *ConnectorVariantProfile) GetConnectorType() string`

GetConnectorType returns the ConnectorType field if non-nil, zero value otherwise.

### GetConnectorTypeOk

`func (o *ConnectorVariantProfile) GetConnectorTypeOk() (*string, bool)`

GetConnectorTypeOk returns a tuple with the ConnectorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorType

`func (o *ConnectorVariantProfile) SetConnectorType(v string)`

SetConnectorType sets ConnectorType field to given value.

### HasConnectorType

`func (o *ConnectorVariantProfile) HasConnectorType() bool`

HasConnectorType returns a boolean if a field has been set.

### GetVariant

`func (o *ConnectorVariantProfile) GetVariant() string`

GetVariant returns the Variant field if non-nil, zero value otherwise.

### GetVariantOk

`func (o *ConnectorVariantProfile) GetVariantOk() (*string, bool)`

GetVariantOk returns a tuple with the Variant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariant

`func (o *ConnectorVariantProfile) SetVariant(v string)`

SetVariant sets Variant field to given value.

### HasVariant

`func (o *ConnectorVariantProfile) HasVariant() bool`

HasVariant returns a boolean if a field has been set.


