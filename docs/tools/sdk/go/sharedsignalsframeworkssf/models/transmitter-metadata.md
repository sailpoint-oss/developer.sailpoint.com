# TransmitterMetadata

# TransmitterMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SpecVersion** | Pointer to **string** | Version of the SSF specification supported. | [optional] 
**Issuer** | Pointer to **string** | Base URL of the transmitter (issuer). | [optional] 
**JwksUri** | Pointer to **string** | URL of the transmitter's JSON Web Key Set. | [optional] 
**DeliveryMethodsSupported** | Pointer to **[]string** | Supported delivery methods (e.g. push URN). | [optional] 
**ConfigurationEndpoint** | Pointer to **string** | Endpoint for stream configuration (create, read, update, replace, delete). | [optional] 
**StatusEndpoint** | Pointer to **string** | Endpoint for reading and updating stream status. | [optional] 
**VerificationEndpoint** | Pointer to **string** | Endpoint for receiver verification. | [optional] 
**AuthorizationSchemes** | Pointer to [**[]AuthorizationScheme**](authorization-scheme) | Supported authorization schemes (e.g. OAuth2, Bearer). | [optional] 

## Methods

### NewTransmitterMetadata

`func NewTransmitterMetadata() *TransmitterMetadata`

NewTransmitterMetadata instantiates a new TransmitterMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransmitterMetadataWithDefaults

`func NewTransmitterMetadataWithDefaults() *TransmitterMetadata`

NewTransmitterMetadataWithDefaults instantiates a new TransmitterMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSpecVersion

`func (o *TransmitterMetadata) GetSpecVersion() string`

GetSpecVersion returns the SpecVersion field if non-nil, zero value otherwise.

### GetSpecVersionOk

`func (o *TransmitterMetadata) GetSpecVersionOk() (*string, bool)`

GetSpecVersionOk returns a tuple with the SpecVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecVersion

`func (o *TransmitterMetadata) SetSpecVersion(v string)`

SetSpecVersion sets SpecVersion field to given value.

### HasSpecVersion

`func (o *TransmitterMetadata) HasSpecVersion() bool`

HasSpecVersion returns a boolean if a field has been set.

### GetIssuer

`func (o *TransmitterMetadata) GetIssuer() string`

GetIssuer returns the Issuer field if non-nil, zero value otherwise.

### GetIssuerOk

`func (o *TransmitterMetadata) GetIssuerOk() (*string, bool)`

GetIssuerOk returns a tuple with the Issuer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuer

`func (o *TransmitterMetadata) SetIssuer(v string)`

SetIssuer sets Issuer field to given value.

### HasIssuer

`func (o *TransmitterMetadata) HasIssuer() bool`

HasIssuer returns a boolean if a field has been set.

### GetJwksUri

`func (o *TransmitterMetadata) GetJwksUri() string`

GetJwksUri returns the JwksUri field if non-nil, zero value otherwise.

### GetJwksUriOk

`func (o *TransmitterMetadata) GetJwksUriOk() (*string, bool)`

GetJwksUriOk returns a tuple with the JwksUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJwksUri

`func (o *TransmitterMetadata) SetJwksUri(v string)`

SetJwksUri sets JwksUri field to given value.

### HasJwksUri

`func (o *TransmitterMetadata) HasJwksUri() bool`

HasJwksUri returns a boolean if a field has been set.

### GetDeliveryMethodsSupported

`func (o *TransmitterMetadata) GetDeliveryMethodsSupported() []string`

GetDeliveryMethodsSupported returns the DeliveryMethodsSupported field if non-nil, zero value otherwise.

### GetDeliveryMethodsSupportedOk

`func (o *TransmitterMetadata) GetDeliveryMethodsSupportedOk() (*[]string, bool)`

GetDeliveryMethodsSupportedOk returns a tuple with the DeliveryMethodsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryMethodsSupported

`func (o *TransmitterMetadata) SetDeliveryMethodsSupported(v []string)`

SetDeliveryMethodsSupported sets DeliveryMethodsSupported field to given value.

### HasDeliveryMethodsSupported

`func (o *TransmitterMetadata) HasDeliveryMethodsSupported() bool`

HasDeliveryMethodsSupported returns a boolean if a field has been set.

### GetConfigurationEndpoint

`func (o *TransmitterMetadata) GetConfigurationEndpoint() string`

GetConfigurationEndpoint returns the ConfigurationEndpoint field if non-nil, zero value otherwise.

### GetConfigurationEndpointOk

`func (o *TransmitterMetadata) GetConfigurationEndpointOk() (*string, bool)`

GetConfigurationEndpointOk returns a tuple with the ConfigurationEndpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigurationEndpoint

`func (o *TransmitterMetadata) SetConfigurationEndpoint(v string)`

SetConfigurationEndpoint sets ConfigurationEndpoint field to given value.

### HasConfigurationEndpoint

`func (o *TransmitterMetadata) HasConfigurationEndpoint() bool`

HasConfigurationEndpoint returns a boolean if a field has been set.

### GetStatusEndpoint

`func (o *TransmitterMetadata) GetStatusEndpoint() string`

GetStatusEndpoint returns the StatusEndpoint field if non-nil, zero value otherwise.

### GetStatusEndpointOk

`func (o *TransmitterMetadata) GetStatusEndpointOk() (*string, bool)`

GetStatusEndpointOk returns a tuple with the StatusEndpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusEndpoint

`func (o *TransmitterMetadata) SetStatusEndpoint(v string)`

SetStatusEndpoint sets StatusEndpoint field to given value.

### HasStatusEndpoint

`func (o *TransmitterMetadata) HasStatusEndpoint() bool`

HasStatusEndpoint returns a boolean if a field has been set.

### GetVerificationEndpoint

`func (o *TransmitterMetadata) GetVerificationEndpoint() string`

GetVerificationEndpoint returns the VerificationEndpoint field if non-nil, zero value otherwise.

### GetVerificationEndpointOk

`func (o *TransmitterMetadata) GetVerificationEndpointOk() (*string, bool)`

GetVerificationEndpointOk returns a tuple with the VerificationEndpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationEndpoint

`func (o *TransmitterMetadata) SetVerificationEndpoint(v string)`

SetVerificationEndpoint sets VerificationEndpoint field to given value.

### HasVerificationEndpoint

`func (o *TransmitterMetadata) HasVerificationEndpoint() bool`

HasVerificationEndpoint returns a boolean if a field has been set.

### GetAuthorizationSchemes

`func (o *TransmitterMetadata) GetAuthorizationSchemes() []AuthorizationScheme`

GetAuthorizationSchemes returns the AuthorizationSchemes field if non-nil, zero value otherwise.

### GetAuthorizationSchemesOk

`func (o *TransmitterMetadata) GetAuthorizationSchemesOk() (*[]AuthorizationScheme, bool)`

GetAuthorizationSchemesOk returns a tuple with the AuthorizationSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationSchemes

`func (o *TransmitterMetadata) SetAuthorizationSchemes(v []AuthorizationScheme)`

SetAuthorizationSchemes sets AuthorizationSchemes field to given value.

### HasAuthorizationSchemes

`func (o *TransmitterMetadata) HasAuthorizationSchemes() bool`

HasAuthorizationSchemes returns a boolean if a field has been set.


