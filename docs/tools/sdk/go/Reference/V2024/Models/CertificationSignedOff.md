---
id: v2024-certification-signed-off
title: CertificationSignedOff
pagination_label: CertificationSignedOff
sidebar_label: CertificationSignedOff
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CertificationSignedOff', 'V2024CertificationSignedOff'] 
slug: /tools/sdk/go/v2024/models/certification-signed-off
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOff', 'V2024CertificationSignedOff']
---

# CertificationSignedOff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Certification** | [**CertificationSignedOffCertification**](certification-signed-off-certification) |  | 

## Methods

### NewCertificationSignedOff

`func NewCertificationSignedOff(certification CertificationSignedOffCertification, ) *CertificationSignedOff`

NewCertificationSignedOff instantiates a new CertificationSignedOff object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationSignedOffWithDefaults

`func NewCertificationSignedOffWithDefaults() *CertificationSignedOff`

NewCertificationSignedOffWithDefaults instantiates a new CertificationSignedOff object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertification

`func (o *CertificationSignedOff) GetCertification() CertificationSignedOffCertification`

GetCertification returns the Certification field if non-nil, zero value otherwise.

### GetCertificationOk

`func (o *CertificationSignedOff) GetCertificationOk() (*CertificationSignedOffCertification, bool)`

GetCertificationOk returns a tuple with the Certification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertification

`func (o *CertificationSignedOff) SetCertification(v CertificationSignedOffCertification)`

SetCertification sets Certification field to given value.



