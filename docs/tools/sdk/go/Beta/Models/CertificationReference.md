---
id: certification-reference
title: CertificationReference
pagination_label: CertificationReference
sidebar_label: CertificationReference
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CertificationReference'] 
slug: /tools/sdk/go/beta/models/certification-reference
tags: ['SDK', 'Software Development Kit', 'CertificationReference']
---

# CertificationReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | DTO type of certification for review. | [optional] 
**Id** |  Pointer to **string** | ID of certification for review. | [optional] 
**Name** |  Pointer to **string** | Display name of certification for review. | [optional] 
**Reviewer** |  Pointer to [**Reviewer**](reviewer) |  | [optional] 

## Methods

### NewCertificationReference

`func NewCertificationReference() *CertificationReference`

NewCertificationReference instantiates a new CertificationReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationReferenceWithDefaults

`func NewCertificationReferenceWithDefaults() *CertificationReference`

NewCertificationReferenceWithDefaults instantiates a new CertificationReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CertificationReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CertificationReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CertificationReference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CertificationReference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *CertificationReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificationReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificationReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CertificationReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CertificationReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CertificationReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CertificationReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CertificationReference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetReviewer

`func (o *CertificationReference) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CertificationReference) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CertificationReference) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *CertificationReference) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.


[[Back to top]](#) 


