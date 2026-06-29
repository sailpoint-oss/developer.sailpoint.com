---
id: v1-certificationidentitysummary
title: Certificationidentitysummary
pagination_label: Certificationidentitysummary
sidebar_label: Certificationidentitysummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Certificationidentitysummary', 'V1Certificationidentitysummary'] 
slug: /tools/sdk/go/certifications/models/certificationidentitysummary
tags: ['SDK', 'Software Development Kit', 'Certificationidentitysummary', 'V1Certificationidentitysummary']
---

# Certificationidentitysummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the identity summary | [optional] 
**Name** | Pointer to **string** | Name of the linked identity | [optional] 
**IdentityId** | Pointer to **string** | The ID of the identity being certified | [optional] 
**Completed** | Pointer to **bool** | Indicates whether the review items for the linked identity's certification have been completed | [optional] 

## Methods

### NewCertificationidentitysummary

`func NewCertificationidentitysummary() *Certificationidentitysummary`

NewCertificationidentitysummary instantiates a new Certificationidentitysummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationidentitysummaryWithDefaults

`func NewCertificationidentitysummaryWithDefaults() *Certificationidentitysummary`

NewCertificationidentitysummaryWithDefaults instantiates a new Certificationidentitysummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Certificationidentitysummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Certificationidentitysummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Certificationidentitysummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Certificationidentitysummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Certificationidentitysummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Certificationidentitysummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Certificationidentitysummary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Certificationidentitysummary) HasName() bool`

HasName returns a boolean if a field has been set.

### GetIdentityId

`func (o *Certificationidentitysummary) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Certificationidentitysummary) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Certificationidentitysummary) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Certificationidentitysummary) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetCompleted

`func (o *Certificationidentitysummary) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Certificationidentitysummary) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Certificationidentitysummary) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Certificationidentitysummary) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.


