---
id: reassignment
title: Reassignment
pagination_label: Reassignment
sidebar_label: Reassignment
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Reassignment'] 
slug: /tools/sdk/go/v3/models/reassignment
tags: ['SDK', 'Software Development Kit', 'Reassignment']
---

# Reassignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**From** |  Pointer to [**CertificationReference**](certification-reference) |  | [optional] 
**Comment** |  Pointer to **string** | The comment entered when the Certification was reassigned | [optional] 

## Methods

### NewReassignment

`func NewReassignment() *Reassignment`

NewReassignment instantiates a new Reassignment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReassignmentWithDefaults

`func NewReassignmentWithDefaults() *Reassignment`

NewReassignmentWithDefaults instantiates a new Reassignment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFrom

`func (o *Reassignment) GetFrom() CertificationReference`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *Reassignment) GetFromOk() (*CertificationReference, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *Reassignment) SetFrom(v CertificationReference)`

SetFrom sets From field to given value.

### HasFrom

`func (o *Reassignment) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetComment

`func (o *Reassignment) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Reassignment) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Reassignment) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Reassignment) HasComment() bool`

HasComment returns a boolean if a field has been set.


[[Back to top]](#) 


