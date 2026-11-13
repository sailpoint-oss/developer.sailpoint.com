# JWK

# JWK

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alg** | Pointer to **string** | Algorithm intended for use with the key (e.g. RS256). | [optional] 
**E** | Pointer to **string** | RSA public exponent (Base64url encoded). | [optional] 
**Kid** | Pointer to **string** | Key ID - unique identifier for the key. | [optional] 
**Kty** | Pointer to **string** | Key type (e.g. RSA). | [optional] 
**N** | Pointer to **string** | RSA modulus (Base64url encoded). | [optional] 
**Use** | Pointer to **string** | Intended use of the key (e.g. sig for signature verification). | [optional] 

## Methods

### NewJWK

`func NewJWK() *JWK`

NewJWK instantiates a new JWK object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJWKWithDefaults

`func NewJWKWithDefaults() *JWK`

NewJWKWithDefaults instantiates a new JWK object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlg

`func (o *JWK) GetAlg() string`

GetAlg returns the Alg field if non-nil, zero value otherwise.

### GetAlgOk

`func (o *JWK) GetAlgOk() (*string, bool)`

GetAlgOk returns a tuple with the Alg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlg

`func (o *JWK) SetAlg(v string)`

SetAlg sets Alg field to given value.

### HasAlg

`func (o *JWK) HasAlg() bool`

HasAlg returns a boolean if a field has been set.

### GetE

`func (o *JWK) GetE() string`

GetE returns the E field if non-nil, zero value otherwise.

### GetEOk

`func (o *JWK) GetEOk() (*string, bool)`

GetEOk returns a tuple with the E field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetE

`func (o *JWK) SetE(v string)`

SetE sets E field to given value.

### HasE

`func (o *JWK) HasE() bool`

HasE returns a boolean if a field has been set.

### GetKid

`func (o *JWK) GetKid() string`

GetKid returns the Kid field if non-nil, zero value otherwise.

### GetKidOk

`func (o *JWK) GetKidOk() (*string, bool)`

GetKidOk returns a tuple with the Kid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKid

`func (o *JWK) SetKid(v string)`

SetKid sets Kid field to given value.

### HasKid

`func (o *JWK) HasKid() bool`

HasKid returns a boolean if a field has been set.

### GetKty

`func (o *JWK) GetKty() string`

GetKty returns the Kty field if non-nil, zero value otherwise.

### GetKtyOk

`func (o *JWK) GetKtyOk() (*string, bool)`

GetKtyOk returns a tuple with the Kty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKty

`func (o *JWK) SetKty(v string)`

SetKty sets Kty field to given value.

### HasKty

`func (o *JWK) HasKty() bool`

HasKty returns a boolean if a field has been set.

### GetN

`func (o *JWK) GetN() string`

GetN returns the N field if non-nil, zero value otherwise.

### GetNOk

`func (o *JWK) GetNOk() (*string, bool)`

GetNOk returns a tuple with the N field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetN

`func (o *JWK) SetN(v string)`

SetN sets N field to given value.

### HasN

`func (o *JWK) HasN() bool`

HasN returns a boolean if a field has been set.

### GetUse

`func (o *JWK) GetUse() string`

GetUse returns the Use field if non-nil, zero value otherwise.

### GetUseOk

`func (o *JWK) GetUseOk() (*string, bool)`

GetUseOk returns a tuple with the Use field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUse

`func (o *JWK) SetUse(v string)`

SetUse sets Use field to given value.

### HasUse

`func (o *JWK) HasUse() bool`

HasUse returns a boolean if a field has been set.


