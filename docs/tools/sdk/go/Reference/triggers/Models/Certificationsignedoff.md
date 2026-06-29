---
id: v1-certificationsignedoff
title: Certificationsignedoff
pagination_label: Certificationsignedoff
sidebar_label: Certificationsignedoff
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Certificationsignedoff', 'V1Certificationsignedoff'] 
slug: /tools/sdk/go/triggers/models/certificationsignedoff
tags: ['SDK', 'Software Development Kit', 'Certificationsignedoff', 'V1Certificationsignedoff']
---

# Certificationsignedoff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Certification** | [**CertificationsignedoffCertification**](certificationsignedoff-certification) |  | 

## Methods

### NewCertificationsignedoff

`func NewCertificationsignedoff(certification CertificationsignedoffCertification, ) *Certificationsignedoff`

NewCertificationsignedoff instantiates a new Certificationsignedoff object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationsignedoffWithDefaults

`func NewCertificationsignedoffWithDefaults() *Certificationsignedoff`

NewCertificationsignedoffWithDefaults instantiates a new Certificationsignedoff object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertification

`func (o *Certificationsignedoff) GetCertification() CertificationsignedoffCertification`

GetCertification returns the Certification field if non-nil, zero value otherwise.

### GetCertificationOk

`func (o *Certificationsignedoff) GetCertificationOk() (*CertificationsignedoffCertification, bool)`

GetCertificationOk returns a tuple with the Certification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertification

`func (o *Certificationsignedoff) SetCertification(v CertificationsignedoffCertification)`

SetCertification sets Certification field to given value.



