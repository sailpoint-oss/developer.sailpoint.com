---
id: certification-identity-summary
title: CertificationIdentitySummary
pagination_label: CertificationIdentitySummary
sidebar_label: CertificationIdentitySummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CertificationIdentitySummary', 'CertificationIdentitySummary'] 
slug: /tools/sdk/go/v3/models/certification-identity-summary
tags: ['SDK', 'Software Development Kit', 'CertificationIdentitySummary', 'CertificationIdentitySummary']
---

# CertificationIdentitySummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the identity summary | [optional] 
**Name** | Pointer to **string** | Name of the linked identity | [optional] 
**IdentityId** | Pointer to **string** | The ID of the identity being certified | [optional] 
**Completed** | Pointer to **bool** | Indicates whether the review items for the linked identity&#39;s certification have been completed | [optional] 

## Methods

### NewCertificationIdentitySummary

`func NewCertificationIdentitySummary() *CertificationIdentitySummary`

NewCertificationIdentitySummary instantiates a new CertificationIdentitySummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationIdentitySummaryWithDefaults

`func NewCertificationIdentitySummaryWithDefaults() *CertificationIdentitySummary`

NewCertificationIdentitySummaryWithDefaults instantiates a new CertificationIdentitySummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CertificationIdentitySummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificationIdentitySummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificationIdentitySummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CertificationIdentitySummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CertificationIdentitySummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CertificationIdentitySummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CertificationIdentitySummary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CertificationIdentitySummary) HasName() bool`

HasName returns a boolean if a field has been set.

### GetIdentityId

`func (o *CertificationIdentitySummary) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *CertificationIdentitySummary) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *CertificationIdentitySummary) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *CertificationIdentitySummary) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetCompleted

`func (o *CertificationIdentitySummary) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *CertificationIdentitySummary) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *CertificationIdentitySummary) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *CertificationIdentitySummary) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.


