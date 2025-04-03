---
id: v2025-identity-certified
title: IdentityCertified
pagination_label: IdentityCertified
sidebar_label: IdentityCertified
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityCertified', 'V2025IdentityCertified'] 
slug: /tools/sdk/go/v2025/models/identity-certified
tags: ['SDK', 'Software Development Kit', 'IdentityCertified', 'V2025IdentityCertified']
---

# IdentityCertified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationId** | Pointer to **string** | the id of the certification item | [optional] 
**CertificationName** | Pointer to **string** | the certification item name | [optional] 
**SignedDate** | Pointer to **string** | the date ceritification was signed | [optional] 
**Certifiers** | Pointer to [**[]CertifierResponse**](certifier-response) | this field is deprecated and may go away | [optional] 
**Reviewers** | Pointer to [**[]CertifierResponse**](certifier-response) | The list of identities who review this certification | [optional] 
**Signer** | Pointer to [**CertifierResponse**](certifier-response) |  | [optional] 
**EventType** | Pointer to **string** | the event type | [optional] 
**Dt** | Pointer to **string** | the date of event | [optional] 

## Methods

### NewIdentityCertified

`func NewIdentityCertified() *IdentityCertified`

NewIdentityCertified instantiates a new IdentityCertified object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityCertifiedWithDefaults

`func NewIdentityCertifiedWithDefaults() *IdentityCertified`

NewIdentityCertifiedWithDefaults instantiates a new IdentityCertified object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificationId

`func (o *IdentityCertified) GetCertificationId() string`

GetCertificationId returns the CertificationId field if non-nil, zero value otherwise.

### GetCertificationIdOk

`func (o *IdentityCertified) GetCertificationIdOk() (*string, bool)`

GetCertificationIdOk returns a tuple with the CertificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationId

`func (o *IdentityCertified) SetCertificationId(v string)`

SetCertificationId sets CertificationId field to given value.

### HasCertificationId

`func (o *IdentityCertified) HasCertificationId() bool`

HasCertificationId returns a boolean if a field has been set.

### GetCertificationName

`func (o *IdentityCertified) GetCertificationName() string`

GetCertificationName returns the CertificationName field if non-nil, zero value otherwise.

### GetCertificationNameOk

`func (o *IdentityCertified) GetCertificationNameOk() (*string, bool)`

GetCertificationNameOk returns a tuple with the CertificationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationName

`func (o *IdentityCertified) SetCertificationName(v string)`

SetCertificationName sets CertificationName field to given value.

### HasCertificationName

`func (o *IdentityCertified) HasCertificationName() bool`

HasCertificationName returns a boolean if a field has been set.

### GetSignedDate

`func (o *IdentityCertified) GetSignedDate() string`

GetSignedDate returns the SignedDate field if non-nil, zero value otherwise.

### GetSignedDateOk

`func (o *IdentityCertified) GetSignedDateOk() (*string, bool)`

GetSignedDateOk returns a tuple with the SignedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedDate

`func (o *IdentityCertified) SetSignedDate(v string)`

SetSignedDate sets SignedDate field to given value.

### HasSignedDate

`func (o *IdentityCertified) HasSignedDate() bool`

HasSignedDate returns a boolean if a field has been set.

### GetCertifiers

`func (o *IdentityCertified) GetCertifiers() []CertifierResponse`

GetCertifiers returns the Certifiers field if non-nil, zero value otherwise.

### GetCertifiersOk

`func (o *IdentityCertified) GetCertifiersOk() (*[]CertifierResponse, bool)`

GetCertifiersOk returns a tuple with the Certifiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertifiers

`func (o *IdentityCertified) SetCertifiers(v []CertifierResponse)`

SetCertifiers sets Certifiers field to given value.

### HasCertifiers

`func (o *IdentityCertified) HasCertifiers() bool`

HasCertifiers returns a boolean if a field has been set.

### GetReviewers

`func (o *IdentityCertified) GetReviewers() []CertifierResponse`

GetReviewers returns the Reviewers field if non-nil, zero value otherwise.

### GetReviewersOk

`func (o *IdentityCertified) GetReviewersOk() (*[]CertifierResponse, bool)`

GetReviewersOk returns a tuple with the Reviewers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewers

`func (o *IdentityCertified) SetReviewers(v []CertifierResponse)`

SetReviewers sets Reviewers field to given value.

### HasReviewers

`func (o *IdentityCertified) HasReviewers() bool`

HasReviewers returns a boolean if a field has been set.

### GetSigner

`func (o *IdentityCertified) GetSigner() CertifierResponse`

GetSigner returns the Signer field if non-nil, zero value otherwise.

### GetSignerOk

`func (o *IdentityCertified) GetSignerOk() (*CertifierResponse, bool)`

GetSignerOk returns a tuple with the Signer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigner

`func (o *IdentityCertified) SetSigner(v CertifierResponse)`

SetSigner sets Signer field to given value.

### HasSigner

`func (o *IdentityCertified) HasSigner() bool`

HasSigner returns a boolean if a field has been set.

### GetEventType

`func (o *IdentityCertified) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *IdentityCertified) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *IdentityCertified) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *IdentityCertified) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDt

`func (o *IdentityCertified) GetDt() string`

GetDt returns the Dt field if non-nil, zero value otherwise.

### GetDtOk

`func (o *IdentityCertified) GetDtOk() (*string, bool)`

GetDtOk returns a tuple with the Dt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDt

`func (o *IdentityCertified) SetDt(v string)`

SetDt sets Dt field to given value.

### HasDt

`func (o *IdentityCertified) HasDt() bool`

HasDt returns a boolean if a field has been set.


