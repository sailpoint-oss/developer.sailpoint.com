---
id: v1-identitycertified
title: Identitycertified
pagination_label: Identitycertified
sidebar_label: Identitycertified
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitycertified', 'V1Identitycertified'] 
slug: /tools/sdk/go/identityhistory/models/identitycertified
tags: ['SDK', 'Software Development Kit', 'Identitycertified', 'V1Identitycertified']
---

# Identitycertified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationId** | **string** | the id of the certification item | 
**CertificationName** | **string** | the certification item name | 
**SignedDate** | Pointer to **string** | the date ceritification was signed | [optional] 
**Certifiers** | Pointer to [**[]Certifierresponse**](certifierresponse) | this field is deprecated and may go away | [optional] 
**Reviewers** | Pointer to [**[]Certifierresponse**](certifierresponse) | The list of identities who review this certification | [optional] 
**Signer** | Pointer to [**Certifierresponse**](certifierresponse) |  | [optional] 
**EventType** | Pointer to **string** | the event type | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 

## Methods

### NewIdentitycertified

`func NewIdentitycertified(certificationId string, certificationName string, ) *Identitycertified`

NewIdentitycertified instantiates a new Identitycertified object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycertifiedWithDefaults

`func NewIdentitycertifiedWithDefaults() *Identitycertified`

NewIdentitycertifiedWithDefaults instantiates a new Identitycertified object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificationId

`func (o *Identitycertified) GetCertificationId() string`

GetCertificationId returns the CertificationId field if non-nil, zero value otherwise.

### GetCertificationIdOk

`func (o *Identitycertified) GetCertificationIdOk() (*string, bool)`

GetCertificationIdOk returns a tuple with the CertificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationId

`func (o *Identitycertified) SetCertificationId(v string)`

SetCertificationId sets CertificationId field to given value.


### GetCertificationName

`func (o *Identitycertified) GetCertificationName() string`

GetCertificationName returns the CertificationName field if non-nil, zero value otherwise.

### GetCertificationNameOk

`func (o *Identitycertified) GetCertificationNameOk() (*string, bool)`

GetCertificationNameOk returns a tuple with the CertificationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationName

`func (o *Identitycertified) SetCertificationName(v string)`

SetCertificationName sets CertificationName field to given value.


### GetSignedDate

`func (o *Identitycertified) GetSignedDate() string`

GetSignedDate returns the SignedDate field if non-nil, zero value otherwise.

### GetSignedDateOk

`func (o *Identitycertified) GetSignedDateOk() (*string, bool)`

GetSignedDateOk returns a tuple with the SignedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedDate

`func (o *Identitycertified) SetSignedDate(v string)`

SetSignedDate sets SignedDate field to given value.

### HasSignedDate

`func (o *Identitycertified) HasSignedDate() bool`

HasSignedDate returns a boolean if a field has been set.

### GetCertifiers

`func (o *Identitycertified) GetCertifiers() []Certifierresponse`

GetCertifiers returns the Certifiers field if non-nil, zero value otherwise.

### GetCertifiersOk

`func (o *Identitycertified) GetCertifiersOk() (*[]Certifierresponse, bool)`

GetCertifiersOk returns a tuple with the Certifiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertifiers

`func (o *Identitycertified) SetCertifiers(v []Certifierresponse)`

SetCertifiers sets Certifiers field to given value.

### HasCertifiers

`func (o *Identitycertified) HasCertifiers() bool`

HasCertifiers returns a boolean if a field has been set.

### GetReviewers

`func (o *Identitycertified) GetReviewers() []Certifierresponse`

GetReviewers returns the Reviewers field if non-nil, zero value otherwise.

### GetReviewersOk

`func (o *Identitycertified) GetReviewersOk() (*[]Certifierresponse, bool)`

GetReviewersOk returns a tuple with the Reviewers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewers

`func (o *Identitycertified) SetReviewers(v []Certifierresponse)`

SetReviewers sets Reviewers field to given value.

### HasReviewers

`func (o *Identitycertified) HasReviewers() bool`

HasReviewers returns a boolean if a field has been set.

### GetSigner

`func (o *Identitycertified) GetSigner() Certifierresponse`

GetSigner returns the Signer field if non-nil, zero value otherwise.

### GetSignerOk

`func (o *Identitycertified) GetSignerOk() (*Certifierresponse, bool)`

GetSignerOk returns a tuple with the Signer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigner

`func (o *Identitycertified) SetSigner(v Certifierresponse)`

SetSigner sets Signer field to given value.

### HasSigner

`func (o *Identitycertified) HasSigner() bool`

HasSigner returns a boolean if a field has been set.

### GetEventType

`func (o *Identitycertified) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *Identitycertified) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *Identitycertified) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *Identitycertified) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDateTime

`func (o *Identitycertified) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *Identitycertified) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *Identitycertified) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *Identitycertified) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.


