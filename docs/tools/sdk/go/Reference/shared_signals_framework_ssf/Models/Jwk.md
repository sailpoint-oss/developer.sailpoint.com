---
id: v1-jwk
title: Jwk
pagination_label: Jwk
sidebar_label: Jwk
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jwk', 'V1Jwk'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/jwk
tags: ['SDK', 'Software Development Kit', 'Jwk', 'V1Jwk']
---

# Jwk

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

### NewJwk

`func NewJwk() *Jwk`

NewJwk instantiates a new Jwk object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJwkWithDefaults

`func NewJwkWithDefaults() *Jwk`

NewJwkWithDefaults instantiates a new Jwk object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlg

`func (o *Jwk) GetAlg() string`

GetAlg returns the Alg field if non-nil, zero value otherwise.

### GetAlgOk

`func (o *Jwk) GetAlgOk() (*string, bool)`

GetAlgOk returns a tuple with the Alg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlg

`func (o *Jwk) SetAlg(v string)`

SetAlg sets Alg field to given value.

### HasAlg

`func (o *Jwk) HasAlg() bool`

HasAlg returns a boolean if a field has been set.

### GetE

`func (o *Jwk) GetE() string`

GetE returns the E field if non-nil, zero value otherwise.

### GetEOk

`func (o *Jwk) GetEOk() (*string, bool)`

GetEOk returns a tuple with the E field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetE

`func (o *Jwk) SetE(v string)`

SetE sets E field to given value.

### HasE

`func (o *Jwk) HasE() bool`

HasE returns a boolean if a field has been set.

### GetKid

`func (o *Jwk) GetKid() string`

GetKid returns the Kid field if non-nil, zero value otherwise.

### GetKidOk

`func (o *Jwk) GetKidOk() (*string, bool)`

GetKidOk returns a tuple with the Kid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKid

`func (o *Jwk) SetKid(v string)`

SetKid sets Kid field to given value.

### HasKid

`func (o *Jwk) HasKid() bool`

HasKid returns a boolean if a field has been set.

### GetKty

`func (o *Jwk) GetKty() string`

GetKty returns the Kty field if non-nil, zero value otherwise.

### GetKtyOk

`func (o *Jwk) GetKtyOk() (*string, bool)`

GetKtyOk returns a tuple with the Kty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKty

`func (o *Jwk) SetKty(v string)`

SetKty sets Kty field to given value.

### HasKty

`func (o *Jwk) HasKty() bool`

HasKty returns a boolean if a field has been set.

### GetN

`func (o *Jwk) GetN() string`

GetN returns the N field if non-nil, zero value otherwise.

### GetNOk

`func (o *Jwk) GetNOk() (*string, bool)`

GetNOk returns a tuple with the N field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetN

`func (o *Jwk) SetN(v string)`

SetN sets N field to given value.

### HasN

`func (o *Jwk) HasN() bool`

HasN returns a boolean if a field has been set.

### GetUse

`func (o *Jwk) GetUse() string`

GetUse returns the Use field if non-nil, zero value otherwise.

### GetUseOk

`func (o *Jwk) GetUseOk() (*string, bool)`

GetUseOk returns a tuple with the Use field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUse

`func (o *Jwk) SetUse(v string)`

SetUse sets Use field to given value.

### HasUse

`func (o *Jwk) HasUse() bool`

HasUse returns a boolean if a field has been set.


