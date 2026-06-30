---
id: v1-certificationreference
title: Certificationreference
pagination_label: Certificationreference
sidebar_label: Certificationreference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Certificationreference', 'V1Certificationreference'] 
slug: /tools/sdk/go/triggers/models/certificationreference
tags: ['SDK', 'Software Development Kit', 'Certificationreference', 'V1Certificationreference']
---

# Certificationreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id of the certification. | [optional] 
**Name** | Pointer to **string** | The name of the certification. | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Reviewer** | Pointer to [**Reviewer**](reviewer) |  | [optional] 

## Methods

### NewCertificationreference

`func NewCertificationreference() *Certificationreference`

NewCertificationreference instantiates a new Certificationreference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationreferenceWithDefaults

`func NewCertificationreferenceWithDefaults() *Certificationreference`

NewCertificationreferenceWithDefaults instantiates a new Certificationreference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Certificationreference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Certificationreference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Certificationreference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Certificationreference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Certificationreference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Certificationreference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Certificationreference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Certificationreference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Certificationreference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Certificationreference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Certificationreference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Certificationreference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetReviewer

`func (o *Certificationreference) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *Certificationreference) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *Certificationreference) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *Certificationreference) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.


