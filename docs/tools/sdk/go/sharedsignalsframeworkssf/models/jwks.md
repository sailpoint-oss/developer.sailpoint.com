# JWKS

# JWKS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Keys** | [**[]JWK**](jwk) | Array of JSON Web Keys. | 

## Methods

### NewJWKS

`func NewJWKS(keys []JWK, ) *JWKS`

NewJWKS instantiates a new JWKS object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJWKSWithDefaults

`func NewJWKSWithDefaults() *JWKS`

NewJWKSWithDefaults instantiates a new JWKS object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeys

`func (o *JWKS) GetKeys() []JWK`

GetKeys returns the Keys field if non-nil, zero value otherwise.

### GetKeysOk

`func (o *JWKS) GetKeysOk() (*[]JWK, bool)`

GetKeysOk returns a tuple with the Keys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeys

`func (o *JWKS) SetKeys(v []JWK)`

SetKeys sets Keys field to given value.



